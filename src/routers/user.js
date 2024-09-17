import { Router } from "express";
import { controllerWrapper as CW } from "../utils/controllerWrapper.js"
import { 
	getAllUsers,
	getOneUser,
	createOneUser,
	createOneUserProfile,
	deleteOneUser,
	modifyOneUser,
	loginUser
} from "../controllers/userController.js";

export const router = Router ();

// Get all users
router.get("/", CW(getAllUsers))

// Get one specific user
router.get("/:userId", CW(getOneUser))

// Create a user
//router.post('/register', CW(createOneUser))

// Create a profile from user
router.post("/:userId/profile", CW(createOneUserProfile))

// Connect
router.post("/login", CW(loginUser))

// Delete a user
router.delete("/:userId", CW(deleteOneUser))

// Update a user
router.patch("/:userId", CW(modifyOneUser))



