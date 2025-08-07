// controllers/chefController.js
import Chef from "../models/chefModel.js";

export const createChef = async (req, res) => {
  try {
    const { name, email, phone, experience, specialty } = req.body;
    // const image_filename = req.file.filename;
    // const imagePath = `/uploads/${image_filename}`;
    // const image = req.file ? req.file.filename : "";

    const chef = new Chef({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      experience: req.body.experience,
      specialty: req.body.specialty,
      // image: imagePath,
    });

    await chef.save();
    res.status(201).json({ success: true, chef });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getChefs = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json({ success: true, chefs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
