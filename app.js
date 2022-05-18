const createDB = require('./db/utils/createDB');
const seedDB = require('./db/utils/seedDB');
const db = require('./db');
const cors = require('cors');


// const syncDatabase = async () => {
//     try {
//         await db.sync({force:true});
//         console.log('---------Synced to db----------');
//         await seedDB();
//         console.log('-------------Successfully seeded db---------------');
//     }
//     catch (err){
//         console.error('syncDB error:', err);
//     }
// }
const express = require('express');
const app = express();
app.use(cors());
const apiRouter = require('./routes/index');
/* CONFIGURE EXPRESS APPLICATION */
// Create a function to configure the Express application
const configureApp = async () => {
    // Middleware to handle request data and response
    app.use(express.json());  // Set up Express to parse JSON requests and generate JSON responses
    app.use(express.urlencoded({ extended: false }));  // Express to parse requests encoded in URL format and querystring
  
    // Set up the Express application's main top-level route and attach all sub-routes to it
    app.use("/api", apiRouter);  // Add main top-level URL path "/api" before sub-routes
  
    // Handle routing error: Page Not Found
    // It is triggered when a request is made to an undefined route 
    app.use((req, res, next) => {
      const error = new Error("Not Found, Please Check URL!");
      error.status = 404;
      next(error);  // Call Error-Handling Middleware to handle the error
    });
    // Routing Error-Handling Middleware:
    // All Express routes' errors get passed to this when "next(error)" is called
    app.use((err, req, res, next) => {
      console.error(err);
      console.log(req.originalUrl);
      res.status(err.status || 500).send(err.message || "Internal server error.");
    });
  };
  
  /* SET UP BOOT FOR SERVER APPLICATION */
  // Construct the boot process by incorporating all needed processes
  const bootApp = async () => {
    await createDB();  // Create database (if not exists)
    // await syncDatabase();  // Seed the database
    await configureApp();  // Start and configure Express application
  };
  
  /* START THE SERVER BOOT */
  // Finally, run the boot process to start server application
  bootApp();
  
  /* ACTIVATE THE SERVER PORT */
  // Set up express application to use port 5000 as the access point for the server application.
  const PORT = 5000;  // Server application access point port number
  app.listen(PORT, console.log(`Server started on ${PORT}`));