/*
 * mongodb is needed to connect to a MongoDB database, local or remote
 * assert is for unity tests, to throw errors
 * Exporting the function dbConnect, that is invoked at the server.js, using the variable that holds the require('/public/db')
 * and the method .dbConnect('databaseUser', 'databasePassword');
 */ 

exports.dbConnect = function(dbUser, dbPassword) {
  const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

  var url = 'mongodb://' + dbUser + ':' + dbPassword + '@ds149207.mlab.com:49207/mongotraining';
  MongoClient.connect(url, (err,db) => {
    assert.equal(null, err);
    console.log('Connect correctly to MongoDB server: ' + dbUser);

    db.close();
  });
}


