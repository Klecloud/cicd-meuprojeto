const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
  test('GET /health retorna status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/hello retorna mensagem', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });

  test('GET /api/info retorna informações da app', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.app).toBe('cicd-portfolio');
  });
});