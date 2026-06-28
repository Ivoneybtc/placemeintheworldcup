#!/usr/bin/env node
/**
 * Builds filled video preview prompts matching app.js fillTemplate() logic.
 * Used for Runway MCP generate_video calls (seedance-2, 720p, 9:16, 10s).
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const scenariosSrc = fs.readFileSync(path.join(root, "data/scenarios.js"), "utf8");
const teamsSrc = fs.readFileSync(path.join(root, "data/teams.js"), "utf8");

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(teamsSrc + "\n" + scenariosSrc, sandbox);

const TEAMS = sandbox.window.TEAMS;
const VIDEO_PROMPTS = sandbox.window.VIDEO_PROMPTS;

const JOBS = [
  { sceneId: "post-match-interview", country: "Argentina", number: "10", preview: "post-match-interview.mp4" },
  { sceneId: "fan-celebration", country: "Portugal", number: "7", preview: "fan-celebration.mp4" },
  { sceneId: "dribble-and-score", country: "France", number: "10", preview: "dribble-and-score.mp4" },
  { sceneId: "slowmo-celebration", country: "Norway", number: "7", preview: "slowmo-celebration.mp4" },
  { sceneId: "tunnel-walkout", country: "United States", number: "10", preview: "tunnel-walkout.mp4" },
  { sceneId: "penalty-winner", country: "England", number: "9", preview: "penalty-winner.mp4" },
];

function teamByName(name) {
  const t = TEAMS.find((x) => x.name === name);
  if (!t) throw new Error("Unknown country: " + name);
  return t;
}

function fillTemplate(scene, country, number) {
  const nameClause = "";
  const nameOrPlayer = "the striker";

  return scene.template
    .split("{{JERSEY}}").join(country.snippet)
    .split("{{COUNTRY}}").join(country.name)
    .split("{{NUMBER}}").join(number)
    .split("{{NAME_CLAUSE}}").join(nameClause)
    .split("{{NAME}}").join("")
    .split("{{NAME_OR_PLAYER}}").join(nameOrPlayer);
}

function runwayPrompt(body) {
  return (
    "Use @character as the main subject — keep their face, skin tone, and identity consistent with the attached reference image. " +
    body
  );
}

const jobs = JOBS.map((job) => {
  const scene = VIDEO_PROMPTS.find((s) => s.id === job.sceneId);
  if (!scene) throw new Error("Unknown scene: " + job.sceneId);
  const country = teamByName(job.country);
  const body = fillTemplate(scene, country, job.number);
  return {
    sceneId: job.sceneId,
    title: scene.title,
    country: job.country,
    number: job.number,
    preview: `assets/thumbs/${job.preview}`,
    promptText: runwayPrompt(body),
  };
});

console.log(JSON.stringify(jobs, null, 2));
