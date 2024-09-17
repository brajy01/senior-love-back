import { Message } from "../models/index.js";
import { Profile } from "../models/index.js";
import { HTTPError } from "../errors/httpErrors.js";

// Create one message
export const createOneMessage = async (req, res) =>{
  const message = await Message.create(req.body);
  return res.status(201).json(message);
};

// Get all messages
export const getAllReceivedMessages = async (req, res) => {
  const userId = req.params.userId

  const receivedMessages = await Message.findAll({
    where: { targetProfileId: userId },
    attributes: ['id', 'senderProfileId', 'content', 'status', 'targetProfileId', 'createdAt'],
    order: [['createdAt', 'DESC']],
  });

    if (!receivedMessages || receivedMessages.length === 0)  {
      throw new HTTPError(404, "Messages not found.");
    }

  return res.json(receivedMessages);  
};


export const getReceivedMessagesFromSomeone = async (req, res) => {
  const { userId, senderId } = req.params;
  const receivedMessages = await Message.findAll({
    where: {
      targetProfileId: userId, // Messages reçus par cet utilisateur
      senderProfileId: senderId // Messages envoyés par cet expéditeur
    },
    attributes: ['id', 'senderProfileId', 'content', 'status', 'targetProfileId', 'createdAt'],
    order: [['createdAt', 'DESC']],
    });

    if (!receivedMessages || receivedMessages.length === 0)  {
      throw new HTTPError(404, "Messages not found. Please check the provided ID.");
    }  
    return res.json(receivedMessages);  
};

export const getSentMessagesToSomeone = async (req, res) => {
  const { userId, targetId } = req.params;
  const receivedMessages = await Message.findAll({
    where: {
      targetProfileId: targetId, // Messages reçus par cet utilisateur
      senderProfileId: userId // Messages envoyés par cet expéditeur
    },
    attributes: ['id', 'senderProfileId', 'content', 'status', 'targetProfileId', 'createdAt'],
    order: [['createdAt', 'DESC']],
    });

    if (!receivedMessages || receivedMessages.length === 0)  {
      throw new HTTPError(404, "Messages not found. Please check the provided ID.");
    }  
    return res.json(receivedMessages);  
};


/*
ANCIENS CONTROLLERS 
export const getReceivedMessages = async (req, res) => {
  const profile = await Profile.findByPk(req.params.userId, {
      include: [
        {
          model: Message,
          as: 'receivedMessages',
          attributes: ['id', 'authorProfileId', 'content', 'status', 'targetProfileId', 'createdAt'], 
        },
      ],
    });

    if (!profile) {
      throw new HTTPError(404, "Profile not found. Please check the provided ID.");
    }

    const receivedMessages = profile.receivedMessages || []; 
  
    if (!receivedMessages) {
      throw new HTTPError(404, "Messages not found. Please check the provided ID.");
    }
    //return res.json(profile);  
    return res.json(receivedMessages);  
};

export const getSentMessages = async (req, res) => {
  const profile = await Profile.findByPk(req.params.authorProfileId, {
      include: [
        {
          model: Message,
          as: 'sentMessages', // Assure-toi que l'alias correspond à l'association définie
          attributes: ['authorProfileId', 'content', 'status', 'targetProfileId'], // Spécifie les attributs du message à inclure
        },
      ],
    });

    if (!profile) {
      throw new HTTPError(404, "Profile not found. Please check the provided ID.");
    }

    const sentMessages = profile.sentMessages || []; // Messages envoyés
  
    if (!sentMessages) {
      throw new HTTPError(404, "Messages not found. Please check the provided ID.");
    }
    //return res.json(profile);  
    return res.json(sentMessages);  
};





*/