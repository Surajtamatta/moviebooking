const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/Auth')
const adminRoutes = require('./routes/admin')
const moviesRoutes = require('./routes/Movie')
const  imageUploadRoutes = require('./routes/imageUpload')
require('dotenv').config()
require('./database')



const PORT =8000;
const app =express();
app.use(bodyParser.json())
const allowedOrigins = ['http://localhost:3000']  // Add more origin as needed

app.use(
    cors({
        origin: function (origin,callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null,true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials:true, 
    })
)

app.use(cookieParser())

app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);
app.use('/movie',moviesRoutes);
app.use('/image',imageUploadRoutes);

app.get('/',(req,res)=>{
    res.json({message:'The API is working'})
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})