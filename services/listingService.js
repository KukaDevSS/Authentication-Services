const mongoose = require('mongoose');
const Listing = require('../models/listing');


exports.createListing = async (data) => {
    
    const existing = await Listing.findOne({ address: data.address, propertyType: data.propertyType })
    if (existing) {
        throw new Error('A listing with the same address and property type already exists.');
    }
    const listing = new Listing(data);
    
    return await listing.save();
};

exports.getListings = async () => {
    return await Listing.find();
};

exports.getListingsById = async (id) => {
    return await Listing.findById(id).populate('images');
};

exports.updateListing = async (id, data) => {

    const existing = await Listing.findOne({ _id: { $ne: id }});
    
    if (existing) {
        throw new Error('Another listing with the same address and property type already exists.');
    }

    return await Listing.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteListing = async (id) => {
    return await Listing.findByIdAndDelete(id);
};
