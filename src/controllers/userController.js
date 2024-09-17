import { User } from "../models/index.js";
import { Profile } from "../models/index.js";
import { HTTPError } from "../errors/httpErrors.js";

// get all Users
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

// get one User
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

// create a User
export const createOneUser = async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json(user);
};

// create a userProfile
export const createOneUserProfile = async (req, res) => {
    const userId = req.params.userId;
    const profile = await Profile.create(
        {
        ...req.body,
        user_id: userId
    });
    if(!userId){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    return res.status(201).json(profile);
};

// update a User
export const modifyOneUser = async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if(!user){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    await user.update(req.body);
    return res.json(user);
};

export const deleteOneUser = async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if(!user){
        throw new HTTPError(404, "User not found. Please check the provided ID.");
    }
    await user.destroy();
    return res.status(204).end();
};

