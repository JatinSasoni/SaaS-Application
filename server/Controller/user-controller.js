import mongoose from "mongoose";
import { Creation_model } from "../Models/Creation-Model.js";

export const getUserCreations = async (req, res) => {
  try {
    const { userId } = req.auth();
    const creations = await Creation_model.find({
      user_id: userId,
    }).sort("createdAt");
    return res.status(200).json({
      success: true,
      creations,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPublicCreations = async (req, res) => {
  try {
    const publishedCreations = await Creation_model.find({
      publish: true,
    }).sort("createdAt");
    return res.status(200).json({
      success: true,
      publishedCreations,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleLikeCreation = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { id } = req.body;
    if (!id || !mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Something doesn't seems right",
      });
    }
    const creation = await Creation_model.findById(id);

    if (!creation) {
      return res.status(400).json({
        success: false,
        message: "Creation not found",
      });
    }
    const currentLike = creation.likes;
    const userIdStr = userId.toString();
    let updatedLikes;
    let message;
    if (currentLike.includes(userIdStr)) {
      updatedLikes = currentLike.filter((user) => user !== userIdStr);
      message = "Creation unliked";
    } else {
      updatedLikes = [...currentLike, userIdStr];
      message = "Creation liked";
    }

    creation.likes = updatedLikes;
    await creation.save();

    return res.status(200).json({
      success: true,
      message,
      likesCount: creation.likes.length,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
