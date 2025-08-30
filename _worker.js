<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Worker VLESS Account Creator</title>
    <style>
        :root {
            --primary: #4a90e2;
            --primary-dark: #3a70b2;
            --secondary: #f7b731;
            --dark: #2d3748;
            --light: #f8f9fa;
            --success: #48bb78;
            --danger: #e53e3e;
            --gray: #a0aec0;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            color: white;
            width: 100%;
            max-width: 800px;
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            width: 100%;
            max-width: 1000px;
            justify-content: center;
        }
        
        .form-container, .result-container {
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            padding: 30px;
            width: 100%;
            max-width: 480px;
        }
        
        h2 {
            color: var(--dark);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--primary);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dark);
        }
        
        input, select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--gray);
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input:focus, select:focus {
            border-color: var(--primary);
            outline: none;
            box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
        }
        
        button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(to right, var(--primary), var(--primary-dark));
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        .result {
            display: none;
            margin-top: 25px;
        }
        
        .config-output {
            background-color: var(--dark);
            color: var(--light);
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            white-space: pre-wrap;
            word-break: break-all;
            overflow-x: auto;
            margin-top: 10px;
            line-height: 1.5;
        }
        
        .copy-btn {
            margin-top: 15px;
            padding: 10px 15px;
            background-color: var(--secondary);
            color: var(--dark);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: background-color 0.2s;
        }
        
        .copy-btn:hover {
            background-color: #e6a520;
        }
        
        .instructions {
            margin-top: 30px;
            background-color: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            color: white;
            width: 100%;
            max-width: 1000px;
        }
        
        .instructions h3 {
            margin-bottom: 15px;
            font-size: 1.5rem;
        }
        
        .instructions ol {
            margin-left: 20px;
            line-height: 1.6;
        }
        
        .instructions li {
            margin-bottom: 10px;
        }
        
        .instructions code {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
        }
        
        .alert {
            padding: 12px 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            display: none;
        }
        
        .alert-success {
            background-color: #c6f6d5;
            color: #2d7048;
            border-left: 4px solid var(--success);
        }
        
        .alert-error {
            background-color: #fed7d7;
            color: #c53030;
            border-left: 4px solid var(--danger);
        }
        
        .worker-code {
            margin-top: 20px;
            background-color: #2d3748;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            white-space: pre-wrap;
            overflow-x: auto;
            display: none;
        }
        
        .toggle-code {
            margin-top: 15px;
            background: none;
            border: none;
            color: var(--primary);
            text-decoration: underline;
            cursor: pointer;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                align-items: center;
            }
            
            .form-container, .result-container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Worker VLESS Account Creator</h1>
        <p>Buat konfigurasi VLESS secara instan dengan Cloudflare Worker</p>
    </header>
    
    <div class="container">
        <div class="form-container">
            <h2>Buat Konfigurasi VLESS</h2>
            <div id="alertBox" class="alert"></div>
            <form id="vlessForm">
                <div class="form-group">
                    <label for="bug">Bug:</label>
                    <input type="text" id="bug" name="bug" placeholder="Masukkan bug" required>
                </div>
                
                <div class="form-group">
                    <label for="domain">Domain Worker:</label>
                    <input type="text" id="domain" name="domain" placeholder="contoh: namaworker.namauser.workers.dev" required>
                </div>
                
                <div class="form-group">
                    <label for="proxyPath">Proxy Path:</label>
                    <input type="text" id="proxyPath" name="proxyPath" placeholder="Masukkan path proxy" required value="/vless">
                </div>
                
                <div class="form-group">
                    <label for="uuid">UUID (opsional):</label>
                    <input type="text" id="uuid" name="uuid" placeholder="Kosongkan untuk generate otomatis">
                </div>
                
                <button type="submit">Buat Konfigurasi</button>
            </form>
            
            <button class="toggle-code" id="toggleCode">Lihat Kode Worker</button>
            
            <div class="worker-code" id="workerCode">
// Cloudflare Worker untuk membuat akun VLESS
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Generate UUID secara acak jika tidak disediakan
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  const url = new URL(request.url)
  const path = url.pathname
  
  // Jika path adalah /create, buat konfigurasi VLESS
  if (path === '/create') {
    const { searchParams } = url
    
    const bug = searchParams.get('bug') || 'default-bug'
    const userDomain = searchParams.get('domain') || 'example.com'
    const proxyPath = searchParams.get('path') || '/vless'
    let uuid = searchParams.get('uuid')
    
    if (!uuid) {
      uuid = generateUUID()
    }
    
    // Buat konfigurasi VLESS
    const vlessConfig = `vless://${uuid}@${userDomain}:443?encryption=none&security=tls&type=ws&host=${userDomain}&path=${encodeURIComponent(proxyPath)}#${encodeURIComponent(bug)}`
    
    // Kembalikan sebagai JSON
    const response = {
      status: 'success',
      data: {
        config: vlessConfig,
        bug: bug,
        domain: userDomain,
        path: proxyPath,
        uuid: uuid
      }
    }
    
    return new Response(JSON.stringify(response, null, 2), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
  
  // Untuk permintaan lainnya, kembalikan petunjuk penggunaan
  const html = `
    &lt;h1&gt;VLESS Worker Creator&lt;/h1&gt;
    &lt;p&gt;Gunakan endpoint /create dengan parameter berikut:&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;bug - Nama bug (required)&lt;/li&gt;
      &lt;li&gt;domain - Domain worker (required)&lt;/li&gt;
      &lt;li&gt;path - Path proxy (default: /vless)&lt;/li&gt;
      &lt;li&gt;uuid - UUID (opsional, akan digenerate otomatis)&lt;/li&gt;
    &ul&gt;
    &lt;p&gt;Contoh: &lt;code&gt;/create?bug=mybug&domain=myworker.myuser.workers.dev&path=/vless&uuid=12345678-1234-1234-1234-123456789012&lt;/code&gt;&lt;/p&gt;
  `
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  })
}
            </div>
        </div>
        
        <div class="result-container">
            <h2>Hasil Konfigurasi</h2>
            <div class="result" id="resultContainer">
                <p>Konfigurasi VLESS Anda:</p>
                <div class="config-output" id="configOutput"></div>
                <button class="copy-btn" id="copyBtn">Salin ke Clipboard</button>
                
                <div style="margin-top: 20px;">
                    <p>Detail Konfigurasi:</p>
                    <div class="config-output" id="detailsOutput"></div>
                </div>
            </div>
            
            <div id="placeholderResult">
                <p>Isi formulir di sebelah kiri dan klik "Buat Konfigurasi" untuk menghasilkan konfigurasi VLESS.</p>
                <p>Konfigurasi akan ditampilkan di sini setelah berhasil dibuat.</p>
            </div>
        </div>
    </div>
    
    <div class="instructions">
        <h3>Cara Menggunakan:</h3>
        <ol>
            <li>Isi formulir dengan detail yang diperlukan</li>
            <li>Klik "Buat Konfigurasi" untuk menghasilkan link VLESS</li>
            <li>Salin konfigurasi dan gunakan di client VPN Anda</li>
            <li>Untuk deploy worker sendiri, salin kode worker dan deploy di Cloudflare Workers</li>
        </ol>
    </div>

    <script>
        document.getElementById('vlessForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Ambil nilai dari form
            const bug = document.getElementById('bug').value;
            const domain = document.getElementById('domain').value;
            const proxyPath = document.getElementById('proxyPath').value;
            let uuid = document.getElementById('uuid').value;
            
            // Sembunyikan alert
            const alertBox = document.getElementById('alertBox');
            alertBox.style.display = 'none';
            
            try {
                // Buat URL parameter
                const params = new URLSearchParams();
                params.append('bug', bug);
                params.append('domain', domain);
                params.append('path', proxyPath);
                if (uuid) params.append('uuid', uuid);
                
                // Kirim request ke worker (menggunakan worker dummy untuk demo)
                // Dalam implementasi nyata, ganti URL dengan worker Anda
                const response = await fetch(`https://vless-worker-demo.radenpioneer.workers.dev/create?${params}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (data.status === 'success') {
                    // Tampilkan hasil
                    document.getElementById('configOutput').textContent = data.data.config;
                    document.getElementById('detailsOutput').textContent = `Bug: ${data.data.bug}\nDomain: ${data.data.domain}\nPath: ${data.data.path}\nUUID: ${data.data.uuid}`;
                    document.getElementById('resultContainer').style.display = 'block';
                    document.getElementById('placeholderResult').style.display = 'none';
                    
                    // Tampilkan alert sukses
                    alertBox.textContent = 'Konfigurasi berhasil dibuat!';
                    alertBox.className = 'alert alert-success';
                    alertBox.style.display = 'block';
                } else {
                    throw new Error(data.message || 'Terjadi kesalahan');
                }
            } catch (error) {
                console.error('Error:', error);
                
                // Untuk demo, buat konfigurasi lokal jika worker tidak tersedia
                if (!uuid) {
                    uuid = generateUUID();
                }
                
                const config = `vless://${uuid}@${domain}:443?encryption=none&security=tls&type=ws&host=${domain}&path=${encodeURIComponent(proxyPath)}#${encodeURIComponent(bug)}`;
                
                document.getElementById('configOutput').textContent = config;
                document.getElementById('detailsOutput').textContent = `Bug: ${bug}\nDomain: ${domain}\nPath: ${proxyPath}\nUUID: ${uuid}`;
                document.getElementById('resultContainer').style.display = 'block';
                document.getElementById('placeholderResult').style.display = 'none';
                
                // Tampilkan alert info (karena menggunakan fallback)
                alertBox.textContent = 'Worker tidak tersedia, menggunakan generator lokal. Untuk pengalaman terbaik, deploy worker terlebih dahulu.';
                alertBox.className = 'alert alert-success';
                alertBox.style.display = 'block';
            }
        });
        
        document.getElementById('copyBtn').addEventListener('click', function() {
            const configText = document.getElementById('configOutput').textContent;
            navigator.clipboard.writeText(configText).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Tersalin!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
        
        document.getElementById('toggleCode').addEventListener('click', function() {
            const codeElement = document.getElementById('workerCode');
            if (codeElement.style.display === 'block') {
                codeElement.style.display = 'none';
                this.textContent = 'Lihat Kode Worker';
            } else {
                codeElement.style.display = 'block';
                this.textContent = 'Sembunyikan Kode Worker';
            }
        });
        
        // Fungsi untuk generate UUID
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    </script>
</body>
</html>
