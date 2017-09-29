
var connectEnsureLogin = require('connect-ensure-login');
var properties = require('../../properties.js');
var public = require('../public.js');
var oauth2 = require('../oauth2.js');
var user = require('../user.js');
var phone = require('../phone.js');


exports.delete = function(router) {
  console.log('app.path.delete()');
  router.delete("/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.deleteProcedure);
};

exports.get = function(router, passport) {
  console.log('app.path.get()');
  router.get("/", public.getIndex);
  router.get("/account", connectEnsureLogin.ensureLoggedIn(), user.getAccount);
  // router.get("/audio", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/audio/:idFile", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/contractor", connectEnsureLogin.ensureLoggedIn(), contractor.getIndex);
  // router.get("/contractor/:idContractor", connectEnsureLogin.ensureLoggedIn(), contractor.getIndex);
  // router.get("/contractor/:idContractor/file", connectEnsureLogin.ensureLoggedIn(), contractor.getFile);
  // router.get("/contractor/:idContractor/file/:idFile", connectEnsureLogin.ensureLoggedIn(), contractor.getFile);
  // router.get("/contractor/:idContractor/procedure", connectEnsureLogin.ensureLoggedIn(), contractor.getProcedure);
  // router.get("/contractor/:idContractor/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), contractor.getProcedure);
  // router.get("/document", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/document/:idFile", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/element", connectEnsureLogin.ensureLoggedIn(), user.getElement);
  // router.get("/element/:idElement", connectEnsureLogin.ensureLoggedIn(), user.getElement);
  // router.get("/employee", connectEnsureLogin.ensureLoggedIn(), employee.getIndex);
  // router.get("/employee/slideshow", connectEnsureLogin.ensureLoggedIn(), employee.getIndex);
  // router.get("/employee/:idEmployee", connectEnsureLogin.ensureLoggedIn(), employee.getIndex);
  // router.get("/employee/:idEmployee/element", connectEnsureLogin.ensureLoggedIn(), employee.getElement);
  // router.get("/employee/:idEmployee/file", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  // router.get("/employee/:idEmployee/file/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  // router.get("/employee/:idEmployee/procedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/project", connectEnsureLogin.ensureLoggedIn(), employee.getProject);
  // router.get("/employee/:idEmployee/project/:idProject", connectEnsureLogin.ensureLoggedIn(), employee.getProject);
  // router.get("/employee/:idEmployee/project/:idProject/procedure", connectEnsureLogin.ensureLoggedIn(), employee.getProjectProcedure);
  // router.get("/employee/:idEmployee/project/:idProject/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProjectProcedure);
  // router.get("/employee/:idEmployee/properties", connectEnsureLogin.ensureLoggedIn(), employee.getProperties);
  // router.get("/employee/:idEmployee/record", connectEnsureLogin.ensureLoggedIn(), employee.getRecord);
  // router.get("/employee/:idEmployee/session", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/session/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/inspection", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/inspection/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/test", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/test/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/employee/:idEmployee/training", connectEnsureLogin.ensureLoggedIn(), employee.getTraining);
  // router.get("/employee/:idEmployee/video/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  // router.get("/employee/:idEmployee/audio/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  // router.get("/employee/:idEmployee/image/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  // router.get("/employee/:idEmployee/document/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  // router.get("/file", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/file/:idFile", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/file/:idFile/view", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/image", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/image/:idFile", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/inspection", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  // router.get("/inspection/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  if (!properties.maintenance.switch) {
    router.get("/login", public.getLogin);
    router.get("/login/failure", public.getLoginFailure);
    // router.get("/hash/login", public.getHashLogin);
    // router.get("/hash/login/failure", public.getHashLoginFailure);
    router.get("/logout", public.getLogout);
  } else {
    router.get("/login", public.getIndex);
    router.get("/login/failure", public.getIndex);
    router.get("/hash/login", public.getIndex);
    router.get("/hash/login/failure", public.getIndex);
    router.get("/logout", public.getIndex);
  }
  router.get("/not-authorized", connectEnsureLogin.ensureLoggedIn(), user.getNotAuthorized);
  router.get("/parser", connectEnsureLogin.ensureLoggedIn(), function(req, res, next) {
    res.render('account/parser', {
      title: 'PARSER'
    });

  });
  // router.get("/procedure", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/procedure", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/project", connectEnsureLogin.ensureLoggedIn(), user.getProject);
  // router.get("/project/:idProject", connectEnsureLogin.ensureLoggedIn(), user.getProject);
  // router.get("/project/:idProject/building", connectEnsureLogin.ensureLoggedIn(), user.getProjectBuilding);
  // router.get("/project/:idProject/building/:idBuilding", connectEnsureLogin.ensureLoggedIn(), user.getProjectBuilding);
  // router.get("/project/:idProject/element", connectEnsureLogin.ensureLoggedIn(), user.getProjectElement);
  // router.get("/project/:idProject/element/:idElement", connectEnsureLogin.ensureLoggedIn(), user.getProjectElement);
  // router.get("/project/:idProject/employee", connectEnsureLogin.ensureLoggedIn(), user.getProjectEmployee);
  // router.get("/project/:idProject/employee/:idEmployee", connectEnsureLogin.ensureLoggedIn(), user.getProjectEmployee);
  // router.get("/project/:idProject/inspection", connectEnsureLogin.ensureLoggedIn(), user.getProjectProcedure);
  // router.get("/project/:idProject/inspection/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.getProjectProcedure);
  // router.get("/project/:idProject/procedure", connectEnsureLogin.ensureLoggedIn(), user.getProjectProcedure);
  // router.get("/project/:idProject/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.getProjectProcedure);
  // router.get("/queue", connectEnsureLogin.ensureLoggedIn(), user.getQueue);
  // router.get("/queue/:idQueue", connectEnsureLogin.ensureLoggedIn(), user.getQueue);
  // router.get("/resource", connectEnsureLogin.ensureLoggedIn(), user.getResource);
  // router.get("/resource/:idResource", connectEnsureLogin.ensureLoggedIn(), user.getResource);
  // router.get("/record", connectEnsureLogin.ensureLoggedIn(), user.getRecord);
  // router.get("/record/:idRecord", connectEnsureLogin.ensureLoggedIn(), user.getRecord);
  // router.get("/session", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/session/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/test", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/test/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.getProcedure);
  // router.get("/training", connectEnsureLogin.ensureLoggedIn(), user.getTraining);
  // router.get("/video", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/video/:idFile", connectEnsureLogin.ensureLoggedIn(), user.getFile);
  // router.get("/phone",connectEnsureLogin.ensureLoggedIn(), phone.getIndex);
};

exports.post = function(router, passport) {
  console.log('app.path.post()');
  // router.post('/user/:idUser/file', connectEnsureLogin.ensureLoggedIn(), file.postIndex);
  router.post("/login", public.postLogin);
  // router.post("/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), user.postProcedure);
  // router.post("/procedure/:idProcedure/instruction/:idInstruction", connectEnsureLogin.ensureLoggedIn(), user.postProcedureInstruction);
  // router.post("/procedure/:idProcedure/instruction/:idInstruction/comment", connectEnsureLogin.ensureLoggedIn(), user.postProcedureInstructionComment);
  // router.post("/queue/:idQueue/instruction/:idInstruction", connectEnsureLogin.ensureLoggedIn(), user.postQueueInstruction);
  // router.post("/phone", connectEnsureLogin.ensureLoggedIn(), phone.postMessage);
};
