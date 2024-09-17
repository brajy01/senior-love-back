import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js";
import { 
	getAllProfiles,
	getOneProfile,
	deleteOneProfile,
	modifyOneProfile,
} from "../controllers/profileController.js";

export const router = Router();

router.get("/", CW(getAllProfiles))
router.get("/:profileId", CW(getOneProfile))
router.delete("/:profileId", CW(deleteOneProfile))
router.patch("/:profileId", CW(modifyOneProfile))


