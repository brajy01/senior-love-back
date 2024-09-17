const express = require('express');
const app = express();
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

// Définir vos routes ici
app.post('/login', (req, res) => {
  // Simuler une réponse de connexion avec un JWT
  res.json({ token: 'fake-jwt-token' });
});

app.get('/favorites', (req, res) => {
  // Simuler une réponse protégée
  const authHeader = req.headers.authorization;
  if (authHeader === 'Bearer fake-jwt-token') {
    res.status(200).json({ favorites: ['item1', 'item2'] });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = app; // Exporter l'application
