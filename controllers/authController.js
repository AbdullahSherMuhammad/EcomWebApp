import { comparePass, hashedpass } from "../helpers/authHelper.js";
import { requireSingIn } from "../middlewares/authMiddleware.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

// Authetication Controller for Register New User
export const registerController = async (req, res) => {
  try {
    // const { addUser } = req.body;
    const {
      fName,
      lName,
      email,
      phone,
      password,
      address,
      securityQuestion,
      answer,
    } = req.body.addUser;
    let name;
    fName && lName
      ? (name = fName.trim().toUpperCase() + " " + lName.trim().toUpperCase())
      : (name = undefined);
    if (!name) return res.status(401).send({ message: "Name is required" });
    if (!email) return res.status(401).send({ message: "Email is Required" });
    if (!phone) return res.status(401).send({ message: "Phone is required" });
    if (!password)
      return res.status(401).send({ message: "Password is required" });
    if (!address)
      return res.status(401).send({ message: "Address is required" });
    if (!securityQuestion)
      return res.status(401).send({ message: "No Security Question Selected" });
    if (!answer) return res.status(401).send({ message: "Answer is required" });

    //console.log(userModel.findOne({ email }));

    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res
        .status(200)
        .send({ success: false, message: "Already Registered Please Login" });

    const hashedpassword = await hashedpass(password);
    const user = new userModel({
      name,
      email,
      password: hashedpassword,
      phone,
      address,
      securityQuestion,
      answer: answer.trim().toUpperCase(),
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

// Authetication Controller for Login User
export const loginController = async (req, res) => {
  const { loginUser } = req.body;
  const { email, password } = loginUser;
  // const { loginEmail, loginPass } = req.body;

  try {
    const isUser = await userModel.findOne({ email });
    if (!isUser) {
      return res.status(404).send({
        success: false,
        message: "User Not Registered!",
      });
    }

    if (!email || !password)
      return res.send({
        success: false,
        message: "Wrong Email or Password",
      });

    const userAuthenticated = await comparePass(password, isUser.password);
    if (!userAuthenticated)
      res.status(401).send({ success: false, message: "Wrong Password !" });

    //JWT Token for Signed in user
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

// Forgot Password Controller to check security question
export const checkSecurityQuestions = async (req, res) => {
  const { recoverUserPass } = req.body;
  const { email, securityQuestion, answer } = recoverUserPass;
  if (!email)
    return res
      .status(404)
      .send({ success: false, message: "Email is required!" });
  if (!securityQuestion)
    return res
      .status(404)
      .send({ success: false, message: "Select a Security Question!" });
  if (!answer)
    return res
      .status(404)
      .send({ success: false, message: "Answer is required!" });
  const userFound = await userModel.findOne({
    email,
    securityQuestion,
    answer: answer.trim().toUpperCase(),
  });
  if (userFound)
    return res.status(200).send({ success: true, message: "user found" });
  else
    res.status(400).send({ success: false, message: "Details doesn't match" });
};

export const setNewPassword = async (req, res, next) => {
  if (
    (req.body.recoverUserPass.password && req.body.recoverUserPass.email) !==
    ("" || undefined)
  ) {
    const { password, email } = req.body.recoverUserPass;
    const hashpass = await hashedpass(password);
    const userFound = await userModel.findOne({
      email,
    });
    userFound.password = hashpass;
    return res
      .status(200)
      .send({ success: true, message: "Password Updated Successfully!" });
  }
  return next();
};

//// Authetication Controller for Admin Login
export const testController = async (req, res) => {
  console.log("test controller called");
  res.status(200).send({
    success: true,
    message: "Admin Access granted",
    timestamp: new Date().toLocaleString(),
  });
};
