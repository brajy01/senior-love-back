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


router.get("/", CW(getAllEvents))
router.get("/:eventId", CW(getOneEvent))
router.post("/", CW(createOneEvent))
router.delete("/:eventId", CW(deleteOneEvent))
router.patch("/:eventId", CW(modifyOneEvent))