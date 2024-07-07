const express = require('express')


const User = require('../models/UserSchema');
const Movies = require('../models/MovieSchema');
const Bookings = require('../models/BookingSchema');
const Screens = require('../models/ScreenSchema');

const errorHandler = require('../middlewares/errorMiddleware');
const authTokenHandler = require('../middlewares/checkAuthToken');
const AdminTokenHandler = require('../middlewares/checkAdminToken');

const router = express.Router()
// router.get('/test', async (req, res) => {
//     res.json({
//         message: "Movies API is working"
//     });
// });
function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data
    };
}

router.post('/addmovie', AdminTokenHandler, async (req, res, next) => {
    try {
        const { title, description, portraitUrl,landscapeUrl,rating,genre,duration } = req.body;
        const newMovie = new Movie({
            title, 
            description, 
            portraitUrl,
            landscapeUrl,
            rating,
            genre,
            duration
        });
        await newMovie.save();
        res.status(201).json(createResponse(true, 'Movie added successfully', newMovie));
    } catch (error) {
        next(error);
    }
});

router.post('/addcelebrity', AdminTokenHandler, async (req, res, next) => {
    try {
        const { movieId,celebName,celebType,role, imgUrl } = req.body;
        const movie = await Movies.findById(movieId)
        if (!movie) {
            return res.status(404).json(createResponse(false, 'Movie not Found'));
        }
        const newCeleb = {
            movieId,
            celebName,
            celebType,
            role, 
            imgUrl
        };
        if(celebtype === 'cast'){
            movie.cast.push(newCeleb)
        }else{
            movie.cast.push(newCeleb)
        }
        await movie.save();
        res.status(201).json(createResponse(true, 'Celebrity successfully added', movie));
    } catch (error) {
        next(error);
    }
});

router.post('/createscreen', AdminTokenHandler, async (req, res, next) => {
    try {
        const { name,location,seats,city,screenType} = req.body;
        const newScreen = new Movie({
            name,
            location,
            seats,
            city,
            screenType,
            movieSchedules:[]
        });
        await newScreen.save();
        res.status(201).json(createResponse(true, 'Screens created successfully', newScreen));
    } catch (error) {
        next(error);
    }
});
router.post('/schedulescreen', AdminTokenHandler, async (req, res, next) => {
    try {
        const { screenId,movieId,showTime,showDate} = req.body;
        const screen = Screens.findById(screenId)
        if(!screen){
            res.status(404).json(createResponse(false, 'Screens not created successfully'));
        }
        const movie = await Movies.findById(movieId)
        if (!movie) {
            return res.status(404).json(createResponse(false, 'Movie not Found'));
        }
        const schedule = {
            movieId,
            showTime,
            notAvailableSeat:[],
            showDate,
        };
        screen.movieSchedules.push(schedule);
        await screen.save();
        res.status(201).json(createResponse(true, 'Screens  successfully Scheduled', screen));
    } catch (error) {
        next(error);
    }
});


//user access
router.post('/bookticket', authTokenHandler, async (req, res, next) => {
    try {
        const { screenId,showTime, showDate, movieId,seats,totalPrice,paymentType,paymentId } = req.body;
        const screen = await Screens.findById(screenId)
        if(!screen){
            res.status(404).json(createResponse(false, 'Theatre schedule not found'));
        }
        const movieSchedule = screen.movieSchedules.find(schedule=>schedule.movieId == movieId && schedule.showTime == showTime && schedule.showDate == showDate)
        if(!movieSchedule){
            res.status(404).json(createResponse(false, 'movie schedule not found'));
        }

        const user = await User.findById(req.userId)
        if(!user){
            res.status(404).json(createResponse(false, 'user not found'));
        }
        const newBooking = Bookings({
            userId:req.userId,
            showTime, 
            showDate, 
            movieId,
            seats,
            totalPrice,
            paymentType,
            paymentId
        })
        await newBooking.save();
        const seatsId = seats.map(seat=>seat.seatId)
        movieSchedule.notAvailableSeat.push(...seatsId)
        await screen.save();
        user.bookings.push(newBooking._id);
        await user.save()
        res.status(201).json(createResponse(true, 'Booked successfully', newBooking));
    } catch (error) {
        next(error);
    }
});

router.get('/movies', async (req, res, next) => {
    
    try {
        const movies = await Movies.find()
        res.status(201).json(createResponse(true, 'All Movies fetch', movies));
    } catch (error) {
        next(error);
    }
});
router.get('/movies/:id', async (req, res, next) => {
    try {
        const movieId = req.params.id
        const movie = await Movies.findById(movieId)
        if(!movie){
            res.status(404).json(createResponse(false, 'Movies not found'));
        }
        res.status(404).json(createResponse(true, 'Movie found', movie));
    } catch (error) {
        next(error);
    }
});

router.get('/screensbycity', async (req, res, next) => {

    try {
        const city = req.body.city;
        const screens=await Screens.find({city});
        if(!screens){
            res.status(404).json(createResponse(false, 'no screen found', newMovie));
        }
        res.status(201).json(createResponse(true, 'Movie created successfully', screens));
    } catch (error) {
        next(error);
    }
});




router.use(errorHandler);
module.exports = router;