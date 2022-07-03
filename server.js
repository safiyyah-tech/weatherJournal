// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Importing Express to run the server and routes.

const express = require('express')
const app = express()
const port = 8080;
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('weatherJournal'));


// Setting up the server(and aslo using the arrow function for the call back function).
app.listen(port, ()=>{
    console.log('Local server running at port', port)
})