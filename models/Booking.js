const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: String,
    tutorId: String,
    serviceId: String,
    date: String,
    status: { type: String, default: "scheduled" }
});

module.exports = mongoose.model("Booking", BookingSchema);
