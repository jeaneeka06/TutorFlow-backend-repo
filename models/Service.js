const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    tutorId: String,
    subject: String,
    description: String,
    price: Number,
    availability: Array
});

module.exports = mongoose.model("Service", ServiceSchema);
