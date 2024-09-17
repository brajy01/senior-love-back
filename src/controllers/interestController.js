import { Interest } from "../models/index.js";

// Get all interests
export const getAllInterests = async (_, res) => {
  const interests = await Interest.findAll();

  if (!interests){
    throw new HTTPError(404, "Interests not found. Please check the provided IDs.");
  }

  return res.json(interests);
}; 