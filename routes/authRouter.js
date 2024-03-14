import express from "express";
import { requireSingIn, isAdmin } from "../middlewares/authMiddleware.js";

import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSingIn, isAdmin, testController);

export default router;
