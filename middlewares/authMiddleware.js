import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token based
export const requireSingIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_Secret
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const isUserAdmin = await userModel.findById(req.user._id);
    if (isUserAdmin.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access: Access Not granted!",
      });
    } else return next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in Admin Middleware",
      error,
    });
  }
};
