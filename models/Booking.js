import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        tutorId: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        status: { type: String, default: "scheduled" }
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
