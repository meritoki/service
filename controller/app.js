/*
 * Name: app.js
 * Author: Joaquin Rodriguez
 * Copyright: 2015-2016 Merit Charge, LLC.
 * Date: 01/2016
 * Reference: http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
 * Reference: https://www.codementor.io/nodejs/tutorial/build-website-from-scratch-using-expressjs-and-bootstrap
 * Reference: http://stackoverflow.com/questions/21194934/node-how-to-create-a-directory-if-doesnt-exist
 * Reference: http://passportjs.org/docs
 */
var express = require('express');
var oauth2orize = require('oauth2orize');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var redis = require('redis');
var connectRedis = require('connect-redis')(session);
var properties = require('./properties.js');
var header = require('./interface/header.js');
var protocol = require('./interface/protocol.js');
var appPath = require('./interface/app/path.js');
var servicePath = require('./interface/service/path.js');
var security = require('./interface/security.js');
var relational = require('../model/relational.js');
var app = express();
var redisClient = redis.createClient();
var router = express.Router();
var view = __dirname + '/../view';
var model = __dirname + '/../model';
var passport = require('passport');
var oauth2orize = require('oauth2orize');
var oauth2orizeServer = oauth2orize.createServer();
var connectEnsureLogin = require('connect-ensure-login');
console.log("Merit Builder Management System");
console.log("Version 0.38.0");
security.log(app);
app.set('views', view);
app.set('view engine', 'jade');
app.use(express.static(view + '/public'));
app.use('/media', express.static(model + '/media'));
app.use(bodyParser.json({
  limit: '50mb'
}))
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb'
}));
app.use(cookieParser(properties.cookie.secret));
app.use(session({
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: properties.session.maxAge
  },
  secret: properties.session.secret
}));
app.use('/media', connectEnsureLogin.ensureLoggedIn());
app.use(function(req, res, next){header.initialize(req, res, next)});
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);
require('./interface/authentication.js');
appPath.delete(router);
appPath.get(router,passport);
appPath.post(router,passport);
servicePath.delete(router);
servicePath.get(router,passport);
servicePath.post(router,passport);
protocol.initialize(app,router);
