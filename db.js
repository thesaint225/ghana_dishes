/*
 1er i have to install the mongodb and mongoose
 2nd i have to import mongoose from mongoose
 3rd set const  to false example let connected to false
 4th write the function to connect the mongo db
*/
import mongoose from "mongoose";
let connected = false;
const connectedDB = async () => {
  if (connected) {
    console.log("mongodb is already connected ...");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connected = true;
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("Error connecting mongodb:", error);
  }
};

export default connectedDB;
