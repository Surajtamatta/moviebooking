const jwt = require('jsonwebtoken');

function checkAdminToken(req, res, next) {
    const adminToken = req.cookies.adminToken;

    // Check if adminToken is missing
    if (!adminToken) {
        return res.status(401).json({ message: 'Admin Authentication failed: No adminToken provided', ok: false });
    }

    jwt.verify(adminToken, process.env.JWT_ADMIN_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Admin Authentication failed: Invalid adminToken', ok: false });
        } else {
            req.adminId = decoded.adminId;
            next();
        }
    });
}

module.exports = checkAdminToken;
