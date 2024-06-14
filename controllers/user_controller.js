const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
    try {
        const user = await userService.getUsers();
        const total =  await userService.getTotalUsers();

        res.status(200).json({user, total});
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

exports.getUsersById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);

    
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        if (error.message === 'Phone number must be unique.') {
            return res.status(422).json({ error: 'Phone number must be unique.' });
        }
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};