import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Import routes
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import chefRoute from "./routes/chefRoute.js"; // ✅ Step 1: Import the new chef route
import chefRouter from "./routes/chefRoute.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB connection
connectDB();

// API endpoints
app.use("/api/chef", chefRouter);
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Static folder for images
app.use("/images", express.static("uploads"));

// Test route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
