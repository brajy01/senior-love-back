import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js";
import {
	getAllEvents,
	getOneEvent,
	createOneEvent,
	deleteOneEvent,
	modifyOneEvent
} from "../controllers/eventController.js"



export const router = Router();

// Get all events
router.get("/", CW(getAllEvents))

// Get one specific event
router.get("/:eventId", CW(getOneEvent))

// Create an event
router.post("/", CW(createOneEvent))

// Delete an event
router.delete("/:eventId", CW(deleteOneEvent))

// Update an event
router.patch("/:eventId", CW(modifyOneEvent))