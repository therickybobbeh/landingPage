const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

// Certificate files for local HTTPS
const certDir = path.join(__dirname, '../certs');
const certFiles = {
  key: path.join(certDir, 'localhost-key.pem'),
  cert: path.join(certDir, 'localhost.pem')
};

// Check if certificates exist, if not, show instructions
if (!fs.existsSync(certFiles.key) || !fs.existsSync(certFiles.cert)) {
  console.log('\x1b[33m%s\x1b[0m', 'Local HTTPS certificates not found!');
  console.log('\x1b[36m%s\x1b[0m', 'Please run the following commands to create self-signed certificates:');
  console.log('\x1b[32m%s\x1b[0m', `
  # Install mkcert if you don't have it:
  # macOS: brew install mkcert
  # Windows: choco install mkcert
  # Linux: apt install mkcert

  # Create directory for certificates
  mkdir -p ${certDir}
  
  # Install local CA
  mkcert -install
  
  # Generate certificates
  mkcert -key-file ${certFiles.key} -cert-file ${certFiles.cert} localhost 127.0.0.1
  `);
  process.exit(1);
}

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Prepare the server
app.prepare().then(() => {
  createServer({
    key: fs.readFileSync(certFiles.key),
    cert: fs.readFileSync(certFiles.cert)
  }, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://${hostname}:${port}`);
  });
});