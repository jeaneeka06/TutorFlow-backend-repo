// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//     const { name, email, password, role } = req.body;
//     const normalizedEmail = email?.toLowerCase().trim();

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await User.create({
//         name,
//         email: normalizedEmail,
//         password: hashed,
//         role
//     });

//     res.status(201).json(user);
// };

// exports.login = async (req, res) => {
//     const { email, password } = req.body;
//     const normalizedEmail = email?.toLowerCase().trim();

//     const user = await User.findOne({ email: normalizedEmail });
//     if (!user) return res.status(401).json({ message: "Invalid email or password" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(401).json({ message: "Invalid email or password" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     res.json({ token, user });
// };

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: "User registered", user: newUser });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
