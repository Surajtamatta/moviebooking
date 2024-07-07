const mongoose = require('mongoose');


// Define the admin schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    
    },
    portraitUrl: {
        type: String,
        required: true,
    },
    landscapeUrl: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    cast: [
        {   celebType:String,
            celebName:String,
            role:String,
            imgUrl:String,
        }
    ],
    crew: [
        {   celebType:String,
            celebName:String,
            role:String,
            imgUrl:String,
        }
    ],
    totalPrice:{
        type:Number,
        required:true,
    }

}, {
    timestamps: true,
});


const Movies = mongoose.model('movies', movieSchema);
module.exports = Movies;
