const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../models/AdminSchema');
const errorHandler = require('../middlewares/errorMiddleware');
const AdminTokenHandler = require('../middlewares/checkAdminToken');

const router = express.Router();

function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data
    };
}

router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password,address, phone } = req.body;
        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(409).json(createResponse(false, 'Email already exists'));
        }
        const newAdmin = new Admin({
            name,
            email,
            password,
            address,
            phone
        });
        await newAdmin.save();
        res.status(201).json(createResponse(true, 'Admin registered successfully'));
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json(createResponse(false, 'Invalid email credentials'));
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json(createResponse(false, 'Invalid password credentials'));
        }

        const AdminTokenHandler = jwt.sign({ adminId: admin._id }, process.env.JWT_ADMIN_SECRET_KEY, { expiresIn: '10m' });

        res.cookie('adminToken', AdminTokenHandler, { httpOnly: true });

        res.status(200).json(createResponse(true, 'Admin Login successful', {
            AdminTokenHandler
        }));
    } catch (error) {
        next(error);
    }
});

router.post('/checklogin', AdminTokenHandler, async (req, res, next) => {
    res.json({
        adminId: req.adminId,
        ok: true,
        message: "Admin authenticated successfully"
    });
});

router.use(errorHandler);

module.exports = router;
