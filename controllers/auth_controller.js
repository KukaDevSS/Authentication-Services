const authService = require('../services/authService');

exports.signIn = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        const { user, token } = await authService.signIn(phoneNumber, password);
        res.json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.signUp = async (req, res) => {
    try {
        const user = await authService.signUp(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};