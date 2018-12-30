var connectEnsureLogin = require('connect-ensure-login');
var properties = require('../../properties.js');
var service = require('../service.js');
var oauth2 = require('../oauth2.js');
var user = require('../user.js');
var auth = require('../auth.js');
var msg = require('../msg.js');

exports.delete = function(router) {
  console.log('service.path.delete()');
};

exports.get = function(router, passport) {
  console.log('service.path.get()');
  router.get('/v1/service/dialog/authorize', oauth2.authorization);
  router.get("/v1/service/login", service.getAPILogin);
  router.get("/v1/service/login/failure", service.getAPILoginFailure);
  router.get("/v1/service/logout", service.getLogout);

  router.get("/v1/msg/email/verify", msg.getVerify);
};

exports.post = function(router, passport) {
  console.log('service.path.post()');
  router.post('/v1/service/dialog/authorize/decision', oauth2.decision);
  router.post('/v1/service/oauth/token', oauth2.token);
  router.post("/v1/service/login", service.postAPILogin);

//auth
  router.post("/v1/auth/name/password",connectEnsureLogin.ensureLoggedIn(), auth.postNamePasswordAuth);
  router.post("/v1/auth/name",connectEnsureLogin.ensureLoggedIn(), auth.postNameAuth);
  router.post("/v1/auth/id",connectEnsureLogin.ensureLoggedIn(), auth.postIDAuth);
//user
  router.post("/v1/user/id",connectEnsureLogin.ensureLoggedIn(),  user.postIDUser);
//msg
  router.post("/v1/msg/email/verification",msg.postEmailVerification);
//id

//location

  // connectEnsureLogin.ensureLoggedIn(),
};
