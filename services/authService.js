const User = require('../models/user'); 
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwt');

exports.signIn = async (phoneNumber, password) => {
    const user = await User.findOne({ phoneNumber });
    if (!user) {
        throw new Error('Invalid phone number or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
        
    if (!isMatch) {
        throw new Error('Invalid phone number or password');
    }
    const token = generateToken(user._id, user.firstName, user.lastName, user.phoneNumber);
    return {user, token };
};

exports.signUp = async (data) => {
    const { firstName, lastName, phoneNumber, userName, password, role } = data;
    const existingUser = await User.findOne({ phoneNumber });

    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ firstName, lastName, userName, phoneNumber, role, password: hashedPassword });
    await user.save();
    return user;
};