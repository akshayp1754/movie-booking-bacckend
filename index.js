import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT ;

import { connectDB } from './utils/db.utils.js';
connectDB();
import cors from 'cors';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js'
import bookingRoutes from './routes/booking.js'
import payment from './routes/payment.js'

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/post', postRoutes)
app.use('/seat', bookingRoutes)
app.use('/admin', postRoutes)
app.use('/payment', payment)


app.get('/', (req, res) =>{
    res.send(`Server is running.. `);
});

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
