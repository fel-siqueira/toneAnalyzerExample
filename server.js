/*
 * Importing dependencies
 * morgan logs all the requests to the server
 * path is a native module that normalizes the files paths
 * cfenv is a environment-variables-manager for Cloud Foundry environments
 * body-parser creates a 'body' attribute at the req, from http.post
 * mongod is the modularized connection to the remote database, this require imports the module and it's methods, like .dbConnect
 * mongodb.dbConnect(dbUser, dbPassword) calls the method that connect to the remote database
 */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');
const mongodb = require('./public/db');
const cognitive = require('./public/js/cognitive');

//Express startup
var server = express();

// Method that initializes the remote database, that receives the dabase username, and the database password
mongodb.dbConnect('fel-siqueira', '1123');

//Setting the environment variables with the cfenv module
var appEnv = cfenv.getAppEnv();

//Setting how detailed the logger will show the http requests informations
server.use(morgan('short'));

//Setting the body-parser to work with json responses
server.use(bodyParser.json());

//Setting the default path to static files to the server
server.use(express.static(path.join(__dirname, 'public')));

//Setting the default path to the views
server.set('views', path.join(__dirname, 'views'));

//Setting the view rendering engine, using ejs module
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');

//Rendering the index.html when the browser requests a GET to the /
server.get('/', (req, res) => {
  res.render('index.html');
});

//Setting communication between the server and the front-end, at the /test route
server.post('/test', (req, res) => {
  var data = req.body;
  console.log('Received from Angular: ' + data.texto);
  cognitive.toneAnalyze(data.texto, function(response){
    res.json(response);
  });
});

//Starting the server, at cfenv port and the cfenv ip, then loggin the full path/url
server.listen(appEnv.port, appEnv.bind, () => {
  console.log('server started on ' + appEnv.url);
});

