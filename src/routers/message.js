import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js"
import {
	getAllMessages,
	createOneMessage
} from "../controllers/messageController.js"

export const router = Router();

// get all messages written by someone in particular
router.get("/:authorProfileId", CW(getAllMessages))

// post a message
router.post("/", CW(createOneMessage))
