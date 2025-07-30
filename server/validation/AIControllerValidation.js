import { body } from "express-validator";

export const validateGenerateArticleBody = [
  body("prompt").notEmpty().withMessage("Prompt is required"),
  body("length").notEmpty().withMessage("Length of article is required"),
];
export const validateBlogTitleRouteBody = [
  body("prompt").notEmpty().withMessage("Prompt is required"),
];
export const validateGenerateImageRouteBody = [
  body("prompt").notEmpty().withMessage("Prompt is required"),
];
export const validateRemoveImageObjectRouteBody = [
  body("object").notEmpty().withMessage("Object to remove is required"),
];
