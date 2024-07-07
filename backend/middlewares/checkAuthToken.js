const jwt = require('jsonwebtoken');

function checkAuthToken(req, res, next) {
    const authToken = req.cookies.authToken;
    const refreshToken = req.cookies.refreshToken;

    // Check if authToken or refreshToken is missing
    if (!authToken || !refreshToken) {
        return res.status(401).json({ message: 'Authentication failed: No authToken or refreshToken provided', ok: false });
    }

    // Verify authToken
    jwt.verify(authToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            // If authToken is invalid, verify refreshToken
            jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (refreshErr, refreshDecoded) => {
                if (refreshErr) {
                    return res.status(401).json({ message: 'Authentication failed: Both tokens are invalid', ok: false });
                } else {
                    // If refreshToken is valid, generate new tokens and set cookies
                    const newAuthToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });
                    const newRefreshToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '30m' });

                    res.cookie('authToken', newAuthToken, { httpOnly: true });
                    res.cookie('refreshToken', newRefreshToken, { httpOnly: true });
                    req.userId = refreshDecoded.userId;
                    req.ok = true;
                    next();
                }
            });
        } else {
            // If authToken is valid, set userId in request and continue
            req.userId = decoded.userId;
            next();
        }
    });
}

module.exports = checkAuthToken;
