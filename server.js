// Setup empty JS object to act as endpoint for all routes
weatherData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('src'));
// Spin up the server
const port = 5000;
const server = app.listen(port, listening);
function listening() {
  console.log('Server Connected!')
  console.log(`running on localhost: ${port}`);
};

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route