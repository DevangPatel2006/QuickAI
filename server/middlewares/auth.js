import { clerkClient } from "@clerk/express";
import React from "react";

const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();
    const hasPremiumPlan = await has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);
    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: { free_usage: 0 },
      });
      req.free_usage=0;
    }
    req.plan=hasPremiumPlan? "premium" : "free";
    next()
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default auth;
