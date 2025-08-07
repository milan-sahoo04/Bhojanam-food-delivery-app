import express from "express";
import { createChef, getChefs } from "../controllers/chefController.js";
import multer from "multer";

const chefRouter = express.Router();

// Multer setup
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // store in /uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// Routes
chefRouter.post("/create", createChef);
chefRouter.get("/all", getChefs);

export default chefRouter;

// // routes/chefRoute.js
// import express from "express";
// import { createChef, getChefs } from "../controllers/chefController.js";
// import multer from "multer";

// const chefRouter = express.Router();

// // Multer setup
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // store in /uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // Routes
// chefRouter.post("/create", upload.single("image"), createChef);
// chefRouter.get("/all", getChefs);

// export default chefRouter;
