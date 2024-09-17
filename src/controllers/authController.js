import { User } from "../models/index.js";
import { HTTPError } from "../errors/httpErrors.js";
import bcryptjs from "bcryptjs";
import jwt from "express-jwt";
import jsonwebtoken from "jsonwebtoken";
import emailValidator from "email-validator";

const jwtSecret =
  "OurAmazingIncredibleSecret!wML05zW??DIWk3smOhcj2?5F$ott6od#V$FX&B5Ajyr!J5mCPZ6u7f!acR5dqP"; // Définir le secret en haut de ton fichier ou dans un fichier séparé
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email reçu :", email);
  console.log("Password reçu :", password);

  // Find the user with his email
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }
  console.log("Utilisateur trouvé :", user.email);

  //Compare his password with the one in the database
  /*const isPasswordValid = await bcryptjs.compare(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).json({ error: 'Mot de passe incorrect' });
	}*/

  // JWT generation

  // jwt secret key, just for the example
  const jwtSecret =
    "OurAmazingIncredibleSecret!wML05zW??DIWk3smOhcj2?5F$ott6od#V$FX&B5Ajyr!J5mCPZ6u7f!acR5dqP";
  // jwt HEADER
  const jwtOptions = { algorithm: "HS256", expiresIn: "3h" };
  // jwt PAYLOAD
  const jwtContent = { userId: user.id, userEmail: user.email };
  //jwt TOKEN
  const token = jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions);
  // jwt BODY (what we send to the front)
  return res.json({
    userId: user.id,
    userEmail: user.email,
    token: token,
  });
};

// Register a new user
export const register = async (req, res) => {
  const { email, password, role = "user" } = req.body;

  const hashedPassword = await bcryptjs.hash(password, 10);
  const clearEmail = email.trim().toLowerCase();
  const userData = {
    email: email,
    password: hashedPassword,
    role: role,
  };

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new HTTPError(409, "Utilisateur déjà existant.");
  } else if (!emailValidator.validate(clearEmail)) {
    throw new HTTPError(404, "Email non valide.");
  }
  //if(password !== confirmation){
  //return res.status(400).json('register',{error: {message:'Le mot de passe et sa confirmation ne sont pas similaires'}});
  //}
  const user = await User.create(userData);
  //console.log(user)
  return res.status(201).json(user);
};

export const tokenValidator = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Récupérez le token de l'en-tête Authorization

  if (!token) {
    return res.status(401).json({ valid: false });
  }

  try {
    const decodedToken = jsonwebtoken.verify(token, jwtSecret); // Vérifie le token avec jsonwebtoken
    console.log(decodedToken);
    res.json({ valid: true, user: decodedToken });
  } catch (error) {
    res.status(401).json({ valid: false });
  }
};
