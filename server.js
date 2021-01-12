// Setup empty JS object to act as endpoint for all routes
projectData = {};
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
app.get('/all', getProjectData);
// Callback function to complete GET '/all'
function getProjectData(req, res) {
  res.send(projectData);
}

// Post Route
const data = [];
app.post('/addData', addData);

function addData(req, res) {
  let data = req.body;

  console.log('your data ', data);

  projectData['date'] = data.date;
  projectData['temp'] = data.temp;
  projectData['content'] = data.content;

  res.send(projectData);
}