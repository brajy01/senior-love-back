import { Message } from "../models/index.js";
import { Profile } from "../models/index.js";
import { HTTPError } from "../errors/httpErrors.js";

export const createOneMessage = async (req, res) =>{
  const card = await Message.create(req.body);
  return res.status(201).json(card);
};

export const getAllMessages = async (req, res) => {
  const id = req.params.authorProfileId
  const profile = await Profile.findByPk(id, {
    include: [
      {
        model: Message,
        as: 'sentMessages',
        attributes: ['id', 'content', 'status'],
      },
    ]
  });
  if (!profile){
    throw new HTTPError(404, "Profile not found. Please check the provided ID.");
  }

  const messages = profile.sentMessages

  
  return res.json(messages);
};