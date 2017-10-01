
var connectEnsureLogin = require('connect-ensure-login');
var properties = require('../../properties.js');
var public = require('../public.js');
var oauth2 = require('../oauth2.js');
var user = require('../user.js');
var phone = require('../phone.js');


exports.delete = function(router) {
  console.log('app.path.delete()');
};

exports.get = function(router, passport) {
  console.log('app.path.get()');
  router.get("/", public.getIndex);
  router.get("/account", connectEnsureLogin.ensureLoggedIn(), user.getAccount);
  router.get("/login", public.getLogin);
  router.get("/login/failure", public.getLoginFailure);
  router.get("/logout", public.getLogout);
  router.get("/not-authorized", connectEnsureLogin.ensureLoggedIn(), user.getNotAuthorized);
};

exports.post = function(router, passport) {
  console.log('app.path.post()');
  router.post("/login", public.postLogin);
};
