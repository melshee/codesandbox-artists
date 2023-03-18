import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://weqweyzsbcjtzjwvfpis.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlcXdleXpzYmNqdHpqd3ZmcGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNzExNjksImV4cCI6MTk5MTY0NzE2OX0.Sp5hECTKpysziqzPS76XLXDu2f5YAJKqEWiTJeaR1yQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
