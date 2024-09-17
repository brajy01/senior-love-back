
import { User } from "../models/index.js";
import { Profile } from "../models/index.js";
import { HTTPError } from "../errors/httpErrors.js";

// Get all users
export const getAllUsers = async (_, res) => {
    const users = await User.findAll({
        include: {
            model: Profile, // Includes the Profile model
            as: 'userProfile' //Uses the alias defined in the hasOne association
        },
    });
    if(!users){
        throw new HTTPError(404, "Users not found.");
    }
    return res.json(users);
};

// Get one user
export const getOneUser = async (req, res) => {
    const user = await User.findByPk(req.params.userId, {
        include: {
            model: Profile, // Includes the Profile model
            as: 'userProfile' //Uses the alias defined in the hasOne association
        },
    });
    if(!user){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    return res.json(user);
};

// Create a user
export const createOneUser = async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json(user);
};

// Create a userProfile
export const createOneUserProfile = async (req, res) => {
    const profile = await Profile.create(
        {
        ...req.body,
        user_id: req.params.userId
    });
    if(!user_id){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    return res.status(201).json(profile);
};

// Update a user
export const modifyOneUser = async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if(!user){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    await user.update(req.body);
    return res.json(user);
};

// Delete a user
export const deleteOneUser = async (req, res) => {
    const user = await User.findByPk(req.params.userId);

    if(!user){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    await user.destroy();
    return res.status(204).end();
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log('Email reçu :', email);
    console.log('Password reçu :', password);

    try {
      // Trouver l'utilisateur par email
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      console.log('Utilisateur trouvé :', user.email);
  
      // Comparer le mot de passe fourni avec celui en base de données
      //const isPasswordValid = await bcrypt.compare(password, user.password);
  
      //if (!isPasswordValid) {
      //  return res.status(401).json({ error: 'Mot de passe incorrect' });
      //}
  
      // Générer le token JWT
      //const token = jwt.sign({ id: user.id, email: user.email }, 'secret_key', { expiresIn: '1h' });
      const token = 'fake_jwt_token';
      return res.status(200).json({ token });
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  };

