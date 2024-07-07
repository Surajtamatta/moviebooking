const mongoose = require('mongoose');


// Define the admin schema
const screenSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    
    },
    city: {
        type: String,
        required: true,
    },
    seats: {
        type: Array,
        required: true,
    },
    screenType: {
        type: String,
        required: true,
    },

    movieSchedules: [
        {
            movieId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Movie',
                required:true,
            },
            showTime:String,
            notAvailableSeat:[String],
            showDate:Date,
        }
    ],
}, {
    timestamps: true,
});


const Screens = mongoose.model('screens', screenSchema);
module.exports = Screens;
