import mongoose from "mongoose";
import { Movies, Theatre } from "../db/index.js";
import cloudinary from "../utils/cloudinary.js";
import { MovieAssignment } from "../db/schema/MovieAssignment.js";


export const createMovie = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const { Name, genre, description } = req.body;
    const file = req.file;

    const responseURL = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "movies" }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        })
        .end(file.buffer);
    });
    console.log("url: ", responseURL);

    const post = await Movies.create({
      Name,
      genre,
      description,
      image: responseURL.secure_url,
      user: req.user.id,
    });

    return res.status(200).json({
      message: "movie created successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.find();

    return res.status(200).json({
      message: "Movies fetched successfully",
      success: true,
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const theatreDetails = async (req, res) => {
  try {
    const theatres = await Theatre.find();
    return res.status(200).json({
      message: "data fetched successfully",
      success: true,
      data: theatres,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const assignMovie = async (req, res) => {
  try {
    const { theaterId, movieId, timing } = req.body;

    // Validate required fields
    if (!theaterId || !movieId || !timing) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new movie assignment
    const newAssignment = new MovieAssignment({
      theaterId,
      movieId,
      timing
    });

    // Save the assignment to the database
    await newAssignment.save();

    return res.status(201).json({
      message: 'Movie assigned to screen successfully',
      data: newAssignment
    });
  } catch (error) {
    console.error('Error assigning movie:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await MovieAssignment.find(); 
    console.log(assignments);
    return res.status(200).json({
      message: 'Movie assignments fetched successfully',
      data: assignments
    });
  } catch (error) {
    console.error('Error fetching movie assignments:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};