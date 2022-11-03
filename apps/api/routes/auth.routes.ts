import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

//Login route
router.post("/login", authController.login);

export default router;
