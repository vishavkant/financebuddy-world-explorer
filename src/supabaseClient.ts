// supabaseClient.ts
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://oxlzkhakjxwazeuakard.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bHpraGFranh3YXpldWFrYXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NDk1MDEsImV4cCI6MjA2NjUyNTUwMX0.MywvCrqGB-exQf5JsL4g0bJOBpzQyagRB0c2FxKECec';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

