import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  getPublicCreations,
  getUserCreations,
  toggleLikeCreation,
} from "../Controller/user-controller.js";
const userRouter = Router();
userRouter.get("/get-user-creations", auth, getUserCreations);
userRouter.get("/get-published-creation", auth, getPublicCreations);
userRouter.post("/toggle-like-creation", auth, toggleLikeCreation);

export default userRouter;
