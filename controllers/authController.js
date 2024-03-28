import { comparePass, hashedpass } from "../helpers/authHelper.js";
import { requireSingIn } from "../middlewares/authMiddleware.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

// Authetication Controller for Register New User
export const registerController = async (req, res) => {
  try {
    const { addUser } = req.body;
    const { fName, lName, email, phone, password, address } = addUser;
    let name;
    fName && lName ? (name = fName + " " + lName) : (name = undefined);
    if (!name) return res.status(401).send({ message: "Name is required" });
    if (!email) return res.status(401).send({ message: "Email is Required" });
    if (!phone) return res.status(401).send({ message: "Phone is required" });
    if (!password)
      return res.status(401).send({ message: "Password is required" });
    if (!address)
      return res.status(401).send({ message: "Address is required" });

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

//// Authetication Controller for Admin Login
export const testController = async (req, res) => {
  console.log("test controller called");
  res.status(200).send({
    success: true,
    message: "Admin Access granted",
    timestamp: new Date().toLocaleString(),
  });
};
