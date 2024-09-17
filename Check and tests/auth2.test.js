// import jwt from 'jsonwebtoken';
// import supertest from 'supernpmtest';
// import { app } from '../serverjwt.js';

const jwt = require('jsonwebtoken');
const supertest = require('supertest');
const { app } = require('../serverjwt.js');

const jwtSecret = 'OurAmazingIncredibleSecret!wML05zW??DIWk3smOhcj2?5F$ott6od#V$FX&B5Ajyr!J5mCPZ6u7f!acR5dqP';

test('should generate a valid JWT token', () => {
  const payload = { userId: 1, userName: 'testUser', userMail: 'test@example.com' };
  const token = jwt.sign(payload, jwtSecret, { algorithm: 'HS256', expiresIn: '1h' });
  expect(token).toBeDefined();

  // Optionally check the token
  const decoded = jwt.verify(token, jwtSecret);
  expect(decoded.userId).toBe(payload.userId);
  expect(decoded.userName).toBe(payload.userName);
  expect(decoded.userMail).toBe(payload.userMail);
});

test('should login and return a JWT token', async () => {
  const response = await supertest(app)
    .post('/login')
    .send({ email: 'test@gmail.com', password: 'password', role: 'user' });

  expect(response.statusCode).toBe(200);
  expect(response.body.token).toBeDefined();

  const token = response.body.token;

  // Test authenticated route (ex: /profiles/:idOrSlug)
  const authResponse = await supertest(app)
    .get('/profiles/some-id-or-slug')
    .set('Authorization', `Bearer ${token}`);
  
  expect(authResponse.statusCode).toBe(200);
});
