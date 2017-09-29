var connectEnsureLogin = require('connect-ensure-login');
var properties = require('../../../properties.js');
var public = require('../../a/public.js');
var oauth2 = require('../../oauth2.js');
var user = require('../../a/user.js');
var employee = require('../../a/employee.js');
var contractor = require('../../a/contractor.js');
var phone = require('../../phone.js');
var file = require('../../file.js');

exports.delete = function(router) {
  console.log('service.a.path.delete()');
  // router.delete("/api/procedure/:idProcedure", user.deleteProcedure);
};

///object centric, implicit user



//user centric
//user -> object

///user/:idUser/
///user/:idUser/
///user/:idUser/

///employee/:idEmployee/




exports.get = function(router, passport) {
  console.log('service.a.path.get()');
  router.get('/api/dialog/authorize', oauth2.authorization);
  router.get('/api/employee', passport.authenticate('bearer', {
    session: false
  }), employee.getIndex);
  router.get('/api/employee/:idEmployee', passport.authenticate('bearer', {
    session: false
  }), employee.getIndex);
  router.get('/api/element', passport.authenticate('bearer', {
    session: false
  }), user.getElement);
  router.get('/api/element/:idElement', passport.authenticate('bearer', {
    session: false
  }), user.getElement);
  router.get('/api/employee/:idEmployee/element', passport.authenticate('bearer', {
    session: false
  }), employee.getElement);
  router.get('/api/employee/:idEmployee/element/:idElement', passport.authenticate('bearer', {
    session: false
  }), employee.getElement);
  router.get('/api/employee/:idEmployee/file', passport.authenticate('bearer', {
    session: false
  }), employee.getFile);
  router.get('/api/employee/:idEmployee/file/:idFile', passport.authenticate('bearer', {
    session: false
  }), employee.getFile);
  router.get('/api/employee/:idEmployee/procedure', passport.authenticate('bearer', {
    session: false
  }), employee.getProcedure);
  router.get('/api/employee/:idEmployee/procedure/:idProcedure', passport.authenticate('bearer', {
    session: false
  }), employee.getProcedure);
  router.get("/api/file", passport.authenticate('bearer', {
    session: false
  }), user.getFile);
  router.get("/api/file/:idFile", passport.authenticate('bearer', {
    session: false
  }), user.getFile);
  router.get("/api/login", public.getAPILogin);
  router.get("/api/login/failure", public.getAPILoginFailure);
  router.get("/api/logout", public.getLogout);
};

exports.post = function(router, passport) {
  console.log('service.a.path.post()');
  router.post('/api/dialog/authorize/decision', oauth2.decision);
  router.post('/api/oauth/token', oauth2.token);
  router.post("/api/employee/:idEmployee/procedure/:idProcedure", passport.authenticate('bearer', {
    session: false
  }), employee.postProcedure);
  router.post("/api/procedure/:idProcedure/instruction/:idInstruction", passport.authenticate('bearer', {
    session: false
  }), user.postProcedureInstruction);
  router.post('/api/file', passport.authenticate('bearer', {
    session: false
  }), file.postIndex);
  router.post("/api/login", public.postAPILogin);
  router.post("/api/employee/:idEmployee/properties", employee.postProperties);
};
