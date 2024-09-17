const jwt = require('jsonwebtoken');
const jwtSecret = 'YourSecretKey';


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

test('should validate a JWT token', () => {
    const payload = { userId: 1, userName: 'testUser', userMail: 'test@example.com' };
    const token = jwt.sign(payload, jwtSecret, { algorithm: 'HS256', expiresIn: '1h' });
   
    // Check the token
    const decoded = jwt.verify(token, jwtSecret);
    expect(decoded.userId).toBe(payload.userId);
    expect(decoded.userName).toBe(payload.userName);
    expect(decoded.userMail).toBe(payload.userMail);
});

const request = require('supertest');
const app = require('./app'); // Check the path is the right one


test('should login and return a JWT token', async () => {
 const response = await request(app)
   .post('/login')
   .send({ email: 'test@example.com', password: 'password' });
  expect(response.statusCode).toBe(200);
 expect(response.body.token).toBeDefined();
  const token = response.body.token;
  // Test authenticated route
 const authResponse = await request(app)
   .get('/favorites')
   .set('Authorization', `Bearer ${token}`);
  expect(authResponse.statusCode).toBe(200);
});

