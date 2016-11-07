const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cfenv = require('cfenv');

var server = express();
var appEnv = cfenv.getAppEnv();

server.use(morgan('short'));

server.use(express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'views'));

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index.html');
});

server.post('/test', (req, res) => {
  res.send('POST to /test');
});

server.listen(appEnv.port, appEnv.bind, () => {
  console.log('server started on ' + appEnv.url);
});

