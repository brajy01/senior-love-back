import { Interest } from "../models/index.js";

// return all the interests
export const getAllInterests = async (_, res) => {
  const interests = await Interest.findAll({
    include: {
        association: "profiles",
        through: { attributes: [] },
    },
});

  if (!interests){
    throw new HTTPError(404, "Interest not found. Please check the provided IDs.");
  }

  return res.json(interests);
}; 