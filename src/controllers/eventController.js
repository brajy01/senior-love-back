import { Event } from '../models/index.js';
import { HTTPError } from '../errors/httpErrors.js';

// Get all events
export const getAllEvents = async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10; // Par défaut 10 événements
    const events = await Event.findAll({
        limit: limit,
        include: {
            association: 'profiles',
            through: {attributes: []}
        },
    });
    
    if (!events){
        throw new HTTPError(404, "Events not found. Please check the provided IDs.");
    }

    return res.json(events);
};

// Get a specific event by ID
export const getOneEvent = async (req, res) => {
    const event = await Event.findByPk(req.params.eventId, {
        include: {
            association: 'profiles', 
            through: { attributes: [] }
        },
    });

    if (!event){
        throw new HTTPError(404, "Event not found. Please check the provided ID.");
    }

    return res.json(event);
};

// Create a new event
export const createOneEvent = async (req, res) => {
        const newEvent = await Event.create(req.body);
        return res.status(201).json(newEvent);
};

// Update an existing event
export const modifyOneEvent = async (req, res) => {
    const event = await Event.findByPk(req.params.eventId, {
        include: {
            association: 'profiles', 
            through: { attributes: [] }
        },
    });

    if (!event){
        throw new HTTPError(404, "Event not found. Please check the provided ID.");
    }

    await event.update(req.body);
    return res.json(event);
};

// Delete an event
export const deleteOneEvent = async (req, res) => {
    const event = await Event.findByPk(req.params.eventId);

    if (!event){
        throw new HTTPError(404, "Event not found. Please check the provided ID.");
    }

    await event.destroy();
    return res.status(204).send();
};