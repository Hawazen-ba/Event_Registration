const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');



// Connect to database
connectDB();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/eventsRoutes'));
app.use('/', require('./routes/registrationRoutes'));

// Start server
const port =  5001 ;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// so that the database is connected to you have to change the ip address before in the mongoDB atlas so that it sill be available 