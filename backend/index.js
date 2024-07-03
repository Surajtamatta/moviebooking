const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config()
require('./database')
const PORT =8000;

app.use(bodyParser.json())
const allowedOrigins = ['http://localhost:3000/']  // Add more origin as needed

app.use(
    cors({
        origin: function (origin,callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null,true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials:true, // allow credentials
    })
)

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.json({message:'The API is working'})
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})