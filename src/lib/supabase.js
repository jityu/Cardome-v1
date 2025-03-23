// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://scmmtkykapdwyibvdtoq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjbW10a3lrYXBkd3lpYnZkdG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTY2OTQsImV4cCI6MjA1ODI3MjY5NH0.a5CD5Q3TZnTKGljdfl5pf9lcbKbjH1DCQmMsGmyziug';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);