const HTML_CONTENT = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembuat Akun VLESS NTLS</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            color: #333;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .container {
            width: 100%;
            max-width: 800px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            padding: 30px;
            margin-top: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        h1 {
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 2.2rem;
        }
        
        .description {
            color: #7f8c8d;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #34495e;
        }
        
        input, select {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input:focus, select:focus {
            border-color: #3498db;
            outline: none;
            box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }
        
        .form-row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .form-row .form-group {
            flex: 1;
        }
        
        button {
            background: #3498db;
            color: white;
            border: none;
            padding: 14px 20px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: background 0.3s;
        }
        
        button:hover {
            background: #2980b9;
        }
        
        .result-container {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 5px solid #3498db;
        }
        
        .result-title {
            font-weight: 600;
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        #configResult {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            white-space: pre-wrap;
            word-break: break-all;
            margin-top: 10px;
            overflow-x: auto;
        }
        
        .copy-btn {
            background: #27ae60;
            margin-top: 10px;
            padding: 10px;
        }
        
        .copy-btn:hover {
            background: #219653;
        }
        
        footer {
            text-align: center;
            margin-top: 30px;
            color: #ecf0f1;
            font-size: 0.9rem;
        }
        
        @media (max-width: 600px) {
            .form-row {
                flex-direction: column;
                gap: 0;
            }
            
            h1 {
                font-size: 1.8rem;
            }
        }
        
        .auto-fill {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .auto-fill-btn {
            background: #9b59b6;
            padding: 8px 15px;
            font-size: 14px;
            width: auto;
        }
        
        .auto-fill-btn:hover {
            background: #8e44ad;
        }
        
        .info-text {
            font-size: 0.9rem;
            color: #7f8c8d;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Pembuat Konfigurasi VLESS NTLS</h1>
            <p class="description">Buat konfigurasi VLESS NTLS untuk penggunaan pribadi Anda</p>
        </header>
        
        <div class="auto-fill">
            <span>Isi otomatis dengan detail halaman ini</span>
            <button type="button" id="autoFillBtn" class="auto-fill-btn">Isi Otomatis</button>
        </div>
        
        <form id="vlessForm">
            <div class="form-row">
                <div class="form-group">
                    <label for="uuid">UUID:</label>
                    <input type="text" id="uuid" value="2bcfbfba-b446-4ad5-93ad-72af9e008f61" required>
                </div>
                
                <div class="form-group">
                    <label for="address">Address/Server:</label>
                    <input type="text" id="address" value="" placeholder="domain-anda.com" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="port">Port:</label>
                    <input type="number" id="port" value="443" required>
                </div>
                
                <div class="form-group">
                    <label for="security">Security:</label>
                    <select id="security">
                        <option value="tls" selected>tls</option>
                        <option value="none">none</option>
                        <option value="xtls">xtls</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="encryption">Encryption:</label>
                    <select id="encryption">
                        <option value="none" selected>none</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="type">Type:</label>
                    <select id="type">
                        <option value="ws" selected>ws (WebSocket)</option>
                        <option value="tcp">tcp</option>
                        <option value="kcp">kcp</option>
                        <option value="h2">h2</option>
                        <option value="quic">quic</option>
                    </select>
                </div>
            </div>
            
            <div class="form-group">
                <label for="host">Host:</label>
                <input type="text" id="host" value="" placeholder="domain-anda.com" required>
                <p class="info-text">Host akan diisi otomatis dengan domain/subdomain halaman ini</p>
            </div>
            
            <div class="form-group">
                <label for="path">Path:</label>
                <input type="text" id="path" value="/" placeholder="/" required>
                <p class="info-text">Path otomatis diisi dengan "/"</p>
            </div>
            
            <div class="form-group">
                <label for="remark">Remark/Nama Koneksi (opsional):</label>
                <input type="text" id="remark" placeholder="Kosongkan untuk menggunakan nama domain">
                <p class="info-text">Jika dikosongkan, akan menggunakan nama domain sebagai remark</p>
            </div>
            
            <button type="button" id="generateBtn">Buat Konfigurasi</button>
        </form>
        
        <div class="result-container">
            <div class="result-title">Hasil Konfigurasi VLESS:</div>
            <div id="configResult">Konfigurasi akan muncul di sini setelah Anda mengisi formulir dan mengeklik "Buat Konfigurasi".</div>
            <button type="button" id="copyBtn" class="copy-btn">Salin ke Clipboard</button>
        </div>
    </div>
    
    <footer>
        <p>© 2023 Pembuat Konfigurasi VLESS NTLS | Untuk keperluan edukasi</p>
    </footer>

    <script>
        // Fungsi untuk mengisi otomatis berdasarkan halaman web
        document.getElementById('autoFillBtn').addEventListener('click', function() {
            const currentHost = window.location.hostname;
            document.getElementById('host').value = currentHost;
            document.getElementById('address').value = currentHost;
            document.getElementById('path').value = "/";
            
            // Jika remark kosong, isi dengan nama domain
            if (!document.getElementById('remark').value) {
                document.getElementById('remark').value = currentHost;
            }
        });
        
        // Fungsi untuk menghasilkan konfigurasi
        document.getElementById('generateBtn').addEventListener('click', function() {
            // Ambil nilai dari form
            const uuid = document.getElementById('uuid').value;
            const address = document.getElementById('address').value;
            const port = document.getElementById('port').value;
            const security = document.getElementById('security').value;
            const encryption = document.getElementById('encryption').value;
            const type = document.getElementById('type').value;
            const host = document.getElementById('host').value;
            const path = document.getElementById('path').value;
            let remark = document.getElementById('remark').value;
            
            // Jika remark kosong, gunakan host
            if (!remark) {
                remark = host;
            }
            
            // Encode remark untuk URL
            const encodedRemark = encodeURIComponent(remark);
            
            // Buat string konfigurasi
            const config = \`vless://\${uuid}@\${address}:\${port}/?security=\${security}&encryption=\${encryption}&type=\${type}&host=\${host}&path=\${path}#\${encodedRemark}\`;
            
            // Tampilkan hasil
            document.getElementById('configResult').textContent = config;
        });
        
        // Fungsi untuk menyalin ke clipboard
        document.getElementById('copyBtn').addEventListener('click', function() {
            const configText = document.getElementById('configResult').textContent;
            
            // Salin teks ke clipboard
            navigator.clipboard.writeText(configText).then(function() {
                // Ubah teks tombol sementara
                const originalText = this.textContent;
                this.textContent = 'Tersalin!';
                
                // Kembalikan teks asli setelah 2 detik
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }.bind(this));
        });
        
        // Isi otomatis saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('autoFillBtn').click();
        });
    </script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Jika path adalah /config, kita bisa menambahkan logika untuk menghasilkan config
    if (url.pathname === '/config') {
      const { searchParams } = url;
      
      // Ambil parameter dari URL
      const uuid = searchParams.get('uuid') || '2bcfbfba-b446-4ad5-93ad-72af9e008f61';
      const address = searchParams.get('address') || url.hostname;
      const port = searchParams.get('port') || '443';
      const security = searchParams.get('security') || 'tls';
      const encryption = searchParams.get('encryption') || 'none';
      const type = searchParams.get('type') || 'ws';
      const host = searchParams.get('host') || url.hostname;
      const path = searchParams.get('path') || '/';
      let remark = searchParams.get('remark') || url.hostname;
      
      // Encode remark untuk URL
      const encodedRemark = encodeURIComponent(remark);
      
      // Buat string konfigurasi
      const config = `vless://${uuid}@${address}:${port}/?security=${security}&encryption=${encryption}&type=${type}&host=${host}&path=${path}#${encodedRemark}`;
      
      return new Response(config, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      });
    }
    
    // Untuk semua request lainnya, tampilkan halaman HTML
    return new Response(HTML_CONTENT, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  },
};
