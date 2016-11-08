const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');

var server = express();
var appEnv = cfenv.getAppEnv();

server.use(morgan('short'));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'views'));

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index.html');
});

server.post('/test', (req, res) => {
  var data = req.body;
  console.log('Received from Angular: ' + data.texto);
  res.send('POST to /test from NodeJS');
});

server.listen(appEnv.port, appEnv.bind, () => {
  console.log('server started on ' + appEnv.url);
});

