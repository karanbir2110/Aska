import { createClient } from '@supabase/supabase-js';

// ✅ Hardcoded for GitHub Pages (anon key is safe)
const supabaseUrl = 'https://rlqqlyhhhaipooytwmcv.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscXFseWhoaGFpcG9veXR3bWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNzEzNzQsImV4cCI6MjA4Mjc0NzM3NH0.aQKfoHf0LWKSdGuWEr1x_9iEbFNK-sLgB_ivXJWhbNI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
