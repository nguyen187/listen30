// Cloud sync for Listen 30 and Talk Shop (GitHub Pages only).
// Signs the learner in with Supabase (email + password) and keeps their progress in one row of
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
        el.innerHTML = `<div class="stack" style="gap:8px"><div class="row" style="justify-content:space-between"><span>Đã đăng nhập: <b>${esc(user.email || "")}</b></span><span class="row"><button class="btn sm" data-cs="sync">Đồng bộ ngay</button><button class="btn sm ghost" data-cs="out">Đăng xuất</button></span></div><div class="small muted">${esc(status || "Tiến độ được tự lưu lên tài khoản sau mỗi lần thay đổi.")}</div><div class="small muted">Bản ghi âm vẫn chỉ nằm trên máy này.</div></div>`;
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
        el.innerHTML = `<div class="stack" style="gap:8px"><div class="small muted">Đăng nhập để lưu hồ sơ và tiến độ lên tài khoản, dùng tiếp trên máy khác. Chưa có tài khoản: nhập email và mật khẩu rồi bấm "Tạo tài khoản".</div>
          <div class="row"><input type="email" data-cs="email" placeholder="email@congty.com" autocomplete="email" style="flex:1;min-width:180px" aria-label="Email"><input type="password" data-cs="pw" placeholder="Mật khẩu" autocomplete="current-password" style="flex:1;min-width:140px" aria-label="Mật khẩu"></div>
          <div class="row"><button class="btn sm primary" data-cs="in">Đăng nhập</button><button class="btn sm" data-cs="up">Tạo tài khoản</button><button class="btn sm ghost" data-cs="forgot">Quên mật khẩu</button></div>
          <div class="small" data-cs="msg">${esc(status)}</div></div>`;
        const msg = el.querySelector('[data-cs="msg"]');
        const val = () => ({ email: el.querySelector('[data-cs="email"]').value.trim(), password: el.querySelector('[data-cs="pw"]').value });
        const vi = e => /invalid login/i.test(e.message) ? "Sai email hoặc mật khẩu." : /not confirmed/i.test(e.message) ? "Email chưa xác nhận: mở email và bấm link xác nhận trước." : /already registered/i.test(e.message) ? "Email này đã có tài khoản: bấm Đăng nhập." : e.message;
        el.querySelector('[data-cs="pw"]').onkeydown = e => { if (e.key === "Enter") el.querySelector('[data-cs="in"]').click(); };
        el.querySelector('[data-cs="in"]').onclick = async () => {
          const c = val(); if (!c.email || !c.password) { msg.textContent = "Nhập email và mật khẩu."; return; }
          msg.textContent = "Đang đăng nhập…";
          const { error } = await sb.auth.signInWithPassword(c);
          if (error) msg.textContent = "Không đăng nhập được: " + vi(error);
        };
        el.querySelector('[data-cs="up"]').onclick = async () => {
          const c = val(); if (!c.email || c.password.length < 6) { msg.textContent = "Nhập email và mật khẩu ít nhất 6 ký tự."; return; }
          msg.textContent = "Đang tạo tài khoản…";
          const { data, error } = await sb.auth.signUp({ ...c, options: { emailRedirectTo: location.origin + location.pathname } });
          if (error) msg.textContent = "Không tạo được: " + vi(error);
          else if (!data.session) msg.textContent = data.user && data.user.identities && !data.user.identities.length ? "Email này đã có tài khoản: bấm Đăng nhập." : "Đã tạo. Mở email và bấm link xác nhận một lần (xem cả Spam), sau đó đăng nhập bằng mật khẩu.";
        };
        el.querySelector('[data-cs="forgot"]').onclick = async () => {
          const { email } = val(); if (!email) { msg.textContent = "Nhập email trước rồi bấm Quên mật khẩu."; return; }
          const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
          msg.textContent = error ? "Không gửi được: " + error.message : "Đã gửi link đặt lại mật khẩu vào email.";
        };
      }
    };
    listeners.add(draw); draw();
    if (enabled) sdk().then(draw).catch(e => { el.innerHTML = `<div class="small" style="color:var(--bad)">${esc(e.message)}</div>`; });
  }

  window.CloudSync = { enabled, mount, queue, get user() { return user; } };
  if (enabled) sdk().then(() => sb.auth.getSession()).then(({ data }) => { if (!user && data.session) { user = data.session.user; notify(); pull(); } }).catch(() => {});
})();
