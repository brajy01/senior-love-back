import bcryptjs from "bcryptjs";
const saltRounds = 10; // Facteur de travail

export const hashPassword = async (plainPassword) => {
  try {
    const salt = await bcryptjs.genSalt(saltRounds);
    const passwordHached = await bcryptjs.hash(plainPassword, salt);
    console.log("Mot de passe haché :", passwordHached);
    return passwordHached;
  } catch (error) {
    console.error("Erreur lors du hachage du mot de passe :", error);
    throw error;
  }
};
