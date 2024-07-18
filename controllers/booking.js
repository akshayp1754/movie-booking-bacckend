import { Booking } from "../db/index.js";

export const bookSeats = async (req, res) => {
  try {
    const { seats } = req.body;
    if (!seats || !Array.isArray(seats)) {
      return res.status(400).json({ message: "Invalid seats data" });
    }
    console.log("seats not working");

    const newBooking = new Booking({ seats });
    await newBooking.save();

    return res
      .status(201)
      .json({ message: "Seats booked successfully", booking: newBooking });
  } catch (error) {
    console.error("Error booking seats:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBookedSeats = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};
