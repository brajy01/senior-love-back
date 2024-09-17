import { Router } from "express";
import { router as profileRouter } from "./profile.js"
import { router as eventRouter } from "./event.js"
import { router as messageRouter } from "./message.js"
import { router as interestRouter } from "./interest.js"
import { router as userRouter } from "./user.js"
import { errorHandler } from "../middlewares/errorHandler.js"

export const router = Router();

// router management profiles
router.use("/profiles", profileRouter);

// router management events
router.use("/events", eventRouter);

//router managements messages
router.use("/messages", messageRouter);

//router managements interests
router.use("/interests", interestRouter)

//router managements users
router.use("/users", userRouter)

//middleware de capture d'erreur
router.use(errorHandler);


