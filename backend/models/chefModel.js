// models/chefModel.js
import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  experience: { type: String, required: true },
  specialty: { type: String, required: true },
  image: { type: String }, // image is optional
});

const Chef = mongoose.model("Chef", chefSchema);
export default Chef;
