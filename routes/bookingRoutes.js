const router = require("express").Router();
const {
    createBooking,
    getBookings,
    updateBooking,
    cancelBooking
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/:userId", getBookings);
router.put("/:id", updateBooking);
router.delete("/:id", cancelBooking);

module.exports = router;
