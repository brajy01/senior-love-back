import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js"
import { getAllInterests } from "../controllers/interestController.js"

export const router = Router();

// get all interests 
router.get("/", CW(getAllInterests))

