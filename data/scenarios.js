// Scenario templates for "Place Me in the World Cup".
// Tokens replaced at generate time by app.js:
//   {{JERSEY}}         -> selected country's jersey promptSnippet
//   {{COUNTRY}}        -> selected country name
//   {{NUMBER}}         -> chosen shirt number
//   {{NAME_CLAUSE}}    -> jersey-name sentence (or empty when the toggle is off)
//   {{NAME}}           -> jersey name text when the name toggle is on
//   {{NAME_OR_PLAYER}} -> the jersey name (or a neutral fallback for commentary)

window.IMAGE_POSES = [
  {
    id: "crowd-selfie",
    title: "Crowd Selfie",
    blurb: "Selfie in the stands packed with cheering fans.",
    icon: "🤳",
    thumb: "assets/thumbs/crowd-selfie.jpg",
    tint: "#1f9d55",
    simplePrompt: "Somebody holding a selfie stick in the crowd, cheering, moving the camera around.",
    namePlacement: "Do not put the requested name on the main subject. Instead, include one nearby supporter in the crowd turned partly away from camera, wearing a matching jersey whose upper back clearly reads \"{{NAME}}\" above the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 selfie-style photo taken inside a packed international football stadium during the World Cup.

Use the same person from the reference image as the main subject, keeping their face and features consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

They are in the stands surrounded by a dense crowd of excited supporters, holding the phone at arm's length for a selfie, smiling and cheering. Fans behind them wave flags, wear face paint, and celebrate. Bright stadium floodlights, colorful scarves and flags everywhere.

Style: realistic smartphone selfie look, natural lighting, authentic stadium atmosphere, sharp focus on the face, no text on screen.`
  },
  {
    id: "press-conference",
    title: "Press Conference",
    blurb: "At the mic with a reporter after the match.",
    icon: "🎙️",
    thumb: "assets/thumbs/press-conference.jpg",
    tint: "#2b6cb0",
    simplePrompt: "User having a press conference after a soccer match. They say: we worked hard, we played hard.",
    namePlacement: "Place the requested name on a clean press-table nameplate in front of the subject that reads \"{{NAME}}\". Keep the jersey itself focused on the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 post-match press conference photo.

Use the same person from the reference image as the main subject, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

They sit at a press conference table in front of a realistic World Cup press-room step-and-repeat sponsor wall: a bright white tiled backdrop filled with repeating popular global-brand-style sponsor logo blocks, mixed blue, red, black, green, and purple marks, arranged in neat rows and columns like an official tournament media board. Use varied fictionalized sponsor marks inspired by payment cards, soft drinks, airlines, car brands, sportswear, telecom, and delivery partners so it feels authentic without copying exact real logos. Several microphones, water bottles, and a small table display sit in front of them. A reporter leans in asking a question. Camera flashes around them, with a happy but slightly tired expression like just after a big match.

Style: realistic sports media look, professional lighting, shallow depth of field, authentic press conference backdrop, no exact real brand logos, no extra text beyond the sponsor-style backdrop and requested name placement.`
  },
  {
    id: "flag-selfie",
    title: "Flag POV",
    blurb: "POV selfie holding your country flag in the stands.",
    icon: "🚩",
    thumb: "assets/thumbs/flag-selfie.jpg",
    tint: "#805ad5",
    simplePrompt: "Somebody with a POV camera waving a flag, celebrating.",
    namePlacement: "Do not put the requested name on the main subject's jersey. Instead, add the requested name as small fan-made lettering on the lower edge of the {{COUNTRY}} flag they are holding, clearly reading \"{{NAME}}\" with the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 selfie-style photo taken inside a packed international football stadium during the World Cup.

Use the same person from the reference image as the main subject, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

The image feels like a POV selfie photo: one hand is not visible because it is holding the phone/camera. Their other visible hand is holding and folding/draping the {{COUNTRY}} national flag across the foreground of the selfie, like they are proudly showing the flag to the camera. The flag should be medium-sized, close to the lens, with the country's colors and national identity clearly readable, while the subject's smiling face and jersey remain visible behind it. They are in the stands surrounded by cheering supporters, scarves, painted faces, waving flags, and bright stadium floodlights.

Style: realistic smartphone selfie look, authentic stadium crowd energy, natural skin texture, sharp face, shallow depth of field, no text on screen.`
  },
  {
    id: "goal-celebration",
    title: "Goal Celebration",
    blurb: "Celebrating a goal mobbed by teammates.",
    icon: "🥅",
    thumb: "assets/thumbs/goal-celebration.jpg",
    tint: "#dd6b20",
    simplePrompt: "Somebody running after scoring a goal.",
    namePlacement: "Put the requested name on the front of the jersey as a bold custom name detail reading \"{{NAME}}\", positioned above or near the number {{NUMBER}} so it is visible during the celebration.",
    template:
`Create a realistic vertical 9:16 action photo of a goal celebration on the pitch during a World Cup match.

Use the same person from the reference image as the main player, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

They are mid-celebration after scoring — arms spread wide, sliding on their knees or running with fists clenched, mouth open shouting in joy. Several teammates rush in around them to celebrate, jumping and hugging. Packed stadium, bright floodlights, full motion energy.

Style: realistic sports photography, dramatic action, shallow depth of field, no text on screen.`
  },
  {
    id: "on-the-pitch",
    title: "On The Pitch",
    blurb: "Mid-match action, ball at your feet.",
    icon: "⚽",
    thumb: "assets/thumbs/on-the-pitch.jpg",
    tint: "#319795",
    simplePrompt: "Somebody running with the ball on the pitch during a match.",
    namePlacement: "Place the requested name on a pitchside player spotlight board or LED graphic in the background, clearly reading \"{{NAME}}\" with the number {{NUMBER}}, while the main player stays in action.",
    template:
`Create a realistic vertical 9:16 action photo of a footballer mid-match during a World Cup game.

Use the same person from the reference image as the main player, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

They are running with the ball at their feet, dribbling past an opponent, focused and athletic, with sweat and motion visible. Lush green pitch, packed blurred crowd in the background, bright stadium floodlights.

Style: realistic sports broadcast / photography look, frozen action, natural motion blur, no text on screen.`
  },
  {
    id: "trophy-lift",
    title: "Trophy Lift",
    blurb: "Lifting the trophy as champion in confetti.",
    icon: "🏆",
    thumb: "assets/thumbs/trophy-lift.jpg",
    tint: "#d69e2e",
    simplePrompt: "Somebody lifting a trophy from a soccer competition.",
    namePlacement: "Put the requested name on the front of the jersey as a bold custom name detail reading \"{{NAME}}\", positioned above or near the number {{NUMBER}} while they lift the trophy.",
    template:
`Create a realistic vertical 9:16 photo of a player lifting the championship trophy as a World Cup winner.

Use the same person from the reference image as the main subject, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

They lift a golden championship trophy above their head with both hands, mouth open in triumphant celebration. Gold confetti and streamers fall everywhere, teammates celebrate behind them, and the full stadium erupts.

Style: realistic celebration photography, golden confetti, dramatic floodlights, euphoric mood, no text on screen.`
  }
];

window.VIDEO_PROMPTS = [
  {
    id: "post-match-interview",
    title: "Post-Match Interview",
    blurb: "Pitchside reporter interview with a viral line.",
    icon: "🎤",
    thumb: "assets/thumbs/post-match-interview.jpg",
    preview: "assets/thumbs/post-match-interview.mp4",
    tint: "#2b6cb0",
    namePlacement: "Place the requested name on a small interview nameplate or mic-stand placard in front of the subject that reads \"{{NAME}}\", while the jersey stays focused on the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 post-match football interview scene on the pitch inside a packed international soccer stadium.

Use the same person from the reference image as the main subject, keeping their face consistent. The subject is {{JERSEY}}, with the number {{NUMBER}} visible on the jersey and no official logos or brand marks.{{NAME_CLAUSE}} They look happy, energized, slightly sweaty, and tired like they just finished playing a big match.

A sports reporter stands beside them on the field holding a microphone, near a portable mixed-zone media board with a realistic step-and-repeat pattern of repeating popular global-brand-style sponsor blocks. The board has neat rows of fictionalized payment-card, soft-drink, airline, car, sportswear, telecom, and delivery-partner style marks in mixed colors, like an official tournament sponsor backdrop, without copying exact real logos. Stadium lights are bright, the crowd is still cheering in the background, and several players are walking around behind them, celebrating, talking, stretching, and heading toward teammates. The scene should feel like a real live post-match broadcast after a dramatic win.

The reporter asks:
“What was the secret to your success?”

The subject smiles and replies:
“We worked hard, we played hard, and we scored hard.”

The reporter smiles and says:
“Amen to that.”

They both laugh naturally as the subject runs back toward their teammates, who jump around them shouting and celebrating together. They all chant:
“Let’s goooooooo!”

Style: realistic sports broadcast look, natural post-match interview energy, cinematic stadium lighting, players moving in the background, authentic crowd noise, realistic face consistency, no text on screen.`
  },
  {
    id: "fan-celebration",
    title: "Fan Celebration",
    blurb: "In the stands, deep in the crowd, going wild.",
    icon: "🎉",
    thumb: "assets/thumbs/character-reference.jpg",
    preview: "assets/thumbs/fan-celebration.mp4",
    tint: "#1f9d55",
    namePlacement: "Do not put the requested name on the main subject. Instead, include one nearby fan turned away in the crowd wearing a matching jersey whose upper back clearly reads \"{{NAME}}\" above the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 World Cup-style fan celebration scene inside a packed soccer stadium.

Use the same person from the reference image as the main subject, keeping their face consistent. Show them standing in the middle of the fan stands, surrounded by a large crowd of excited supporters. They are not on the pitch — they are in the spectator section, packed closely with fans around them.

They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}} The fans around them are cheering, jumping, waving flags, clapping, raising their hands, and celebrating a big moment in the match. The subject is smiling, cheering, pumping a fist, and celebrating with the crowd.

There is no dialogue and no speech. Focus only on the visual energy: loud crowd reaction, stadium lights, flags moving, fans shouting, people hugging, and the feeling of being right in the middle of the action.

Use natural handheld camera movement, like a real fan video captured from inside the stands. Make it feel immersive, energetic, and believable.

Style: realistic stadium atmosphere, fan stand crowd energy, cinematic sports lighting, natural motion, realistic face consistency, no text on screen.`
  },
  {
    id: "dribble-and-score",
    title: "Dribble & Score",
    blurb: "Multi-camera match-winning goal with commentary.",
    icon: "📹",
    thumb: "assets/thumbs/dribble-and-score.jpg",
    preview: "assets/thumbs/dribble-and-score.mp4",
    tint: "#dd6b20",
    namePlacement: "Show the requested name on a stadium player spotlight graphic or pitchside LED board during one broadcast cutaway, clearly reading \"{{NAME}}\" with the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 football match scene that looks like actual live international soccer broadcast footage.

Use the same person from the reference image as the main player, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey and no official logos or brand marks.{{NAME_CLAUSE}} The scene takes place late in a big match inside a packed stadium with bright lights and intense crowd energy.

The player receives the ball and starts dribbling forward with confidence, speed, and close control. Show several opposing defenders trying to stop them as they move through midfield and into the attacking third. Teammates make runs around them while the defending team scrambles to recover.

Use realistic broadcast camera coverage, not one continuous camera shot. Include multiple angles: wide match camera showing the shape of play, closer sideline tracking shot, low angle footwork shot, reverse angle facing the attack, quick crowd reaction cutaway, behind-the-goal angle, and a replay-style shot of the final move.

The player beats the last defender, creates space, and scores a dramatic winning goal. The ball hits the back of the net, the crowd erupts, and teammates rush in to celebrate.

Audio should include excited match commentary:
“It’s {{NAME_OR_PLAYER}}... clever ball... {{NAME_OR_PLAYER}}!”
“Goal!”
“{{NAME_OR_PLAYER}} has won them the game!”

Style: realistic live football broadcast, professional multi-camera sports coverage, dramatic match-winning goal, natural player movement, packed stadium, loud crowd, cinematic but believable, no text on screen.`
  },
  {
    id: "slowmo-celebration",
    title: "Slow-Mo Fan Dance",
    blurb: "Static broadcast cutaway of two fans dancing.",
    icon: "🐢",
    thumb: "assets/thumbs/slowmo-celebration.jpg",
    preview: "assets/thumbs/slowmo-celebration.mp4",
    tint: "#805ad5",
    namePlacement: "Place the requested name on a scarf or small flag held by the second supporter, clearly reading \"{{NAME}}\" with the number {{NUMBER}}, without making it feel like an advertisement.",
    template:
`Create a realistic vertical 9:16 slow-motion broadcast cutaway of fans in the crowd during a World Cup match.

Use the same person from the reference image as one of two featured supporters in the stands, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}} A second supporter stands next to them, also dressed like a passionate matchday fan.

This is not a goal celebration and not a trophy moment. It is the kind of quick fan cutaway shown during a live match broadcast: two supporters in the crowd dancing, bouncing, clapping, and vibing in slow motion while the match atmosphere continues around them. They are smiling, moving to the stadium music, lightly jumping in place, waving a scarf or small flag, and having fun. The surrounding crowd is packed and lively, but nobody is mobbing the subject or reacting to a specific goal.

Camera: static locked-off broadcast camera, no push-in, no handheld movement, no orbit, no zoom. The shot simply cuts to the two fans and holds on them as they dance in slow motion.

Audio: no dialogue. Use ambient stadium music, crowd chatter, clapping, and a soft crowd roar underneath the slow-motion footage.

Style: realistic live sports broadcast fan cutaway, high-frame-rate slow motion, natural crowd lighting, fun matchday energy, realistic face consistency, no text on screen.`
  },
  {
    id: "tunnel-walkout",
    title: "Tunnel Walkout",
    blurb: "Out of the tunnel into a roaring stadium + anthem.",
    icon: "🚪",
    thumb: "assets/thumbs/character-reference.jpg",
    preview: "assets/thumbs/tunnel-walkout.mp4",
    tint: "#319795",
    namePlacement: "Place the requested name on the back of a walkout jacket or tunnel wall player graphic visible during the tunnel sequence, clearly reading \"{{NAME}}\" with the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 cinematic scene of a player walking out of the tunnel onto the pitch before a big World Cup match.

Use the same person from the reference image as the main player, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey and no official brand logos.{{NAME_CLAUSE}}

Start in the dark stadium tunnel with the player walking forward, focused and serious, then emerge into the bright floodlights of a packed, roaring stadium. Camera flashes sparkle around the stands. The player lines up on the pitch with teammates, standing tall for the national anthem, hand on chest, taking a deep breath and looking up at the crowd. Cut between a low tracking shot from the front, a side profile during the anthem, and a wide reveal of the full stadium.

Audio: rising crowd noise, a distant stadium announcer, and the swelling national anthem atmosphere.

Style: cinematic pre-match broadcast look, dramatic lighting transition from tunnel to pitch, goosebumps atmosphere, realistic face consistency, no text on screen.`
  },
  {
    id: "penalty-winner",
    title: "Penalty Winner",
    blurb: "The decisive spot-kick to win it all.",
    icon: "🎯",
    thumb: "assets/thumbs/character-reference.jpg",
    preview: "assets/thumbs/penalty-winner.mp4",
    tint: "#e53e3e",
    namePlacement: "Show the requested name on the stadium scoreboard or player spotlight board before the kick, clearly reading \"{{NAME}}\" with the number {{NUMBER}}.",
    template:
`Create a realistic vertical 9:16 dramatic World Cup penalty shootout scene that looks like live broadcast footage.

Use the same person from the reference image as the main player, keeping their face consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey and no official brand logos.{{NAME_CLAUSE}} It is the decisive penalty to win the match.

Show the player placing the ball on the penalty spot, taking a deep breath, and stepping back. The packed stadium falls tense and quiet, fans holding their breath, some covering their eyes. Use broadcast-style angles: behind the player, behind the goal, a tight face close-up, and a crowd reaction shot. The player runs up and strikes the ball into the net past the diving goalkeeper.

The stadium erupts. The player sprints away in wild celebration as teammates chase and mob them, everyone screaming with joy.

Audio: tense silence before the kick, then explosive commentary and crowd roar. The commentator says the player's commentary name before the run-up:
“{{NAME_OR_PLAYER}} steps up...”
“{{NAME_OR_PLAYER}} to win it... GOAL! They've done it!”

Style: realistic live football broadcast, high-tension drama, multi-camera coverage, dramatic floodlights, euphoric celebration, realistic face consistency, no text on screen.`
  }
];
