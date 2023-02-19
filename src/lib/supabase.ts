import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABSE_KEY || "";

export const supbaseDATABASE = "webstory";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
