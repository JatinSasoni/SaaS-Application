import { clerkClient } from "@clerk/express";

const auth = async (req, res, next) => {
  try {
    const { userId, has } = req.auth(); //auth object by clerk
    const hasPremiumPlan = await has({ plan: "premium" });
    const user = await clerkClient.users.getUser(userId);

    //Free plan with some free usage
    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }
    req.plan = hasPremiumPlan ? "premium" : "free";
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default auth;
