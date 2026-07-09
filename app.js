(function () {
  "use strict";

  // ---------- State ----------
  var state = {
    tab: "image",
    sceneId: null,
    country: null, // { name, snippet }
    number: "",
    nameOn: false,
    name: "",
    commentaryName: ""
  };

  var SCENES = {
    image: window.IMAGE_POSES || [],
    video: window.VIDEO_PROMPTS || []
  };

  // ---------- Elements ----------
  var grid = document.getElementById("scene-grid");
  var countrySearch = document.getElementById("country-search");
  var countryList = document.getElementById("country-list");
  var numberInput = document.getElementById("number-input");
  var nameToggle = document.getElementById("name-toggle");
  var nameInput = document.getElementById("name-input");
  var commentaryWrap = document.getElementById("commentary-wrap");
  var commentaryInput = document.getElementById("commentary-input");
  var generateBtn = document.getElementById("generate-btn");
  var hint = document.getElementById("hint");
  var outputWrap = document.getElementById("output-wrap");
  var output = document.getElementById("output");
  var copyBtn = document.getElementById("copy-btn");
  var copySimpleBtn = document.getElementById("copy-simple-btn");
  var copyNote = document.getElementById("copy-note");
  var tabButtons = document.querySelectorAll(".tab");

  // ---------- Init ----------
  function init() {
    setupCountryCombo();
    renderScenes();
    wireEvents();
    updateCommentaryField();
    updateGenerateState();
  }

  // ---------- Searchable country combobox ----------
  var combo = { open: false, active: -1, results: [] };

  function setupCountryCombo() {
    countrySearch.addEventListener("focus", function () {
      openCombo(countrySearch.value);
    });
    countrySearch.addEventListener("input", function () {
      // Typing clears any previous pick until a new one is chosen.
      state.country = null;
      updateGenerateState();
      openCombo(countrySearch.value);
    });
    countrySearch.addEventListener("keydown", onComboKey);
    countrySearch.addEventListener("blur", function () {
      // Delay so a click on an option registers before the list closes.
      setTimeout(closeCombo, 150);
    });
  }

  function comboQuery(q) {
    var teams = window.TEAMS || [];
    q = (q || "").trim().toLowerCase();
    // If the box shows a selected "flag name", treat as empty (show all).
    if (state.country && countrySearch.value === flagLabel(state.country)) q = "";
    if (!q) return teams.slice();
    return teams.filter(function (t) {
      return t.name.toLowerCase().indexOf(q) !== -1;
    });
  }

  function flagLabel(t) {
    return t.flag + "  " + t.name;
  }

  function openCombo(q) {
    combo.results = comboQuery(q);
    combo.active = -1;
    renderComboList();
    countryList.classList.remove("is-hidden");
    countrySearch.setAttribute("aria-expanded", "true");
    combo.open = true;
  }

  function closeCombo() {
    countryList.classList.add("is-hidden");
    countrySearch.setAttribute("aria-expanded", "false");
    combo.open = false;
    // If they typed but never picked, restore the last valid selection (or clear).
    if (state.country) {
      countrySearch.value = flagLabel(state.country);
    }
  }

  function renderComboList() {
    countryList.innerHTML = "";
    if (!combo.results.length) {
      var empty = document.createElement("li");
      empty.className = "combo-empty";
      empty.textContent = "No countries match that search.";
      countryList.appendChild(empty);
      return;
    }
    combo.results.forEach(function (t, i) {
      var li = document.createElement("li");
      li.className = "combo-option" + (i === combo.active ? " is-active" : "");
      li.setAttribute("role", "option");
      li.innerHTML = '<span class="flag">' + t.flag + "</span><span>" + t.name + "</span>";
      li.addEventListener("mousedown", function (e) {
        e.preventDefault(); // keep focus, beat the blur
        pickCountry(t);
      });
      countryList.appendChild(li);
    });
  }

  function pickCountry(t) {
    state.country = t;
    countrySearch.value = flagLabel(t);
    closeCombo();
    updateGenerateState();
  }

  function onComboKey(e) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!combo.open) { openCombo(countrySearch.value); return; }
      if (!combo.results.length) return;
      var dir = e.key === "ArrowDown" ? 1 : -1;
      combo.active = (combo.active + dir + combo.results.length) % combo.results.length;
      renderComboList();
      var activeEl = countryList.querySelector(".is-active");
      if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      if (combo.open && combo.active >= 0) {
        e.preventDefault();
        pickCountry(combo.results[combo.active]);
      }
    } else if (e.key === "Escape") {
      closeCombo();
    }
  }

  function renderScenes() {
    var scenes = SCENES[state.tab];
    var isVideo = state.tab === "video";
    grid.innerHTML = "";

    scenes.forEach(function (scene) {
      if (scene.type === "section") {
        var label = document.createElement("div");
        label.className = "scene-section-label";
        label.innerHTML = '<strong>' + scene.title + '</strong><span>' + scene.note + "</span>";
        grid.appendChild(label);
        return;
      }

      var card = document.createElement("button");
      card.className = "scene-card";
      card.type = "button";
      card.dataset.id = scene.id;
      if (scene.id === state.sceneId) card.classList.add("is-selected");

      var hasVideo = isVideo && scene.preview;
      var thumbBg = "linear-gradient(160deg, " + scene.tint + ", rgba(0,0,0,0.28))";
      // Video cards play the clip itself, so no static thumbnail; the icon
      // sits behind as a fallback if the clip fails to load.
      var thumbHtml = (!hasVideo && scene.thumb)
        ? '<img class="scene-image" src="' + scene.thumb + '" alt="" loading="lazy" />'
        : '<span class="scene-icon">' + scene.icon + "</span>";
      var videoHtml = hasVideo
        ? '<video class="scene-video" muted loop autoplay playsinline preload="auto" src="' + scene.preview + '"></video>'
        : "";
      var soundPill = hasVideo ? '<span class="sound-pill" aria-hidden="true">🔇</span>' : "";

      card.innerHTML =
        '<div class="check-dot">✓</div>' +
        '<div class="scene-thumb" style="background:' + thumbBg + '">' +
          thumbHtml +
          videoHtml +
          soundPill +
        "</div>" +
        '<div class="scene-meta"><h3>' + scene.title + "</h3><p>" + scene.blurb + "</p></div>";

      card.addEventListener("click", function () {
        selectScene(scene.id);
      });

      // Video cards loop muted on their own; hovering unmutes (audio plays),
      // leaving re-mutes but keeps the loop running.
      var vid = card.querySelector("video");
      if (vid) {
        var pill = card.querySelector(".sound-pill");
        vid.addEventListener("error", function () {
          vid.style.display = "none"; // fall back to the icon
          if (pill) pill.style.display = "none";
        });
        card.addEventListener("mouseenter", function () {
          vid.muted = false;
          var p = vid.play();
          if (p && p.catch) p.catch(function () {});
          if (pill) pill.textContent = "🔊";
        });
        card.addEventListener("mouseleave", function () {
          vid.muted = true;
          if (pill) pill.textContent = "🔇";
        });
      }

      grid.appendChild(card);
    });
  }

  function selectScene(id) {
    state.sceneId = id;
    var cards = grid.querySelectorAll(".scene-card");
    cards.forEach(function (c) {
      c.classList.toggle("is-selected", c.dataset.id === id);
    });
    updateCommentaryField();
    updateGenerateState();
  }

  function wireEvents() {
    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchTab(btn.dataset.tab);
      });
    });

    numberInput.addEventListener("input", function () {
      // digits only, max 2
      var v = numberInput.value.replace(/[^0-9]/g, "").slice(0, 2);
      numberInput.value = v;
      state.number = v;
      updateGenerateState();
    });

    nameToggle.addEventListener("change", function () {
      state.nameOn = nameToggle.checked;
      nameInput.classList.toggle("is-hidden", !state.nameOn);
      if (!state.nameOn) {
        nameInput.value = "";
        state.name = "";
      } else {
        nameInput.focus();
      }
    });

    nameInput.addEventListener("input", function () {
      state.name = nameInput.value.trim();
    });

    commentaryInput.addEventListener("input", function () {
      state.commentaryName = commentaryInput.value.trim();
    });

    generateBtn.addEventListener("click", generate);
    copyBtn.addEventListener("click", function () {
      copyText(output.value, copyBtn, resetCopyBtn);
    });
    copySimpleBtn.addEventListener("click", function () {
      var scene = getScene();
      if (!scene || !scene.simplePrompt) return;
      copyText(scene.simplePrompt, copySimpleBtn, resetCopySimpleBtn);
    });
  }

  function switchTab(tab) {
    if (tab === state.tab) return;
    state.tab = tab;
    state.sceneId = null;
    tabButtons.forEach(function (btn) {
      var active = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    renderScenes();
    outputWrap.classList.add("is-hidden");
    updateCommentaryField();
    updateGenerateState();
  }

  function needsCommentaryName() {
    return state.tab === "video" && (
      state.sceneId === "dribble-and-score" ||
      state.sceneId === "penalty-winner"
    );
  }

  function updateCommentaryField() {
    var show = needsCommentaryName();
    commentaryWrap.classList.toggle("is-hidden", !show);
    if (!show) {
      commentaryInput.value = "";
      state.commentaryName = "";
    }
  }

  function isReady() {
    return !!(state.sceneId && state.country && state.number);
  }

  function updateGenerateState() {
    var ready = isReady();
    generateBtn.disabled = !ready;
    if (ready) {
      hint.textContent = "Ready! Tap Generate to build your prompt.";
    } else {
      var missing = [];
      if (!state.sceneId) missing.push("a scene");
      if (!state.country) missing.push("a country");
      if (!state.number) missing.push("a number");
      hint.textContent = "Pick " + missing.join(", ") + " to continue.";
    }
  }

  function getScene() {
    return SCENES[state.tab].filter(function (s) {
      return s.id === state.sceneId;
    })[0];
  }

  function fillTemplate(scene) {
    var hasName = !!(state.nameOn && state.name);
    var displayName = hasName ? state.name.toUpperCase() : "";
    var commentaryName = state.commentaryName.trim();
    var nameOrPlayer = commentaryName || (hasName ? displayName : "the striker");
    var nameClause = "";

    if (hasName) {
      nameClause = " " + (scene.namePlacement || 'If a custom name is shown, place "{{NAME}}" naturally within the scene with the number {{NUMBER}}.')
        .split("{{NAME}}").join(displayName)
        .split("{{NUMBER}}").join(state.number)
        .split("{{COUNTRY}}").join(state.country.name);
    }

    var body = scene.template
      .split("{{JERSEY}}").join(state.country.snippet)
      .split("{{COUNTRY}}").join(state.country.name)
      .split("{{NUMBER}}").join(state.number)
      .split("{{NAME_CLAUSE}}").join(nameClause)
      .split("{{NAME}}").join(displayName)
      .split("{{NAME_OR_PLAYER}}").join(nameOrPlayer);

    if (hasName) {
      body = body.split("no text on screen").join("no extra text beyond the requested name placement");
    }

    return body;
  }

  function generate() {
    if (!isReady()) return;
    var scene = getScene();
    output.value = fillTemplate(scene);
    outputWrap.classList.remove("is-hidden");
    resetCopyBtn();
    resetCopySimpleBtn();
    updateSimpleCopyButton(scene);
    updateCopyNote(scene);
    outputWrap.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function updateCopyNote(scene) {
    if (!copyNote) return;
    if (scene.requiresMultipleFaces) {
      copyNote.innerHTML = 'Paste it into your image tool <strong>with every face photo attached</strong> (people or pets).';
    } else if (scene.requiresPlayerPhoto) {
      copyNote.innerHTML = 'Might not work on GPT Image — try <strong>Grok or Nano Banana</strong> with your photo and the player photo attached.';
    } else {
      copyNote.innerHTML = 'Paste it into ChatGPT (or your video tool) <strong>with your own photo attached</strong>.';
    }
  }

  function updateSimpleCopyButton(scene) {
    var show = !!(scene && scene.simplePrompt);
    copySimpleBtn.classList.toggle("is-hidden", !show);
    if (show) {
      copySimpleBtn.textContent = "📋 Copy simple video prompt";
    }
  }

  function resetCopyBtn() {
    copyBtn.classList.remove("copied");
    copyBtn.textContent = "📋 Copy prompt";
  }

  function resetCopySimpleBtn() {
    copySimpleBtn.classList.remove("copied");
    copySimpleBtn.textContent = "📋 Copy simple video prompt";
  }

  function copyText(text, btn, resetFn) {
    var done = function () {
      btn.classList.add("copied");
      btn.textContent = "✅ Copied!";
      setTimeout(resetFn, 1800);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        fallbackCopy(text, btn, done);
      });
    } else {
      fallbackCopy(text, btn, done);
    }
  }

  function fallbackCopy(text, btn, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      done();
    } catch (e) {
      btn.textContent = "Press Ctrl/Cmd+C";
    }
    document.body.removeChild(ta);
    window.getSelection().removeAllRanges();
  }

  init();
})();
