import express from 'express'
import { bookSeats, getAllBookedSeats } from '../controllers/booking.js';

const router = express.Router()

router.post('/bookings', bookSeats)

router.get('/getbookings', getAllBookedSeats)

export default router;