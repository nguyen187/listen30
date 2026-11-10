# Roadmap — Listen 30 & Talk Shop

Autonomous development backlog. Each loop iteration: take the first unchecked item, build it, syntax-check, push, verify on the live page, tick it, add follow-ups found along the way.

## How the code is laid out

- `app.html` — Listen 30 page body (also published as the Claude artifact https://claude.ai/artifact/PFFtUErYMHeMGTzuHqe2ig). Source of truth is the scratchpad copy `listen30.html` during a session; copy it here, then run `./build.sh` to regenerate `index.html`.
- `index.html` — Listen 30 on GitHub Pages (generated).
- `speak/index.html` — Talk Shop (speaking + mentor), GitHub Pages only (needs the microphone).
- Storage: `listen30.v1`, `talkshop.v1`, `talkshop.key`, `talkshop.chat` in localStorage (same origin on GitHub Pages).
- Live: https://nguyen187.github.io/listen30/ and https://nguyen187.github.io/listen30/speak/

## Backlog (top = next)

- [ ] Talk Shop: minimal-pair speaking drill (ship/sheep etc.) checked by speech recognition
- [ ] Talk Shop: weekly AI progress report from practice data
- [ ] Talk Shop: keyboard shortcut (Space) to start/stop recording, shortcut help
- [ ] Listen 30: SRS spelling mode (hear word, type it)

## Follow-ups

- [ ] Talk Shop: test AI role-play generation and Q&A with a real key (needs the user's key; check JSON schema is accepted)

- [ ] Listen 30 artifact: test the "Vì sao mình nghe sai?" answer through the sample capability (needs the user's claude.ai session)

## Done

- [x] Talk Shop: keep recordings history in IndexedDB, compare day 1 vs today
- [x] Listen 30: AI explanation of dictation mistakes (GitHub Pages: reuse Talk Shop key; artifact: `sample` capability)
- [x] Listen 30: 4 more aviation meetings (engine shop visit, fleet planning, data governance, IT security review) with questions
- [x] Listen 30: "noisy call" mode — background noise via Web Audio while dictation plays, to simulate Teams/Zoom
- [x] Both: export / import progress as JSON (move between devices, between artifact and GitHub Pages)
- [x] Both: mobile layout pass at 375px (header/tabs crowding, panels, record button)
- [x] Talk Shop: AI follow-up Q&A after a talk (mentor asks 3 follow-up questions, user answers by voice, mentor grades)
- [x] Talk Shop: AI-generated role-play from the user's real upcoming meeting (describe meeting → Claude returns a role-play script via structured outputs → runs in the role-play widget)
- [x] Listen 30: 30-day course, dictation, SRS, shadowing, numbers, extensive listening
- [x] Listen 30: aviation work track, accents, real-voice player, theme, voice bar, per-speaker voices
- [x] Talk Shop: phrases, role-play, talks, pronunciation, rule-based mentor, Claude mentor chat + feedback
