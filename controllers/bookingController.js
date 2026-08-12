import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (error) {
        console.error("Create Booking Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId });
        res.json(bookings);
    } catch (error) {
        console.error("Get Bookings Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateBooking = async (req, res) => {
    try {
        const updated = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        console.error("Update Booking Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: "Booking canceled" });
    } catch (error) {
        console.error("Cancel Booking Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
