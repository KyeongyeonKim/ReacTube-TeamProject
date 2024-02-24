import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABSE_KEY;

const client = createClient(supabaseUrl, supabaseAnonKey);
export default client;
