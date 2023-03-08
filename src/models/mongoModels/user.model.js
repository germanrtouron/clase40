import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: String,
    age: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    avatar: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export const userModel = mongoose.model(userCollection, userSchema);
