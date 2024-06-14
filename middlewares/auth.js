const jwt = require('jsonwebtoken');
const config = require('../configs/config');

exports.authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    } 

    try {
        const tokenString = token.replace('Bearer ', '');
        const verified = jwt.verify(tokenString, config.jwtSecret);
        req.user = verified;
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(401).json({ message: 'Invalid token' });
    }
};
