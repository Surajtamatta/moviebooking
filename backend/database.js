const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL,{
    dbName:process.env.DB_NAME,
    serverSelectionTimeoutMS: 30000,
}).then(
    ()=>{
        console.log('Connected to database')
    }
).catch((error)=>{
    console.log('Error connecting database:' + error)
})