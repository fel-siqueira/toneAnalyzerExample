/*
 * Modularizing the MongoDB connection, exporting only the require(./db.js), and it will be called at the server.js
 * When its called, the index.js will call a named function, and it will be invoked using the name of the require, and the name
 * of the function. 
 */
module.exports = require('./lib/dbConnect.js');
