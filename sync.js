// Cloud sync for Listen 30 and Talk Shop (GitHub Pages only).
// Signs the learner in with Supabase (email link or Google) and keeps their progress in one row of
// public.english_progress. The newest copy wins: each app object carries its own updatedAt.
(function () {
  const cfg = window.SB_CONFIG || {};
  const KEYS = [["listen30.v1", "listen30"], ["talkshop.v1", "talkshop"]];
  const SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.js";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const readLocal = k => { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } };
  const enabled = !!(cfg.url && cfg.anonKey);
  let sb = null, user = null, timer = null, status = "", loading = null;
  let googleOn = false;
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
      if (user) {
        el.innerHTML = `<div class="stack" style="gap:8px"><div class="row" style="justify-content:space-between"><span>Đã đăng nhập: <b>${esc(user.email || "tài khoản Google")}</b></span><span class="row"><button class="btn sm" data-cs="sync">Đồng bộ ngay</button><button class="btn sm ghost" data-cs="out">Đăng xuất</button></span></div><div class="small muted">${esc(status || "Tiến độ được tự lưu lên tài khoản sau mỗi lần thay đổi.")}</div><div class="small muted">Bản ghi âm vẫn chỉ nằm trên máy này.</div></div>`;
        el.querySelector('[data-cs="sync"]').onclick = () => pull();
        el.querySelector('[data-cs="out"]').onclick = async () => { await sb.auth.signOut(); status = ""; notify(); };
      } else {
        el.innerHTML = `<div class="stack" style="gap:8px"><div class="small muted">Đăng nhập để lưu hồ sơ và tiến độ lên tài khoản, dùng tiếp trên máy khác. Không cần mật khẩu: web gửi link đăng nhập qua email.</div>
          <div class="row"><input type="email" data-cs="email" placeholder="email@congty.com" autocomplete="email" style="flex:1;min-width:200px" aria-label="Email"><button class="btn sm primary" data-cs="link">Gửi link đăng nhập</button>${googleOn ? '<button class="btn sm" data-cs="google">Đăng nhập Google</button>' : ""}</div>
          <div class="small" data-cs="msg">${esc(status)}</div></div>`;
        const msg = el.querySelector('[data-cs="msg"]');
        el.querySelector('[data-cs="link"]').onclick = async () => {
          const email = el.querySelector('[data-cs="email"]').value.trim(); if (!email) return;
          msg.textContent = "Đang gửi…";
          const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + location.pathname } });
          msg.textContent = error ? "Không gửi được: " + error.message : "Đã gửi. Mở email và bấm link để đăng nhập (kiểm tra cả mục Spam).";
        };
        const gb = el.querySelector('[data-cs="google"]'); if (gb) gb.onclick = async () => {
          const { error } = await sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: location.origin + location.pathname } });
          if (error) msg.textContent = "Không đăng nhập Google được: " + error.message;
        };
      }
    };
    listeners.add(draw); draw();
    if (enabled) sdk().then(draw).catch(e => { el.innerHTML = `<div class="small" style="color:var(--bad)">${esc(e.message)}</div>`; });
  }

  if (enabled) fetch(cfg.url + "/auth/v1/settings", { headers: { apikey: cfg.anonKey } }).then(r => r.json()).then(s => { googleOn = !!(s.external && s.external.google); notify(); }).catch(() => {});
  window.CloudSync = { enabled, mount, queue, get user() { return user; } };
  if (enabled) sdk().then(() => sb.auth.getSession()).then(({ data }) => { if (!user && data.session) { user = data.session.user; notify(); pull(); } }).catch(() => {});
})();
