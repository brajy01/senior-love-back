import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js"
import {
	getAllReceivedMessages,
	getSentMessagesToSomeone,
	getReceivedMessagesFromSomeone,
	createOneMessage
} from "../controllers/messageController.js"

export const router = Router();

// Get all messages of someone
router.get("/:userId", CW(getAllReceivedMessages))

// get all messages sent to someone
router.get("/:userId/sent/:targetId", CW(getSentMessagesToSomeone))

// Get all messages received by someone
router.get("/:userId/received/:senderId", CW(getReceivedMessagesFromSomeone))

// Create a message
router.post("/:userId/:targetProfileId", CW(createOneMessage))


