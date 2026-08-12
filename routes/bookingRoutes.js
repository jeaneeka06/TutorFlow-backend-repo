import express from "express";
import {
    createBooking,
    getBookings,
    updateBooking,
    cancelBooking
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:userId", getBookings);
router.put("/:id", updateBooking);
router.delete("/:id", cancelBooking);

export default router;
