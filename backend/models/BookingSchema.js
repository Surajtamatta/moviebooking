const mongoose = require('mongoose');


// Define the admin schema
const bookingSchema = new mongoose.Schema({
    showTime: {
        type: String,
        required: true,
    },
    showDate: {
        type: Date,
        required: true,
    
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required: true,
    },
    screenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Screen',
        required: true,
    },
    seats: [
        {
            seatId:{
                type:String,
                required:true,
            },
            type:String,
            status:String,
            seatRow:String,
            seatCol:String,
            seatRowName:String,
        
        }
    ],
    totalPrice:{
        type:Number,
        required:true,
    },
    paymentId:{
        type:String,
        required:true,
    },
    paymentType:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    }
}, {
    timestamps: true,
});


const Bookings = mongoose.model('bookings', bookingSchema);
module.exports = Bookings;