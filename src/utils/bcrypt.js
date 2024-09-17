import bcrypt from 'bcrypt';
const saltRounds = 10; // Facteur de travail

export const hashPassword = async (plainPassword) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHached = await bcrypt.hash(plainPassword, salt);
    console.log('Mot de passe haché :', passwordHached);
    return passwordHached;
  } catch (error) {
    console.error('Erreur lors du hachage du mot de passe :', error);
    throw error;
  }
};
