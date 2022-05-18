const { type } = require('os');
const Sequelize = require('sequelize');
const db= require('../db');
const { default: isEmail } = require('validator/lib/isEmail');

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },


  password: {
      type: Sequelize.STRING,
    },

  email: {
    type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      }
    },
  imageUrl: {
      type: Sequelize.STRING,
      defaultValue:  'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
      validate: {
        notEmpty: true
      }
  },  
  movieId: {
    type: Sequelize.INTEGER,
    userId: {
        type: Sequelize.INTEGER,
        references: 'movies_watched', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    } 
  }   
});
module.exports = User;