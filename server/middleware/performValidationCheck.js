import { validationResult } from "express-validator";
export const performValidationCheck = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Something is missing",
      validationErrors: result.array(),
    });
  }
  next();
};
