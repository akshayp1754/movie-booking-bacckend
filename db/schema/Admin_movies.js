import mongoose from 'mongoose'

const MoviesSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{
    timestamps:true,
})

export const Movies = mongoose.model('Movies',MoviesSchema)