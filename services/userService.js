const User = require('../models/user');
const mongoose = require('mongoose');


exports.getUsers = async () => {
    return await User.find()
  };
  
  exports.getUserById = async (id) => {
    return await User.findById(id)
  };
  
  exports.updateUser = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId');
    }
    const existingUser = await User.findOne({ _id: { $ne: id },phoneNumber: data.phoneNumber });
    if (existingUser) {
        throw new Error('Phone number must be unique.');
    }
    return await User.findByIdAndUpdate(id, data, { new: true });
  };
  
  exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };
  
  exports.getTotalUsers = async () => {
    return await User.countDocuments();
};