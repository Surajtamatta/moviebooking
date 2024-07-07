const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the admin schema
const adminSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});

adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 8);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
