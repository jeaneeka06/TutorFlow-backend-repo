import dotenv from "dotenv";

dotenv.config();

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log(
    "OpenAI key loaded:",
    process.env.OPENAI_API_KEY ? "YES" : "NO"
);

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

// ROUTES (all ES Modules)
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/ai", aiRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
