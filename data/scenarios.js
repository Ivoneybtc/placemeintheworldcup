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
  },
  {
    id: "editorial-poster",
    title: "Editorial Poster",
    blurb: "Premium studio poster sitting on a geometric block.",
    icon: "🖼️",
    thumb: "assets/thumbs/editorial-poster.png",
    tint: "#2c5282",
    simplePrompt: "Somebody sitting on a geometric block in a clean studio football poster.",
    namePlacement: "Put the requested name on the front of the jersey as bold custom lettering reading \"{{NAME}}\", positioned above the number {{NUMBER}}. Also echo \"{{NAME}}\" in clean minimal typography accents within the poster layout.",
    template:
`Create a hyper-realistic vertical 9:16 FIFA World Cup 2026 football poster inspired by premium sports editorial photography and minimalist World Cup branding.

Use the same person from the reference image as the main player, keeping their face and features consistent. They are {{JERSEY}}, with the number {{NUMBER}} visible on the jersey.{{NAME_CLAUSE}}

Center the composition on the player sitting confidently on a clean geometric block inside a studio-style environment. They face forward with elbows resting on knees and hands clasped naturally, giving a calm, focused, determined expression toward the camera. Use an official-inspired modern football kit with realistic fabric texture, matching socks and boots, and natural athletic body proportions with ultra-realistic skin texture.

Adapt the entire design to {{COUNTRY}} colors, flag accents, and national football identity. Carry the national palette through jersey colors, sock stripes, typography accents, and subtle national design motifs. Place a large oversized transparent player number {{NUMBER}} vertically behind the player, with a matching number integrated beneath the seat/platform. Add minimal geometric graphic lines, thin UI-inspired football design elements, and small {{COUNTRY}} flag accents on the sides. Keep balanced negative space and an ultra-clean layout. Include a fictionalized World Cup 2026 badge-style mark in a corner without copying exact real logos.

Lighting: soft cinematic studio light with gentle highlights and clean shadows. Style: premium sports editorial poster, hyper-realistic photography, minimalist branding, sharp detail, no exact real brand logos, no text on screen.`
  },
  {
    id: "back-to-back-poster",
    title: "Back-to-Back Poster",
    blurb: "You and the player back-to-back over the country flag.",
    icon: "🤝",
    thumb: "assets/thumbs/back-to-back-poster.png",
    tint: "#1a365d",
    simplePrompt: "Use img1 as me and img2 as the player. Create a cinematic World Cup poster of us back-to-back over the country flag.",
    requiresPlayerPhoto: true,
    namePlacement: "If a custom name is shown, place \"{{NAME}}\" as small clean typography near the bottom edge or as subtle jersey lettering above the number {{NUMBER}}, without competing with the large country title.",
    template:
`Use img1 as my identity reference only. Use img2 as the football player identity reference only.

Create a hyper-realistic vertical 9:16 cinematic World Cup 2026 promotional sports poster.

Composition: waist-up framing of two people standing back-to-back in the center, arms crossed over their chests, looking straight at the camera with calm, serious, confident expressions. I am from img1 on the left. The football player from img2 is on the right. Both of us wear matching {{COUNTRY}} national-team kits — {{JERSEY}}, with the number {{NUMBER}} visible if the jersey fronts are in frame.{{NAME_CLAUSE}}

Background: a large, stylized waving {{COUNTRY}} national flag filling the entire backdrop, dark and atmospheric with soft smoke or mist. Place a thin glowing neon vertical light streak down the exact center of the poster, picking up the main colors of the {{COUNTRY}} flag. Critical layering: the glowing center line must sit behind both players and in front of the flag — never over their faces, bodies, or jerseys. The players stay fully in the foreground; the line only peeks through the gap between them, with a bright white-hot glow / rim light where it passes between their heads and shoulders. Use dramatic dual-tone lighting that matches the flag's primary colors — cooler light on one side, warmer complementary light on the other.

Typography and graphics:
- Large country title at the bottom center reading "{{COUNTRY}}" in a bold uppercase sans-serif with a metallic silver 3D-beveled finish, subtle reflections, and strong presence.
- Directly beneath it, smaller spaced-out white uppercase text reading "WORLD CUP 2026".
- A clean fictionalized {{COUNTRY}} national-team crest / badge centered above the country title.
- Tiny secondary labels: small thin white "{{COUNTRY}}" in a top corner, and a subtle "20 26" mark near the bottom edge.
- Optional faint vertical small-caps text along one side for a premium editorial feel.

Style: high-contrast cinematic sports poster, ultra-realistic faces and fabric, polished modern branding, balanced negative space. No exact real brand logos, no watermark, no extra text beyond the requested poster typography.`
  },
  {
    id: "door-peek",
    title: "Door Peek",
    blurb: "Stylized 3D characters peeking from behind a door.",
    icon: "🚪",
    thumb: "assets/thumbs/door-peek.png",
    tint: "#d69e2e",
    simplePrompt: "Stylized 3D characters in matching soccer jerseys peeking from behind a door on a soft gradient background.",
    requiresMultipleFaces: true,
    namePlacement: "If a custom name is shown, place \"{{NAME}}\" as small clean jersey lettering on the top character's kit above the number {{NUMBER}}.",
    template:
`Use every attached reference photo as a separate face identity. Create one stylized 3D animated character for each attached face — people and pets both count. Match each character's face, hair, and features to its reference while translating them into a polished Pixar / Disney-style 3D look.

Create a clean vertical 9:16 illustration of the characters stacked vertically and peeking out from behind a solid vertical door / wall edge on the left side of the frame. Their hands (or paws) grip the edge as they lean into view. Order them naturally from top to bottom based on how many faces were attached.

Every character wears a matching {{COUNTRY}} national-team jersey — {{JERSEY}}, with the number {{NUMBER}} visible on the kits where it fits.{{NAME_CLAUSE}}

Background: only a soft multi-color vertical gradient that matches the exact colors of the {{COUNTRY}} jersey they are wearing ({{JERSEY}}) — pull the gradient palette directly from that kit's primary and accent colors, the same way the original yellow-jersey version used warm gold / soft lavender / peach tones. Keep the flat light door/wall panel on the left. Soft studio lighting, expressive faces, detailed hair and fabric.

Critical exclusions: do not include any phone screen UI — no clock, time, date, battery, signal bars, status bar, Instagram overlays, app chrome, watermarks, logos, or on-screen text. Output only the character art and gradient background.

Style: high-quality 3D CG character render, soft lighting, playful World Cup fan energy, no photorealism, no text on screen.`
  },
  {
    type: "section",
    title: "Selfies",
    note: "Might not work on GPT Image — try Grok or Nano Banana. Upload the player photo and your photo."
  },
  {
    id: "pitch-invasion-selfie-photo",
    title: "Pitch Selfie",
    blurb: "Celebrating a goal with the captain as teammates rush in.",
    icon: "📱",
    thumb: "assets/thumbs/pitch-selfie.png",
    tint: "#dd6b20",
    simplePrompt: "Use img1 as me and img2 as the captain. Create a hyperrealistic World Cup goal celebration selfie from my own cell phone POV, with teammates running in.",
    requiresPlayerPhoto: true,
    namePlacement: "Do not put the requested name on the captain. Instead, place the requested name on my jersey as bold lettering reading \"{{NAME}}\" above the number {{NUMBER}}.",
    template:
`Use img1 as my identity reference only. Use img2 as the captain / star player identity reference only.

Create a hyperrealistic vertical 9:16 smartphone selfie from the 2026 FIFA World Cup, captured from my own front-facing cell phone camera on the pitch. The image must feel like the exact photo I am taking myself, not a third-person photo of someone taking a picture.

I am from img1, close to the camera in the foreground, holding the phone at arm's length for a selfie while celebrating a goal with the captain of the {{COUNTRY}} national team. I am wearing {{JERSEY}}, with the number {{NUMBER}} visible if the jersey is in frame.{{NAME_CLAUSE}} The phone itself should not be visible, but a partial extended arm or shoulder can appear at the edge of the frame to make it clear I am the one taking the picture.

The captain from img2 is beside me, close enough to fit naturally in the selfie, also {{JERSEY}}, with a captain's armband and a clear number on the jersey. The captain has an arm around me or is locked in celebration, smiling or shouting with open-mouthed joy while looking toward my phone camera.

Teammates in matching kits sprint toward us in the background to join the celebration. Thousands of fans are screaming behind us, stadium lights are bright, grass and confetti are visible around us, and the whole moment feels loud, emotional, and spontaneous.

Use an authentic front-facing cell phone POV: close faces, wide-angle selfie lens distortion, slight camera tilt, imperfect framing, natural motion blur, realistic smartphone exposure, and documentary realism. Make it feel like a viral goal celebration selfie captured by the user seconds after scoring.

No visible phone, no watermark, no logo, no text on screen.`
  },
  {
    id: "tunnel-entrance-player-selfie",
    title: "Tunnel Selfie",
    blurb: "Quick selfie at the players' tunnel entrance.",
    icon: "🚪",
    thumb: "assets/thumbs/tunnel-selfie.png",
    tint: "#319795",
    simplePrompt: "Use img1 as the fan and img2 as the player. Create a spontaneous tunnel-entrance World Cup selfie.",
    requiresPlayerPhoto: true,
    namePlacement: "Do not put the requested name on the football player. Instead, place the requested name on the fan's jersey or lanyard, clearly reading \"{{NAME}}\" with the number {{NUMBER}}.",
    template:
`Use img1 as the fan identity reference only. Use img2 as the football player identity reference only.

Create an ultra-realistic vertical 3:4 smartphone selfie taken right at the entrance of the players' tunnel inside a football stadium, just where players walk out from the tunnel onto the pitch. The setting is very important: this is not on the field and not in the stands. The photo must clearly feel like it was taken at the tunnel entrance area, with the tunnel opening, concrete stadium walls, railings, security staff, and the transition point between the corridor and the pitch visible in the background.

The fan from img1 is in the foreground holding the phone for a selfie, smiling naturally with excitement and disbelief. The fan is {{JERSEY}}, with the number {{NUMBER}} visible if the jersey is in frame.{{NAME_CLAUSE}} The football player from img2 is standing close beside the fan, relaxed and friendly, looking toward the phone camera as if stopping briefly for a quick spontaneous photo on the way out.

Both the fan and the player should appear to be wearing {{COUNTRY}} national-team-style jerseys. The player is also {{JERSEY}}, with the number {{NUMBER}} visible on the player's jersey, so the moment feels like a passionate fan taking a memorable tunnel-side selfie with the player. The image should feel authentic, informal, and slightly unexpected, like a real fan moment that happened near the restricted player access area.

Include the tunnel entrance clearly behind them, with the dark corridor receding into the stadium interior, overhead lights, concrete walls, and a few staff or security personnel nearby. Add metal crowd barriers on one side with a few fans leaning in and watching. The player should look like he has just emerged from the tunnel or is about to head out toward the pitch.

Use a front-facing smartphone camera perspective with vertical 3:4 framing, wide-angle selfie lens, slight arm extension visible if needed, natural handheld feel, realistic smartphone sharpness, natural skin texture, and real stadium lighting. The framing should be slightly imperfect and casual, like a genuine fan selfie.

The final image should look spontaneous and believable, like a viral football selfie captured at the exact entrance of the tunnel where players come out. No cinematic effects, no AI-art styling, no beauty retouching, no watermark, no logo, and no text on screen.`
  },
  {
    id: "security-holding-fan-selfie",
    title: "Security Selfie",
    blurb: "Front-camera selfie while security pulls the fan back.",
    icon: "🛡️",
    thumb: "assets/thumbs/security-selfie.png",
    tint: "#e53e3e",
    simplePrompt: "Use img1 as the fan and img2 as the player. Create a chaotic World Cup selfie while security holds the fan back.",
    requiresPlayerPhoto: true,
    namePlacement: "Do not put the requested name on the football player. Instead, place the requested name on the fan's jersey, clearly reading \"{{NAME}}\" with the number {{NUMBER}}.",
    template:
`Use img1 as the fan identity reference only. Use img2 as the football player identity reference only.

Create an ultra-realistic vertical 3:4 smartphone selfie taken directly from the fan's own front-facing phone camera during a chaotic post-match pitch invasion at a major FIFA World Cup 2026 match.

The fan from img1 is in the close foreground, excited, smiling, and slightly shocked, trying to capture a quick selfie with the football player from img2. The fan is {{JERSEY}}, with the number {{NUMBER}} visible if the jersey is in frame.{{NAME_CLAUSE}} The key detail is that security is actively holding the fan back while the photo is being taken. A security guard has one arm around the fan's chest or shoulder, pulling them away, but the fan is still leaning toward the player and trying to keep the selfie going.

The football player from img2 is beside the fan, close enough to fit naturally in the selfie. The player is also {{JERSEY}}, with the number {{NUMBER}} visible on the player's jersey, smiling with a relaxed and amused expression, as if caught in the middle of the unexpected moment. He should look friendly but surprised, looking toward the phone camera while security tries to separate the fan.

The scene should feel crowded and chaotic. Add security staff in black or orange vests around them, one person reaching in from the side, players and staff scattered across the pitch, photographers nearby, and a packed stadium in the background under bright floodlights.

The photo must feel like a real fan selfie, not a professional sports photo. Use front-facing smartphone perspective, vertical 3:4 framing, wide-angle lens distortion, close faces, imperfect framing, slight camera shake, natural motion blur, realistic smartphone exposure, and authentic stadium lighting.

The fan's arm may be partially visible to show they are holding the phone, but the phone itself should not be visible. Do not show an inset image, screenshot overlay, watermark, or logo, and no text on screen.

Make the image feel spontaneous, funny, tense, and emotional, like a viral selfie captured seconds before security pulls the fan away. Use documentary realism, natural skin texture, realistic fabric, and real stadium atmosphere. No cinematic effects, no CGI, no AI-art look, no beauty retouching.`
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
