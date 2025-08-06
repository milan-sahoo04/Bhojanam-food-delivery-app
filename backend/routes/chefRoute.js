// routes/chefRoute.js
import express from "express";
import { createChef, getChefs } from "../controllers/chefController.js";
import multer from "multer";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // store in /uploads
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
router.post("/create", upload.single("image"), createChef);
router.get("/all", getChefs);

export default router;
