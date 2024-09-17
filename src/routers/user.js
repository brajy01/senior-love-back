import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js"
import { 
	getAllUsers,
	getOneUser,
	createOneUser,
	createOneUserProfile,
	deleteOneUser,
	modifyOneUser,
} from "../controllers/userController.js";

export const router = Router ();

router.get("/", CW(getAllUsers))
router.get("/:userId", CW(getOneUser))
router.post('/', CW(createOneUser))
router.post("/:userId/profile", CW(createOneUserProfile))
router.delete("/:userId", CW(deleteOneUser))
router.patch("/:userId", CW(modifyOneUser))
router.delete('/:userId', CW(deleteOneUser))

