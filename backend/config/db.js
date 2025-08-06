import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://milansahoo:09876@cluster0.qfvcoqz.mongodb.net/bhojonam"
    )
    .then(() => console.log("DB Connected"));
};
