import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic:{
    type: String,
    default: "https://iconarchive.com/download/i107205/Flat-Design/User-Profile-2/user-profile-icon.ico",
  }
  
}, {
    timestamps:true
});


export const User = mongoose.model("User", userSchema);