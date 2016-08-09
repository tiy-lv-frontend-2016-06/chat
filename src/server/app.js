var express = require('express');
var path = require('path');
var chalk = require('chalk');
var http = require('http');
var serveChat = require('./chat');

module.exports = function (config) {
  var defaultConfig = {
    root: __dirname,
    port: 3000,
    host: '0.0.0.0'
  }

  config = Object.assign(defaultConfig, config);

  var app = express();

  app.use(express.static(config.root));

  app.get("*", function(req, res){
    res.sendFile(path.resolve(config.root + '/index.html'));
  });

  var server = http.createServer(app);

  serveChat(server);
  
  server.listen(config.port, config.host);

  console.log((chalk.cyan('Server started at http://' + config.host + ':' + config.port)));
}