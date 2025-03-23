<script>
  import { supabase } from './lib/supabase.js';

  let message = "Connecting...";

  async function testConnection() {
    const { data, error } = await supabase.from('cards').select('*').limit(1);

    if (error) {
      message = "❌ Error connecting to Supabase";
    } else {
      message = "✅ Connected successfully!";
    }
  }

  testConnection();
</script>

<h2>{message}</h2>
<h1>hello</h1>
<h1>hello im edria wanna join this journey mail me at: ragnaroketernal132002@gmail.com</h1>
