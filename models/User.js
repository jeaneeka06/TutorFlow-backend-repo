// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//     role: { type: String, enum: ["student", "tutor"], default: "student" }
// });

// module.exports = mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
