// src/routes/artist.js

//Creates a route handler that hamdles a POST request

/* Call in express, define the router as an express router,
this could alternatively be saved in app.js, so put a note in the app.js
file to say where the route is. This structure is easier to scale up, 
because multiple routes in the app.js file will look messy & confusing */

const express = require('express');

const { Router } = require('express');

//Link to controller function

const artistControllers = require('../controllers/artist');
const app = require('../app');


//set to default route, i.e. the one that will be used the most


