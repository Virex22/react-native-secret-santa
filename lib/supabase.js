import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://clzkzjyjuaqsayhpcnrv.supabase.co';

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsemt6anlqdWFxc2F5aHBjbnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA1MDM0NDksImV4cCI6MTk4NjA3OTQ0OX0.XOAh-gT5mqTa6u-YtMBcMVNw6N8lAVsn0ZQQ0nq7acM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
