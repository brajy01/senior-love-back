import express from "express";
import bodyParser from "body-parser";
import jwt from "express-jwt";
import jsonwebtoken from "jsonwebtoken";
import { User } from "./src/models";


const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = 'OurAmazingIncredibleSecret!wML05zW??DIWk3smOhcj2?5F$ott6od#V$FX&B5Ajyr!J5mCPZ6u7f!acR5dqP';

// parse request body
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // response to preflight request
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

// Prepare authorization middleware
const authorizationMiddleware = jwt({ secret: jwtSecret, algorithms: ['HS256'] });

// Fake users' list for the test
const user = [
    { id: 1, email: 'test@gmail.com', password: 'password', role: 'user', name: 'Test User' }
];
  
// Fake profiles' list
const profiles = [
    { id: 1, slug: 'some-id-or-slug', name: 'Test Profile' }
]; 


/* Routes */
// Server homepage
app.get('/', (req, res) => {
    console.log('>> GET /');
    res.send('Bienvenue sur cette application');
});

// Getting the profiles list
app.get('/profiles', (req, res) => {
    console.log('>> GET /profiles');
    res.json(profiles);
});


// Login 
app.post('/login', (req, res) => {
    console.log('>> POST /login', req.body);
    const { email, password, role } = req.body;
    
    const user = User.find(user => user.email === email && user.password === password && user.role === role);

    if (user) {
            // payload part
            const jwtContent = { userId: user.id, userName: user.name, userMail: user.email };

            // header part
            const jwtOptions = {
                algorithm: 'HS256',
                expiresIn: '1h'
            };
            console.log('<< 200', user.name);
            
            // body part
            res.json({
                logged: true,
                userName: user.name,
                userMail: user.email,
                userId: user.id,
                token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
            });
        }
        else {
            console.log('<< 401 UNAUTHORIZED');
            res.sendStatus(401);
        }
});

// Getting one profile
app.get('/profiles/idOrSlug', (req, res) => {
    console.log(`>> GET /profiles/${req.params.idOrSlug}`);
    const profile = profiles.find(profile => 
        profile.id === parseInt(req.params.idOrSlug) 
        || 
        profile.slug === req.params.idOrSlug);
    if(!profile) return res.status(404).send('The profile with the given ID or Slug is not found');
    res.json(profile);
});

// Error middleware
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        console.log('<< 401 UNAUTHORIZED - Invalud Token');
        res.status(401).send('Invalid token');
    }
});

/* Server */
    app.listen(port, () => {
      console.log(`listening on *:${port}`);
    });

