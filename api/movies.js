// const Movie = require('../db/models/Movie');
// const User = require('../db/models/User');

// const router = require('express').Router()
// module.exports = router

// router.get('/:page', async (req, res, next) => {
//   res.send(await Movie.findAndCountAll({
//     offset: 10 * req.params.page,
//     limit: 10,
//   }));
// });

// router.get('/id/:id', async (req, res, next) => {
//   res.send(await Movie.findByPk(req.params.id));
// });

// router.post('/favorite/:movieId/:userId', async (req, res, next) => {
//   const { movieId, userId } = req.params;

//   const movie = await Movie.findByPk(movieId);
//   const user = await User.findByPk(userId);

//   await user.addMovie(movie);

//   res.send(await User.findByPk(userId, { include: Movie }));
// });

// router.delete('/favorite/:movieId/:userId', async (req, res, next) => {
//   const { movieId, userId } = req.params;

//   const movie = await Movie.findByPk(movieId);
//   const user = await User.findByPk(userId);
  
//   await user.removeMovie(movie);

//   res.send(await User.findByPk(userId, { include: Movie }));
// });
