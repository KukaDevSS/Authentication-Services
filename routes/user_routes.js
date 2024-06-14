const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const { authMiddleware } = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUsersById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;