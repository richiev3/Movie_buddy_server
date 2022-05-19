const User = require('./user');
const MovieWatched = require('./movie_watched');
// const MovieWatching = require('./movie_watching');



// MovieWatching.belongsTo(User); 
MovieWatched.belongsTo(User);


User.hasMany(MovieWatched);
// User.hasMany(MovieWatching);

module.exports = {
    User,
    MovieWatched
};