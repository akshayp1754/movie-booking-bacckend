import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  seats: {
    type: [String],
    required: true,
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);
