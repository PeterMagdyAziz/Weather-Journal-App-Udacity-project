// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port,listening);

function listening(params) {
    console.log(`Server is running on port: ${port}`)
};

// setup the get route
app.get(url='', getData);

function getData(req, res){
    res.send(projectData);
};

// setup the post route
app.post(url='',addData);

function addData(req, res){
    projectData.temperature = req.body.temperature; // updating temp data
    projectData.date = req.body.date;// updating the date
    projectData.userResponse = req.body.user_response;// updating the feeling
};


// post route for /addtemp URL
app.post('/addtemp', addTemp);

function addTemp (req,res){
    // adding data to the project data object not using push cause it is not an array it is a an object
    projectData.temperature = req.body.temperature; // updating temp data
    projectData.date = req.body.date;// updating the date
    projectData.userResponse = req.body.user_response;// updating the feeling
};

// get route for /all URL
app.get('/all',updateData)

function updateData(req, res) {
    res.send(projectData); // sending the data to client 
};