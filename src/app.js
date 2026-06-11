const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from CI/CD pipeline!', version: process.env.APP_VERSION || '1.0.0' });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'cicd-portfolio',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

module.exports = app;