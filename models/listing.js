const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  propertyType: {
    type: String,
    required: true,
    enum: ['House', 'Condo', 'Townhouse', 'Land', 'Other'] // Adjust options as needed
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: { // Optional depending on your location
    type: String
  },
  zipcode: { // Optional depending on your location
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  squareFootage: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  // Visuals
  // images: {
  //   type: [String], // Array of image URLs
  //   required: true
  // },
  avatar: {
    type: String,
     // Store the filename of the uploaded image
  },
  // Amenities and Features
  amenities: {
    type: [String], // Array of amenity names (e.g., "Swimming pool", "Gym")
  },
  features: { // Optional for specific property details
    type: Object,
    properties: {
      fireplace: { type: Boolean }, // Example feature
      parking: { type: Number }, // Number of parking spaces
      petFriendly: { type: Boolean } // Example feature
    }
  },

  // Additional Information
  status: { // Track listing status (e.g., "Active", "Pending", "Sold")
    type: String,
    required: true,
    enum: ['Active', 'Pending', 'Sold']
  },
  // listedBy: { // Reference to Agent or User model (if applicable)
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Agent' // Replace with your model name
  // },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set on creation
  },
  updatedAt: {
    type: Date,
    default: Date.now // Automatically set on update
  }
});

module.exports = mongoose.model('Listing', listingSchema);
