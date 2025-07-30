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
import { performValidationCheck } from "../middleware/performValidationCheck.js";
import {
  validateBlogTitleRouteBody,
  validateGenerateArticleBody,
  validateGenerateImageRouteBody,
  validateRemoveImageObjectRouteBody,
} from "../validation/AIControllerValidation.js";

const AIrouter = Router();

AIrouter.post(
  "/generate-article",
  validateGenerateArticleBody,
  performValidationCheck,
  auth,
  generateArticle
);

AIrouter.post(
  "/generate-blog-title",
  validateBlogTitleRouteBody,
  performValidationCheck,
  auth,
  generateBlogTitle
);
AIrouter.post(
  "/generate-image",
  validateGenerateImageRouteBody,
  performValidationCheck,
  auth,
  generateImage
);
AIrouter.post(
  "/remove-image-background",
  upload.single("image"),
  auth,
  removeImageBackground
);
AIrouter.post(
  "/remove-image-object",
  upload.single("image"),
  validateRemoveImageObjectRouteBody,
  performValidationCheck,
  auth,
  removeImageObject
);
AIrouter.post("/resume-review", upload.single("resume"), auth, resumeReview);

export default AIrouter;
