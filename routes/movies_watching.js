// // Import Express module
// const express = require('express');
// // Create an Express router function called "router"
// const router = express.Router();
// // Import database models
// const { MovieWatching, User } = require('../db/models');

// // Import a middleware to replace "try and catch" for request handler, for a concise coding (fewer lines of code)
// const ash = require('express-async-handler');

// /* GET ALL CAMPUSES */
// router.get('/', ash(async(req, res) => {
//   let movies= await MovieWatching.findAll({include: [User]});
//   res.status(200).json(movies);
// }));

// /* GET CAMPUS BY ID */
// router.get('/:id', ash(async(req, res) => {
//   let movie= await MovieWatching.findByPk(req.params.id, {include: [User]});
//   res.status(200).json(movie);
// }));

// /* DELETE CAMPUS */
// router.delete('/:id', ash(async(req, res) => {
//   await MovieWatching.destroy({
//     where: {
//       id: req.params.id
//     }
//   });
//   res.status(200).json("Deleted a campus!");
// }));

// /* ADD NEW CAMPUS */
// router.post('/', ash(async(req, res) => {
//   let newMovie= await MovieWatching.create(req.body);
//   res.status(200).json(newMovie);
// }));

// /* EDIT CAMPUS */
// router.put('/:id', ash(async(req, res) => {
//   await MovieWatching.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   });
//   let movie= await MovieWatchings.findByPk(req.params.id, {include: [User]});
//   res.status(201).json(movie);
// }))

// // Export router, so that it can be imported to construct the apiRouter (app.js)
// module.exports = router;