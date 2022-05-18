const pgtools = require('pgtools');  // Import tool to create Postgres database.
const {dbName, dbUser, dbPwd} = require('./configDB');  // Import the database name, username, and password.

// Declare configuration parameters of the Postgres database.
const config = {
  user: dbUser,
  host: 'localhost',
  port: 5432,
  password: dbPwd
};

const createDB = async () => {
    try {
      await pgtools.createdb(config, dbName);
      console.log(`Successfully created the database: ${dbName}!`);  // Display message if database creation successful
    } 
    catch (err) {
      if (err.name === 'duplicate_database') {
        console.log(`Database ${dbName} already exists`);  // Display message if database already exists
        return;
      } 
      else {
        console.error('createDB error:', err);  // Display error message if error occurs
        process.exit(1);
      }
    }
  }

  module.exports = createDB;