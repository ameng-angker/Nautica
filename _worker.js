const htmlContent = `<!DOCTYPE html>
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
        
        .example {
            background: #fff3cd;
            border-left: 5px solid #ffc107;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 0.9rem;
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
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Pembuat Konfigurasi VLESS NTLS</h1>
            <p class="description">Buat konfigurasi VLESS NTLS untuk penggunaan pribadi Anda</p>
        </header>
        
        <form id="vlessForm">
            <div class="form-row">
                <div class="form-group">
                    <label for="uuid">UUID:</label>
                    <input type="text" id="uuid" value="2bcfbfba-b446-4ad5-93ad-72af9e008f61" required>
                </div>
                
                <div class="form-group">
                    <label for="address">Address/Server:</label>
                    <input type="text" id="address" value="Quiz.vidio.com" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="port">Port:</label>
                    <input type="number" id="port" value="80" required>
                </div>
                
                <div class="form-group">
                    <label for="security">Security:</label>
                    <select id="security">
                        <option value="none" selected>none</option>
                        <option value="tls">tls</option>
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
                <input type="text" id="host" value="worker.my.id" required>
            </div>
            
            <div class="form-group">
                <label for="path">Path:</label>
                <input type="text" id="path" value="/free/95.181.151.2:2096" required>
            </div>
            
            <div class="form-group">
                <label for="remark">Remark/Nama Koneksi:</label>
                <input type="text" id="remark" value="nuxt.cloud hosting provider" required>
            </div>
            
            <button type="button" id="generateBtn">Buat Konfigurasi</button>
        </form>
        
        <div class="result-container">
            <div class="result-title">Hasil Konfigurasi VLESS:</div>
            <div id="configResult">Konfigurasi akan muncul di sini setelah Anda mengisi formulir dan mengeklik "Buat Konfigurasi".</div>
            <button type="button" id="copyBtn" class="copy-btn">Salin ke Clipboard</button>
        </div>
        
        <div class="example">
            <strong>Contoh:</strong> vless://2bcfbfba-b446-4ad5-93ad-72af9e008f61@Quiz.vidio.com:80/?security=none&encryption=none&type=ws&host=worker.my.id&path=/free/95.181.151.2:2096#%F0%9F%87%A9%F0%9F%87%AA%20nuxt.cloud%20hosting%20provider
        </div>
    </div>
    
    <footer>
        <p>© 2023 Pembuat Konfigurasi VLESS NTLS | Untuk keperluan edukasi</p>
    </footer>

    <script>
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
            const remark = document.getElementById('remark').value;
            
            // Encode remark untuk URL
            const encodedRemark = encodeURIComponent(remark);
            
            // Buat string konfigurasi
            const config = \`vless://\${uuid}@\${address}:\${port}/?security=\${security}&encryption=\${encryption}&type=\${type}&host=\${host}&path=\${path}#\${encodedRemark}\`;
            
            // Tampilkan hasil
            document.getElementById('configResult').textContent = config;
        });
        
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
    </script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  },
};
