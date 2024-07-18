import express from 'express'
import { payment, validate } from '../controllers/payment.js';
const router = express.Router()

router.post("/order", payment)
router.post("/validate", validate)

export default router;