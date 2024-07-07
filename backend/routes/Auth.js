const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/UserSchema');
const errorHandler = require('../middlewares/errorMiddleware');
const authTokenHandler = require('../middlewares/checkAuthToken');


const router = express.Router();

// router.get('/test', async (req, res) => {
//     res.json({
//         message: "Auth API is working"
//     });
// });

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
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json(createResponse(false, 'Email already exists'));
        }

        // const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = new User({
            name,
            email,
            password,
            address,
            phone,
        });

        await newUser.save();
        res.status(201).json(createResponse(true, 'User registered successfully'));
    } catch (error) {
        next(error);
    }
});


// router.post('/sendopt',async(req,res,next)=>{
    

// })
router.post('/login',async(req,res,next)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json(createResponse(false, 'Invalid email credentials'));
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json(createResponse(false, 'Invalid password credentials'));
        }

        const authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFESH_SECRET_KEY, { expiresIn: '1d' });

        res.cookie('authToken', authToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });

        res.status(200).json(createResponse(true, 'Login successful', {
            authToken,
            refreshToken
        }));
    } catch (error) {
        next(error);
    }
})

router.post('/checklogin',authTokenHandler,async(req,res,next)=>{
    res.json({
        userId:req.userId,
        ok:true,
        message:"User authenticated successfully"
    })
})

router.use(errorHandler);

module.exports = router;


