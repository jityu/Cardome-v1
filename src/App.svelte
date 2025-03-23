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