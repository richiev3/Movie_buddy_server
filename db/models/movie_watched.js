const { type } = require('os');
const Sequelize = require('sequelize');
const db= require('../db');

const MovieWatched= db.define("movies_watched", {
    movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    movie_name: {
        type:Sequelize.STRING,
        allowNull: false
    },
    voteAverage: Sequelize.DECIMAL,
    releaseDate: Sequelize.STRING,
    overview: Sequelize.TEXT,
    imageUrl: Sequelize.STRING,
});

module.exports = MovieWatched;