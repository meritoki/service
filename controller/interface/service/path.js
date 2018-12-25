var connectEnsureLogin = require('connect-ensure-login');
var properties = require('../../properties.js');
var public = require('../public.js');
var oauth2 = require('../oauth2.js');
var user = require('../user.js');

exports.delete = function(router) {
  console.log('service.path.delete()');
};

exports.get = function(router, passport) {
  console.log('service.path.get()');
  router.get('/api/dialog/authorize', oauth2.authorization);
  router.get("/api/login", public.getAPILogin);
  router.get("/api/login/failure", public.getAPILoginFailure);
  router.get("/api/logout", public.getLogout);
};

exports.post = function(router, passport) {
  console.log('service.path.post()');
  router.post('/api/dialog/authorize/decision', oauth2.decision);
  router.post('/api/oauth/token', oauth2.token);
  router.post("/api/login", public.postAPILogin);

  // router.post("/v1/auth/name/password",connectEnsureLogin.ensureLoggedIn(),)

  router.post("/v1/user/id",connectEnsureLogin.ensureLoggedIn(),  user.postIDUser);

  // connectEnsureLogin.ensureLoggedIn(),
};
