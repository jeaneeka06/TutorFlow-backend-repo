const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");



dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

// Connect to DB
connectDB();


// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
