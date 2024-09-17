import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js";
import {
	login,
	register,
	tokenValidator
} from "../controllers/authController.js"

export const router = Router();

// Login
router.post("/login", CW(login))

// Resgister
router.post("/signin", CW(register))

// Validate token
router.post("/validate", CW(tokenValidator))
