/*==================================================
/routes/index.js

It defines all the routes used by Express application.
==================================================*/
// Import Express module
const express = require('express');
// Create an Express router function called "router"
const router = express.Router();


const usersRouter = require('./users');  // Import "user" sub-router functions
const moviesWatchedRouter = require('./movies_watched');  // Import "movies watched" sub-router functions
const moviesWatchingRouter = require('./movies_watching');
// Set up sub-route's top-level route and attach all sub-routes to it
router.use('/users', usersRouter);  // Add top-level URL path "/students" before sub-routes
router.use('/movies_watched', moviesWatchedRouter);  // Add top-level URL path "/campuses" before sub-routes
router.use('/movies_watching', moviesWatchingRouter);  
// Export sub-routers, so that they can be used by the top-level (main) file app.js
module.exports = router;