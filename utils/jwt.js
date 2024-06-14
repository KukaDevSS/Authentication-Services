const jwt = require('jsonwebtoken');
const config = require('../configs/config')

const generateToken = (user) => {
    const payload = {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
    };

    return jwt.sign(payload,config.jwtSecret, {expiresIn: '1h'});
}

module.exports = generateToken;