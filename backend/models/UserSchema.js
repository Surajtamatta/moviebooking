const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    bookings: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,  
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 8);
        } catch (error) {
            return next(error);  
        }
    }
    next();  
});

const User = mongoose.model('User', userSchema);

module.exports = User;  
