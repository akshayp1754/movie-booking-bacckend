import { Router } from "express";
const router = Router();
import upload from "../utils/uploader.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {assignMovie, createMovie, getAllAssignments, getAllMovies, theatreDetails} from '../controllers/post.js'

router.post("/movie", isAuthenticated, upload.single("image"), createMovie);

router.get("/theatre", theatreDetails)

router.get("/getMovies", getAllMovies)

router.post('/assignMovie', assignMovie) 

router.get('/getMovie', getAllAssignments)

export default router;
