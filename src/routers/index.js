import { Router } from "express";
import { router as profileRouter } from "./profile.js"
import { router as eventRouter } from "./event.js"
import { router as messageRouter } from "./message.js"
import { router as interestRouter } from "./interest.js"
import { router as userRouter } from "./user.js"
import { router as authRouter } from "./auth.js"
import { errorHandler } from "../middlewares/errorHandler.js"

export const router = Router();

// Router profiles handler
router.use("/profiles", profileRouter);

// Router events handler
router.use("/events", eventRouter);

// Router messages handler
router.use("/messages", messageRouter);

// Router interests handler
router.use("/interests", interestRouter)

// Router users handler
router.use("/users", userRouter)

//Router authentication handler
router.use("/auth", authRouter)

//Middleware error handler
router.use(errorHandler);


