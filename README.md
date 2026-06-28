# Place Me in the World Cup

A static web app that helps people build ready-to-paste AI prompts for placing themselves into World Cup-style image and video scenes.

Users pick a scene, country jersey, shirt number, and optional name. The app generates a detailed prompt they can copy into ChatGPT or a video tool with their own selfie.

- Repository: https://github.com/crownemmanuel/placemeintheworldcup
- GitHub Pages URL: https://crownemmanuel.github.io/placemeintheworldcup/

> Fan-made project. Not affiliated with FIFA.

## Features

- Image and video prompt tabs
- Searchable country selector with 48 World Cup teams
- Scene-specific jersey/name placement
- Commentary-name field for match commentary scenes
- Copyable detailed prompts and simpler video prompts
- Static thumbnails and muted looping video previews
- No build step or framework required

## Run Locally

Open `index.html` directly in a browser, or run the local static server:

```bash
python3 scripts/serve.py
```

Then open:

```text
http://127.0.0.1:4321/
```

To test from a phone on the same Wi-Fi, serve on all interfaces:

```bash
python3 scripts/serve.py --host 0.0.0.0 --port 4322
```

Then open `http://<your-local-ip>:4322/` on your phone.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After pushing to `main`:

1. Open the GitHub repository settings.
2. Go to **Pages**.
3. Set the source to **GitHub Actions** if it is not already selected.
4. The workflow deploys the static site from the repository root.

## File Structure

```text
index.html              Page markup
styles.css              Visual design and responsive layout
app.js                  App state, scene rendering, prompt generation, copy actions
data/teams.js           Team names, flags, groups, and jersey prompt snippets
data/scenarios.js       Image and video scene prompt templates
assets/cursor/ball.svg  Custom football cursor
assets/thumbs/          Scene thumbnails and video preview clips
scripts/serve.py        Optional local static server
```

## Editing Prompts

Scene prompts live in `data/scenarios.js`.

Templates support these tokens:

- `{{JERSEY}}` - selected country's jersey prompt snippet
- `{{COUNTRY}}` - selected country name
- `{{NUMBER}}` - selected shirt number
- `{{NAME_CLAUSE}}` - scene-specific name placement text when enabled
- `{{NAME}}` - entered jersey/name text
- `{{NAME_OR_PLAYER}}` - commentary name, jersey name, or fallback phrase

## Assets and Rights

The app is open-source under the MIT License.

Generated thumbnails and preview videos in `assets/thumbs/` are included as app assets. Before using the project commercially or in a public campaign, review any generated media and third-party-looking marks for rights, likeness, trademark, and platform-policy concerns.

The app is a fan-made prompt builder and is not affiliated with FIFA.
