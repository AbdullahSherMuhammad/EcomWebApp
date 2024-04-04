import express from "express";
import { requireSingIn, isAdmin } from "../middlewares/authMiddleware.js";

import {
  registerController,
  loginController,
  testController,
  checkSecurityQuestions,
  setNewPassword,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSingIn, isAdmin, testController);
router.get("/forgot-password", checkSecurityQuestions);
router.post("/forgot-password", setNewPassword);

//protected Route
router.get("/user-auth", requireSingIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
