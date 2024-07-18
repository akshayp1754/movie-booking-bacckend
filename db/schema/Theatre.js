import mongoose from "mongoose";

const TheatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  screens: [
    {
      screenNumber: {
        type: String, // or Number, depending on your schema design
        required: true,
      },
      movies: [
        {
          movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie', // Reference to the Movie model if needed
            required: true,
          },
          timing: {
            type: String, // Adjust the type based on your requirements (e.g., Date, String)
            required: true,
          },
        },
      ],
    },
  ],
  // Add other fields as needed
});

export const Theatre = mongoose.model('Theatre', TheatreSchema);
