// Import Express module
const express = require('express');
// Create an Express router function called "router"
const router = express.Router();
// Import database models
const { MovieWatched, User } = require('../db/models');

// Import a middleware to replace "try and catch" for request handler, for a concise coding (fewer lines of code)
const ash = require('express-async-handler');


/* GET ALL STUDENTS: async/await using express-async-handler (ash) */
// Automatically catches any error and sends to Routing Error-Handling Middleware (app.js)
// It is the same as using "try-catch" and calling next(error)
router.get('/', ash(async(req, res) => {
  let user = await User.findAll({include: [MovieWatched]});
  res.status(200).json(user);
}));

/* GET User BY ID */
router.get('/:id', ash(async(req, res) => {
  let user = await User.findByPk(req.params.id, {include: [MovieWatched]});  // Find student by Primary Key
  res.status(200).json(user);
}));

/* ADD NEW User */
router.post('/', function(req, res, next) {
  User.create(req.body)
    .then(createdUser => res.status(200).json(createdUser))
    .catch(err => next(err));
});

/* DELETE User */
router.delete('/:id', function(req, res, next) {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a student!"))
    .catch(err => next(err));
});

/* EDIT User */
router.put('/:id', ash(async(req, res) => {
  await User.update(req.body,
        { where: {id: req.params.id} }
  );
  let user = await User.findByPk(req.params.id);
  res.status(201).json(user);
}));

// Export router, so that it can be imported to construct the apiRouter (app.js)
module.exports = router;