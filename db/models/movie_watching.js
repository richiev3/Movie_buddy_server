
const { type } = require('os');
const Sequelize = require('sequelize');
const db= require('../db');
const User = require('./user')

const MovieWatching= db.define("movies_watching", {
    movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
});

module.exports = MovieWatching;