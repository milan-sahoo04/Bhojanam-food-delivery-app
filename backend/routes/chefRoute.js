// routes/chefRoute.js
import express from "express";
import { createChef, getChefs } from "../controllers/chefController.js";

const router = express.Router();

// Routes
router.post("/create", createChef);
router.get("/all", getChefs);

export default router;
