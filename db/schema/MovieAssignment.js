import mongoose from 'mongoose'

const movieAssignmentSchema = new mongoose.Schema({
  theaterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater',
    required: true
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  timing: {
    type: String,
    required: true
  }
});

export const MovieAssignment = mongoose.model('MovieAssignment', movieAssignmentSchema);

