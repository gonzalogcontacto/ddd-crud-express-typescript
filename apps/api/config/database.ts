import mongoose from "mongoose";

export default () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-compass");
    console.log("Connected MongoDB");
  } catch (e) {
    console.log("Error connecting to mongoDB", e);
  }
};
