import { SupabaseClient } from '@supabase/supabase-js';

export default function handler(req, res) {
  SupabaseClient.auth.api.setAuthCookie(req, res);
}
