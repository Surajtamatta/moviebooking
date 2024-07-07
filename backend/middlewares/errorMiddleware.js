
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    console.log("ERROR MIDDLEWARE CALLED");
    res.status(err.statusCode || 500).json({
        ok: false,
        message: err.message,
    });
}

module.exports = errorHandler;
