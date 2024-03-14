import { comparePass, hashedpass } from "../helpers/authHelper.js";
import { requireSingIn } from "../middlewares/authMiddleware.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) return res.send({ error: "Name is required" });
    if (!email) return res.send({ error: "Email is required" });
    if (!password) return res.send({ error: "Password is required" });
    if (!phone) return res.send({ error: "Phone is required" });
    if (!address) return res.send({ error: "Address is required" });

    //console.log(userModel.findOne({ email }));

    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res
        .status(200)
        .send({ success: true, message: "Already Registered Please Login" });

    const hashedpassword = await hashedpass(password);
    const user = new userModel({
      name,
      email,
      password: hashedpassword,
      phone,
      address,
    }).save();
    res
      .status(201)
      .send({ success: true, message: "User Created successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  const { loginEmail, loginPass } = req.body;

  try {
    const isUser = await userModel.findOne({ email: loginEmail });
    if (!isUser) {
      return res.status(404).send({
        success: false,
        message: "User Not Registered!",
      });
    }

    if (!loginEmail || !loginPass)
      return res.send({
        success: false,
        message: "Wrong Email or Password",
      });

    const userAuthenticated = await comparePass(loginPass, isUser.password);
    if (!userAuthenticated)
      res.status(401).send({ success: false, message: "UnAuthorized" });

    //token
    const token = await JWT.sign({ _id: isUser._id }, process.env.JWT_Secret, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Sucessfull",
      user: {
        name: isUser.name,
        email: isUser.email,
        phone: isUser.phone,
        address: isUser.address,
      },
      timestamp: new Date().toLocaleString(),
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const testController = async (req, res) => {
  console.log("test controller called");
  res.status(200).send({
    success: true,
    message: "Admin Access granted",
    timestamp: new Date().toLocaleString(),
  });
};
