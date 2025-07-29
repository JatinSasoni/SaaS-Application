import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  generateArticle,
  generateBlogTitle,
  generateImage,
  removeImageBackground,
  removeImageObject,
  resumeReview,
} from "../Controller/AI-Controller.js";
import { upload } from "../config/multer.js";
const AIrouter = Router();

AIrouter.post("/generate-article", auth, generateArticle);
AIrouter.post("/generate-blog-title", auth, generateBlogTitle);
AIrouter.post("/generate-image", auth, generateImage);
AIrouter.post(
  "/remove-image-background",
  upload.single("image"),
  auth,
  removeImageBackground
);
AIrouter.post(
  "/remove-image-object",
  upload.single("image"),
  auth,
  removeImageObject
);
AIrouter.post("/resume-review", upload.single("resume"), auth, resumeReview);

export default AIrouter;
