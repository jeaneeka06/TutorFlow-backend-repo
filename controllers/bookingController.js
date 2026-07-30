const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking);
};

exports.getBookings = async (req, res) => {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
};

exports.updateBooking = async (req, res) => {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.cancelBooking = async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking canceled" });
};
