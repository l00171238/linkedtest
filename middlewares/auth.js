const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    // Get the token from the header 
    //using in the header to check the token 
    const token = req.header('x-auth-token');

    // CHeck if no token 
    if (!token) {
        return res.status(401).json({ mgs: " no token , authrization denied" });
    }

    // verify token
    try {
        const decode = jwt.verify(token, config.get('jwtSecret'));

        req.user = decode.user;
        next();

    } catch (err) {
        res.status(401).json({ mgs: ' token is not valid' });
    }
}