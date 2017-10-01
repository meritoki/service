/*
 * Name: web.js
 * Author: Joaquin Rodriguez
 * Copyright: 2015-2016 Merit Charge, LLC.
 * Date: 01/2016
 * Reference: http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
 * Reference: https://www.codementor.io/nodejs/tutorial/build-website-from-scratch-using-expressjs-and-bootstrap
 * Reference: http://stackoverflow.com/questions/21194934/node-how-to-create-a-directory-if-doesnt-exist
 * Reference: http://passportjs.org/docs
 * Reference: http://stackoverflow.com/questions/27961320/when-should-i-use-cookie-parser-with-express-session
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
var web = express();
var redisClient = redis.createClient();
var router = express.Router();
var view = __dirname + '/../view';
var model = __dirname + '/../model';
var passport = require('passport');
var oauth2orize = require('oauth2orize');
var oauth2orizeServer = oauth2orize.createServer();
var connectEnsureLogin = require('connect-ensure-login');

console.log("Web");
console.log("Version 0.1.0");
security.log(web);
web.set('views', view);
web.set('view engine', 'jade');
web.use(express.static(view + '/public'));
web.use('/media', express.static(model + '/media'));
web.use(bodyParser.json({
  limit: '50mb'
}))
web.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb'
}));
// web.use(cookieParser(properties.cookie.secret));
web.use(session({
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: properties.session.maxAge
  },
  secret: properties.session.secret
}));
web.use('/media', connectEnsureLogin.ensureLoggedIn());
web.use(function(req, res, next){header.initialize(req, res, next)});
web.use(passport.initialize());
web.use(passport.session());
web.use("/", router);
require('./interface/authentication.js');
appPath.delete(router);
appPath.get(router,passport);
appPath.post(router,passport);
servicePath.delete(router);
servicePath.get(router,passport);
servicePath.post(router,passport);
protocol.initialize(web,router);
