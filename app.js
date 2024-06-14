const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./configs/config')
require('./configs/db');
 
const authRoute = require('./routes/auth_routes')
const userRoute = require('./routes/user_routes');
const app = express();

const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
    origin: allowedOrigins
}));

const PORT = config.port;


app.use(express.json());
app.use(bodyParser.json());


// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);





app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});