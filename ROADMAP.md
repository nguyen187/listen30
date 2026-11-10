# Roadmap — Listen 30 & Talk Shop

Autonomous development backlog. Each loop iteration: take the first unchecked item, build it, syntax-check, push, verify on the live page, tick it, add follow-ups found along the way.

## How the code is laid out

- `app.html` — Listen 30 page body (also published as the Claude artifact https://claude.ai/artifact/PFFtUErYMHeMGTzuHqe2ig). Source of truth is the scratchpad copy `listen30.html` during a session; copy it here, then run `./build.sh` to regenerate `index.html`.
- `index.html` — Listen 30 on GitHub Pages (generated).
- `speak/index.html` — Talk Shop (speaking + mentor), GitHub Pages only (needs the microphone).
- Storage: `listen30.v1`, `talkshop.v1`, `talkshop.key`, `talkshop.chat` in localStorage (same origin on GitHub Pages).
- Live: https://nguyen187.github.io/listen30/ and https://nguyen187.github.io/listen30/speak/

## Backlog (top = next)

- [ ] Talk Shop: Mentor AI "explain like a colleague" for any term (hear an SME-style explanation, then retell it)

## Follow-ups

- [ ] Talk Shop: test AI role-play generation and Q&A with a real key (needs the user's key; check JSON schema is accepted)

- [ ] Listen 30 artifact: test the "Vì sao mình nghe sai?" answer through the sample capability (needs the user's claude.ai session)

## Done

- [x] Listen 30: accent comparison drill (same sentence in 4 accents, guess the accent)
- [x] Talk Shop: pronunciation of the user's own term list (paste words → practice cards)
- [x] Both: share a progress card image (canvas) to post in the team chat
- [x] Talk Shop: daily goal ring on Mentor (minutes spoken today vs target)
- [x] Listen 30: shadowing step records the learner too (reuse Talk Shop's recorder on GitHub Pages)
- [x] Both: offline support (cache page for flights) via a service worker on GitHub Pages
- [x] Talk Shop: role-play replay — hear the whole conversation with your recorded answers stitched in
- [x] Talk Shop: recording fix — no cut-off at pauses (silence detection), no restart loop on network/permission errors, clear microphone help
- [x] Listen 30: listening speed test (find the fastest speed you still get 90%)
- [x] Talk Shop: "phrase of the day" card on Mentor with a 1-minute speaking drill
- [x] Both: accessibility pass (labels, focus order, contrast in dark mode)
- [x] Talk Shop: interview mode — Mentor AI acts as a hiring manager for an aviation data role
- [x] Both: onboarding tour for first-time visitors (3 short steps)
- [x] Listen 30: Vocab quiz mode for aviation terms (hear the term in a sentence, pick the meaning)
- [x] Talk Shop: pronunciation heatmap — which words are most often red across all recordings, with a practice list
- [x] Listen 30: dictation of real meeting snippets pasted by the user (paste transcript → TTS → dictation)
- [x] Talk Shop: email/chat writing helper (turn spoken notes into a polished Teams message) with Mentor AI
- [x] Both: add 4 more aviation role-plays/meetings on MRO contracts, warranty claims, supply chain delays, regulatory audits
- [x] Listen 30: daily streak reminder banner + "continue where you left off" button on Mentor/Today
- [x] Talk Shop: shadowing with recording overlay (play model, then own recording, back to back)
- [x] Listen 30: SRS spelling mode (hear word, type it)
- [x] Talk Shop: keyboard shortcut (Space) to start/stop recording, shortcut help
- [x] Talk Shop: weekly AI progress report from practice data
- [x] Talk Shop: minimal-pair speaking drill (ship/sheep etc.) checked by speech recognition
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
