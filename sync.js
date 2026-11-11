// Cloud sync for Listen 30 and Talk Shop (GitHub Pages only).
// Signs the learner in with Supabase (username + password; a username maps to a placeholder email Supabase requires) and keeps their progress in one row of
// public.english_progress. The newest copy wins: each app object carries its own updatedAt.
(function () {
  const cfg = window.SB_CONFIG || {};
  const KEYS = [["listen30.v1", "listen30"], ["talkshop.v1", "talkshop"]];
  const SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.js";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const readLocal = k => { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } };
  const enabled = !!(cfg.url && cfg.anonKey);
  let sb = null, user = null, timer = null, status = "", loading = null;
  let recovering = false;
  const DOMAIN = "@nguyen187.github.io";
  const toEmail = u => u.includes("@") ? u : u + DOMAIN;
  const shown = u => { const e = (u && u.email) || ""; return e.endsWith(DOMAIN) ? e.slice(0, -DOMAIN.length) : e; };
  const listeners = new Set();
  const notify = () => listeners.forEach(fn => { try { fn(); } catch (e) {} });

  function sdk() {
    if (loading) return loading;
    loading = new Promise((res, rej) => {
      if (window.supabase && window.supabase.createClient) return res();
      const s = document.createElement("script"); s.src = SDK; s.onload = res; s.onerror = () => rej(new Error("Không tải được thư viện Supabase"));
      document.head.appendChild(s);
    }).then(() => {
      sb = window.supabase.createClient(cfg.url, cfg.anonKey, { auth: { persistSession: true, detectSessionInUrl: true, flowType: "pkce" } });
      sb.auth.onAuthStateChange((ev, session) => {
        if (ev === "PASSWORD_RECOVERY") recovering = true;
        const was = user && user.id; user = session ? session.user : null; notify();
        if (user && user.id !== was) pull();
      });
    });
    return loading;
  }

  async function pull() {
    if (!sb || !user) return;
    status = "Đang tải dữ liệu từ tài khoản…"; notify();
    const { data, error } = await sb.from("english_progress").select("listen30,talkshop,updated_at").eq("user_id", user.id).maybeSingle();
    if (error) { status = (error.code === "PGRST205" || error.code === "42P01") ? "Chưa tạo bảng dữ liệu trên Supabase: cần chạy supabase.sql một lần trong SQL Editor." : "Lỗi tải dữ liệu: " + error.message; notify(); return; }
    let changed = false;
    if (data) {
      for (const [k, col] of KEYS) {
        const remote = data[col], local = readLocal(k);
        if (remote && (!local || (remote.updatedAt || 0) > (local.updatedAt || 0))) { localStorage.setItem(k, JSON.stringify(remote)); changed = true; }
      }
    }
    await push(true);
    status = "Đã đồng bộ " + new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }); notify();
    if (changed && !sessionStorage.getItem("cloud.reloaded")) { sessionStorage.setItem("cloud.reloaded", "1"); location.reload(); }
  }

  async function push(quiet) {
    if (!sb || !user) return;
    const row = { user_id: user.id, updated_at: new Date().toISOString() };
    for (const [k, col] of KEYS) { const v = readLocal(k); if (v) row[col] = v; }
    const { error } = await sb.from("english_progress").upsert(row, { onConflict: "user_id" });
    status = error ? ((error.code === "PGRST205" || error.code === "42P01") ? "Chưa tạo bảng dữ liệu trên Supabase: cần chạy supabase.sql một lần." : "Lỗi lưu: " + error.message) : "Đã lưu lên tài khoản " + new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    if (!quiet || error) notify();
  }

  function queue() { if (!enabled || !user) return; clearTimeout(timer); timer = setTimeout(() => push(), 2500); }

  function mount(el) {
    if (!el) return;
    const draw = () => {
      if (!document.body.contains(el)) { listeners.delete(draw); return; }
      if (!enabled) { el.innerHTML = '<div class="small muted">Lưu vào tài khoản chưa được bật: cần điền Supabase URL và anon key trong config.js.</div>'; return; }
      if (user && !recovering) {
        el.innerHTML = `<div class="stack" style="gap:8px"><div class="row" style="justify-content:space-between"><span>Đã đăng nhập: <b>${esc(shown(user))}</b></span><span class="row"><button class="btn sm" data-cs="sync">Đồng bộ ngay</button><button class="btn sm ghost" data-cs="out">Đăng xuất</button></span></div><div class="small muted">${esc(status || "Tiến độ được tự lưu lên tài khoản sau mỗi lần thay đổi.")}</div><div class="small muted">Bản ghi âm vẫn chỉ nằm trên máy này.</div></div>`;
        el.querySelector('[data-cs="sync"]').onclick = () => pull();
        el.querySelector('[data-cs="out"]').onclick = async () => { await sb.auth.signOut(); status = ""; notify(); };
      } else {
        if (recovering) {
          el.innerHTML = `<div class="stack" style="gap:8px"><div class="small muted">Đặt mật khẩu mới cho tài khoản.</div>
            <div class="row"><input type="password" data-cs="np" placeholder="Mật khẩu mới (ít nhất 6 ký tự)" autocomplete="new-password" style="flex:1;min-width:200px" aria-label="Mật khẩu mới"><button class="btn sm primary" data-cs="setpw">Lưu mật khẩu</button></div>
            <div class="small" data-cs="msg"></div></div>`;
          const m = el.querySelector('[data-cs="msg"]');
          el.querySelector('[data-cs="setpw"]').onclick = async () => {
            const pw = el.querySelector('[data-cs="np"]').value; if (pw.length < 6) { m.textContent = "Mật khẩu cần ít nhất 6 ký tự."; return; }
            const { error } = await sb.auth.updateUser({ password: pw });
            if (error) m.textContent = "Không đổi được: " + error.message; else { recovering = false; status = "Đã đổi mật khẩu."; notify(); }
          };
          return;
        }
        el.innerHTML = `<div class="stack" style="gap:8px"><div class="small muted">Đăng nhập để lưu tiến độ lên tài khoản, dùng tiếp trên máy khác. Chưa có tài khoản: nhập tên đăng nhập và mật khẩu rồi bấm "Tạo tài khoản".</div>
          <div class="row"><input type="text" data-cs="user" placeholder="Tên đăng nhập" autocomplete="username" autocapitalize="off" spellcheck="false" style="flex:1;min-width:160px" aria-label="Tên đăng nhập"><input type="password" data-cs="pw" placeholder="Mật khẩu" autocomplete="current-password" style="flex:1;min-width:140px" aria-label="Mật khẩu"></div>
          <div class="row"><button class="btn sm primary" data-cs="in">Đăng nhập</button><button class="btn sm" data-cs="up">Tạo tài khoản</button></div>
          <div class="small" data-cs="msg">${esc(status)}</div></div>`;
        const msg = el.querySelector('[data-cs="msg"]');
        const val = () => {
          const u = el.querySelector('[data-cs="user"]').value.trim().toLowerCase();
          return { name: u, email: u ? toEmail(u) : "", password: el.querySelector('[data-cs="pw"]').value };
        };
        const bad = u => !/^[a-z0-9._-]{3,32}$/.test(u) && !u.includes("@");
        const vi = e => /invalid login/i.test(e.message) ? "Sai tên đăng nhập hoặc mật khẩu." : /not confirmed/i.test(e.message) ? "Tài khoản đang chờ xác nhận: chủ project cần tắt \"Confirm email\" trong Supabase." : /already registered/i.test(e.message) ? "Tên này đã có người dùng: bấm Đăng nhập hoặc chọn tên khác." : /sending|confirmation email|rate limit/i.test(e.message) ? "Supabase đang bật xác nhận email: cần tắt \"Confirm email\" (Authentication → Sign In / Providers → Email)." : e.message;
        el.querySelector('[data-cs="pw"]').onkeydown = e => { if (e.key === "Enter") el.querySelector('[data-cs="in"]').click(); };
        el.querySelector('[data-cs="in"]').onclick = async () => {
          const c = val(); if (!c.name || !c.password) { msg.textContent = "Nhập tên đăng nhập và mật khẩu."; return; }
          msg.textContent = "Đang đăng nhập…";
          const { error } = await sb.auth.signInWithPassword({ email: c.email, password: c.password });
          if (error) msg.textContent = "Không đăng nhập được: " + vi(error);
        };
        el.querySelector('[data-cs="up"]').onclick = async () => {
          const c = val();
          if (bad(c.name)) { msg.textContent = "Tên đăng nhập 3–32 ký tự, chỉ gồm chữ không dấu, số, dấu chấm, gạch dưới hoặc gạch ngang."; return; }
          if (c.password.length < 6) { msg.textContent = "Mật khẩu cần ít nhất 6 ký tự."; return; }
          msg.textContent = "Đang tạo tài khoản…";
          const { data, error } = await sb.auth.signUp({ email: c.email, password: c.password, options: { data: { username: c.name } } });
          if (error) msg.textContent = "Không tạo được: " + vi(error);
          else if (!data.session) msg.textContent = data.user && data.user.identities && !data.user.identities.length ? "Tên này đã có người dùng: bấm Đăng nhập hoặc chọn tên khác." : "Tài khoản đã tạo nhưng đang chờ xác nhận email: cần tắt \"Confirm email\" trong Supabase rồi xác nhận user này trong Authentication → Users.";
        };
      }
    };
    listeners.add(draw); draw();
    if (enabled) sdk().then(draw).catch(e => { el.innerHTML = `<div class="small" style="color:var(--bad)">${esc(e.message)}</div>`; });
  }

  window.CloudSync = { enabled, mount, queue, get user() { return user; } };
  if (enabled) sdk().then(() => sb.auth.getSession()).then(({ data }) => { if (!user && data.session) { user = data.session.user; notify(); pull(); } }).catch(() => {});
})();
