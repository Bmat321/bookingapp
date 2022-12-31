import express, { Router } from "express";
import { login, register } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
