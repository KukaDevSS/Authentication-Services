const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const config = require('./configs/config')
require('./configs/db');
 
const authRoute = require('./routes/auth_routes')
const userRoute = require('./routes/user_routes');
const listingRoute = require('./routes/listing_routes');    
const app = express();

const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
    origin: allowedOrigins
}));

const PORT = config.port;

// Ensure the 'uploads' directory exists


app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/listing', listingRoute);




app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});