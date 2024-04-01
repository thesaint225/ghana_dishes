import mongoose from "mongoose";

const connectedDB = async () => {
  try {
    // Connect  MongoDB using  MONGODB_URI environment variable
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectedDB;
