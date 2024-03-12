import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tsofswrubtxnmwrnvkmf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzb2Zzd3J1YnR4bm13cm52a21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NDAxOTMsImV4cCI6MjAyNDAxNjE5M30.EimNatDC2AXUbbLmuoAfC9uZCFzj226JsTdlgRJOOpA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
