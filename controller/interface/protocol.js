var http = require('http');
var https = require('https');
var properties = require('../properties.js');
var security = require('./security.js');

exports.initialize = function(app, router) {
  router.use(function(req, res, next) {
    if (!req.secure && req.headers['x-forwarded-proto'] !== "https" && properties.https) {
      res.redirect('https://' + req.headers.host + req.url);
    } else {
      next();
    }
  });
  http.createServer(app).listen(properties.port.http, function() {
    console.log('protocol.initialize ' + properties.port.http);
  });
  if (properties.https) {
    https.createServer(security.configuration(), app).listen(properties.port.https, function() {
      console.log('protocol.initialize ' + properties.port.https);
    });
  }
}

exports.initializeNew = function(app, router) {
  router.use(function(req, res, next) {
    if (!req.secure && req.headers['x-forwarded-proto'] !== "https" && properties.https) {
      res.redirect('https://' + req.headers.host + req.url);
    } else {
      next();
    }
  });
  http.createServer(app).listen(properties.port.http, function() {
    console.log('protocol.initialize ' + properties.port.http);
  });
  if (properties.https) {
    https.createServer(security.configuration(), app).listen(properties.port.https, function() {
      console.log('protocol.initialize ' + properties.port.https);
    });
  }
}
