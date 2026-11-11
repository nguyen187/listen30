# Roadmap — Listen 30 & Talk Shop

Autonomous development backlog. Each loop iteration: take the first unchecked item, build it, syntax-check, push, verify on the live page, tick it, add follow-ups found along the way.

## How the code is laid out

- `app.html` — Listen 30 page body (also published as the Claude artifact https://claude.ai/artifact/PFFtUErYMHeMGTzuHqe2ig). Source of truth is `app.html`; during a session it is edited in a scratchpad copy `listen30.html` (artifact publishes pass the artifact URL); copy it here, then run `./build.sh` to regenerate `index.html`.
- `index.html` — Listen 30 on GitHub Pages (generated).
- `meetings.js` — mock meetings exported from app.html by build.sh (used by Talk Shop role-plays).
- `speak/index.html` — Talk Shop (speaking + mentor), GitHub Pages only (needs the microphone).
- Cloud: `config.js` (Supabase URL + anon key), `sync.js`, `supabase.sql` (table + row level security).
- Storage: `listen30.v1`, `talkshop.v1`, `talkshop.key`, `talkshop.chat` in localStorage (same origin on GitHub Pages).
- Live: https://nguyen187.github.io/listen30/ and https://nguyen187.github.io/listen30/speak/

## Backlog (top = next)

- [ ] Talk Shop: Phát âm — 'Ôn âm yếu' set like Câu mẫu (pron items under 70%)
- [ ] Listen 30: Ôn từ — 'Nghe trong câu' mode: hear the example sentence, type the missing word

## Follow-ups

- [ ] Listen 30 artifact: file downloads (export, certificate) do nothing in the Claude viewer; declare the downloads capability and save via window.claude.downloads.save there
- [ ] Talk Shop: test AI role-play generation and Q&A with a real key (needs the user's key; check JSON schema is accepted)

- [ ] Listen 30 artifact: test the "Vì sao mình nghe sai?" answer through the sample capability (needs the user's claude.ai session)

## Done

- [x] Talk Shop Mentor: "Ôn N câu mẫu còn yếu" plan item when 3+ phrases are under 70%, opens the weak set
- [x] Listen 30: Thống kê "Từ đã nhớ chắc" 30-day line (cards store the day they reach Hộp 4)
- [x] Talk Shop: Câu mẫu has an "Ôn câu yếu" set (best score under 70%, lowest first, up to 12)
- [x] Listen 30: "Cần ôn thêm" chips play the word, then its example, and show the meaning
- [x] Talk Shop: Lịch sử ghi âm shows per-bài progress chips (độ rõ / từ/phút vs lần đầu)
- [x] Listen 30: Ôn từ shows "Từ của tuần" (words added in 7 days, how many kept, which to review); cards now store their add date
- [x] Listen 30: missed-day banner on the resume bar (also on Today) with a one-tap 15-minute session
- [x] Talk Shop: practice calendar days are clickable and filter Lịch sử ghi âm to that day
- [x] Listen 30: Thống kê calendar (already 8 weeks) now also counts Talk Shop speaking days (light = one app, dark = both)
- [x] Talk Shop Mentor: missed-day banner with a short-session button (first plan item)
- [x] Listen 30: weakest accent panel moves to the top of Giọng đồng nghiệp with a chip; game end links to it
- [x] Talk Shop: Tiến độ shows a 5-week practice calendar from both apps with active days and streak
- [x] Talk Shop Mentor: plan item and diagnosis line for the weakest Listen 30 accent, opening the marked role-plays
- [x] Listen 30: accent game asks the weakest accent about 35% of the time
- [x] Talk Shop: Listen 30 role-plays mark meetings with the weakest Listen 30 accent and open the first one by default
- [x] Listen 30: accent game stores hits per accent (S.work.acc); Thống kê shows "Tai nghe theo giọng" (game + meeting scores)
- [x] Listen 30: "Cuộc họp tuần này" on the meeting list — 3 meetings with the weakest accent, unscored/low first
- [x] Talk Shop: weekly AI report adds Listen 30 hardest dictation lines and term-quiz scores (days done, accuracy and meeting scores were already in)
- [x] Both: "Đổi mật khẩu" in the signed-in account box (new password typed twice, sb.auth.updateUser)
- [x] Cloud accounts: username + password sign-in (username maps to <name>@nguyen187.github.io, Confirm email off); user created their account on the live site
- [x] Listen 30: header account chip (signed-in name or "Đăng nhập", links to Cài đặt)
- [x] Both: after sync, the account status says which copy was kept (from the account or from this device), survives the reload
- [x] Talk Shop: header chip shows the signed-in username (or "Đăng nhập") and links to the account box
- [x] Listen 30: Today page shows a "Đăng nhập để lưu" prompt when signed out (GitHub copy)
- [x] Both: check the dark theme visually on every tab and fix any low-contrast spots (dark passes; light green/red chips darkened to ≥4.5:1)
- [x] Cloud accounts code: sync.js (Supabase email-link / Google sign-in, per-user row with RLS, newest-wins sync of both apps), config.js, supabase.sql
- [x] Listen 30: pronunciation-free 'listen & repeat' mode on phones (no mic needed: just shadow with model + 3-second pause)
- [x] Talk Shop: Mentor shows a 7-day mini chart of minutes spoken
- [x] Listen 30: 'Câu hay sai' also pulls from free dictation and own-text sessions (store their misses)
- [x] Talk Shop: role-play AI feedback compares with the original line from the meeting (already the case: the original line is sent as the reference answer)
- [x] Service worker: also cache meetings.js so Listen 30 role-plays work offline
- [x] Listen 30: summary task without AI — keyword checklist from the meeting quiz answers
- [x] Talk Shop: Listen 30 role-plays — let the learner pick which character to play (not only Nguyen)
- [x] Talk Shop: role-play from the Listen 30 meetings (reuse the 20 meetings as speaking role-plays)
- [x] Listen 30: listening comprehension 'summary' task — after a meeting, record or type a 2-sentence summary, AI checks it
- [x] Talk Shop: Mentor AI "rewrite my sentence 3 ways" quick tool (formal, neutral, casual)
- [x] Listen 30: listening streak calendar heatmap on the Tiến độ page (last 8 weeks)
- [x] Talk Shop: export practice transcripts (journal, talks) as a text file for review
- [x] Listen 30: Today page 'quick session' (15-minute version of the day for busy days)
- [x] Talk Shop: show which recording mode is active next to the red button, with a one-tap switch when an error appears
- [x] Talk Shop: recording mode switch (both / recognition only / recording only) as a fallback; still waiting for the user to confirm the record button
- [x] Talk Shop: 7-step microphone self-test (user reports all steps pass on their machine)
- [x] Listen 30: daily 'word of the day' from the aviation term list on the Today page
- [x] Talk Shop: voice journal — 1-minute daily diary in English with Mentor AI corrections, kept as a timeline
- [x] Talk Shop: pronunciation of acronyms (AOG, MTBUR, ACARS, ETOPS…) letter-by-letter drill with recognition
- [x] Listen 30: "listen before meeting" mode — pick the accent and topic of your next real meeting, get a 10-minute warm-up playlist
- [x] Both: performance pass (lazy-render long lists, avoid re-rendering whole views on small changes) (measured: every view renders in 1-11 ms, no change needed)
- [x] Talk Shop: Mentor plan includes the new drills (rescue reflex, numbers, small talk) when they fit the profile
- [x] Listen 30: end-of-course certificate page with before/after stats
- [x] Talk Shop: "rescue phrases" quick-fire drill (hear a confusing line, respond with the right clarification phrase in 5 seconds)
- [x] Listen 30: 'meeting notes' exercise — after a mock meeting, write the 3 action items, Claude/keywords check them
- [x] Talk Shop: role-play difficulty levels (partner speaks faster, interrupts, uses heavier accent)
- [x] Listen 30: dictation hint level 2 (show the connected-speech rule that applies to the missed words)
- [x] Talk Shop: pace coach — live words-per-minute meter while you talk
- [x] Both: README update with features and how to use them
- [x] Listen 30: "meeting mode" — continuous listening of a full mock meeting with live captions toggle, no quiz
- [x] Talk Shop: numbers speaking drill (say prices, dates, part numbers, flight numbers; checked by recognition)
- [x] Both: settings sync note — explain how the artifact and GitHub copies differ, with one-click export/import between them
- [x] Talk Shop: small-talk deck (weekend, weather, travel, food) with 20 quick prompts and model answers
- [x] Listen 30: weekly listening review — redo the 10 worst dictation sentences of the week
- [x] Talk Shop: Mentor AI "explain like a colleague" for any term (hear an SME-style explanation, then retell it)
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
