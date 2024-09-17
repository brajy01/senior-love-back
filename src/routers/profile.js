import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js";
import { 
	getAllProfiles,
	getOneProfile,
	deleteOneProfile,
	modifyOneProfile,
} from "../controllers/profileController.js";

export const router = Router();

// Get all profiles
router.get("/", CW(getAllProfiles))

// Get one specific profile
router.get("/:profileId", CW(getOneProfile))

// Delete a profile
router.delete("/:profileId", CW(deleteOneProfile))

// Update a profile
router.patch("/:profileId", CW(modifyOneProfile))


