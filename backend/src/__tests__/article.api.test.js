/**
 * start a express
 */
const express = require('express');
const request = require('supertest');
const serverRoutes = require('../../routes');

require('../../models');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(serverRoutes);

describe('testing-article-api', () => {
  it('Route /article exists', async () => {
    const res = await request(app).get('/api/article');
    expect(res.status).toBe(200);
  });

  it('GET /article- success', async () => {
    const { body } = await request(app).get('/api/article');
    expect(body.length).toBe(12);
  });
});
