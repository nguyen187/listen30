# Listen 30 & Talk Shop

Two free web apps for Vietnamese professionals who need English at work in aviation and data: meetings with SMEs, Airbus and airlines, with French, Indian, German and Spanish accents.

- **Listen 30** — https://nguyen187.github.io/listen30/ (also as a Claude artifact)
- **Talk Shop** — https://nguyen187.github.io/listen30/speak/ (speaking, needs Chrome or Edge and a microphone)

## Listen 30 (listening)

- 30-day course, about 60 minutes a day: spaced-repetition vocabulary, a connected-speech lesson (weak forms, linking, elision, flap T…), 10 new words, dictation with word-level diff, shadowing with recording, numbers, and real-world listening.
- Work track: 18 mock aviation meetings (AOG, reliability, service bulletins, utilization, configuration in parts, warranty, audits…) with quizzes and live captions, accent guide, 110 terms with listening quizzes, NATO alphabet and code drills, guess-the-accent game.
- Voice bar: force one accent, pick the reader, speed, background noise (bad call, café).
- Extra practice: free dictation, your own pasted text, worst sentences review, listening speed test, minimal pairs, numbers.
- Real voices: practice player for your own recordings or YouTube (A–B loop, speed, transcript diff), YouGlish, LiveATC and other sources.
- AI: "why did I mishear?" (Claude in the artifact; your own API key on GitHub Pages).

## Talk Shop (speaking)

- Mentor: profile, daily plan built from your real results in both apps, diagnosis, tips, meeting prep, phrase of the day, daily speaking goal.
- Phrases (56, by meeting function), role-plays (10 built-in plus AI-generated from your real meetings), talks with metrics (speed, fillers, terms), small-talk deck, pronunciation (endings, stress, th/v/r, numbers, minimal pairs, your own terms), misheard-words heatmap.
- Recording history (first vs latest), model-then-me playback, role-play replay with your voice.
- Mentor AI (Claude, with your own Anthropic API key, stored only in your browser): chat, feedback on talks and role-plays, follow-up Q&A, mock interview, explain-and-retell, Teams/email writer, weekly report.

## Data

Everything is stored in your browser (localStorage, IndexedDB). Export/import a progress file from either app to move between devices or between the artifact and GitHub copies. Works offline on GitHub Pages via a service worker.

## Development

`app.html` is the Listen 30 page body (also published as the artifact); `./build.sh` wraps it into `index.html`. Talk Shop is `speak/index.html`. See `ROADMAP.md`.
