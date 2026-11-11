// Supabase connection for cloud sync of user progress.
// Fill these from Supabase → Project Settings → API (Project URL and the "anon" public key).
// The anon key is safe to publish: row level security in supabase.sql limits each user to their own data.
window.SB_CONFIG = {
  url: "",
  anonKey: ""
};
