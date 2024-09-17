import { Profile, Message, User } from '../models/index.js';
import { HTTPError } from '../errors/httpErrors.js';

// Get all profiles
export const getAllProfiles = async (_, res) => {
    const profiles = await Profile.findAll({
        include: [
            {
            association: "interests",
            through: { attributes: [] },
            },
            {
                model: User, // Includes the User model
                as: "userProfile", // Uses the alias defined in the belongsTo association
            },
            {
                model: Message,
                as: 'sentMessages', // Assure-toi que l'alias correspond à l'association définie
                attributes: ['senderProfileId', 'content', 'status', 'targetProfileId'], // Spécifie les attributs du message à inclure
              },
              {
                model: Message,
                as: 'receivedMessages', // Assure-toi que l'alias correspond à l'association définie
                attributes: ['senderProfileId', 'content', 'status', 'targetProfileId'], // Spécifie les attributs du message à inclure
              },
        ]
        },
    );
    return res.json(profiles);
};

// Get one profile
export const getOneProfile = async (req, res) => {
    const profile = await Profile.findByPk(req.params.profileId, {
        include: [
        {
            association: "interests",
            through: { attributes: [] },
        },
        {
            model: User, // Includes the User model
            as: "userProfile", // Uses the alias defined in the belongsTo association
        },
    ]
    });

    if (!profile){
        throw new HTTPError(404, "Profile not found. Please check the provided ID.");
    }
    
    return res.json(profile);
}; 

// Update a profile
export const modifyOneProfile = async (req, res) => {
    const profile = await Profile.findByPk(req.params.profileId, {
        include: {
            association: "interests",
            through: { attributes: [] },
        },
    });
    
    if (!profile){
        throw new HTTPError(404, "Profile not found. Please check the provided ID.");
    }

    await profile.update(req.body);
    return res.json(profile);
};

// Delete a profile
export const deleteOneProfile = async (req, res) => {
    const profile = await Profile.findByPk(req.params.profileId);
    
    if (!profile){
        throw new HTTPError(404, "Profile not found. Please check the provided ID.");
    }

    await profile.destroy();
    return res.status(204).end();
};