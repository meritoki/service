
var connectEnsureLogin = require('connect-ensure-login');
var properties = require('../../../properties.js');
var public = require('../../a/public.js');
var oauth2 = require('../../oauth2.js');
var user = require('../../a/user.js');
var employee = require('../../a/employee.js');
var contractor = require('../../a/contractor.js');
var element = require('../../a/element.js');
var procedure = require('../../a/procedure.js')
var project = require('../../a/project.js');
var training = require('../../a/training.js')
var phone = require('../../phone.js');
var file = require('../../file.js');
var interface = require('../../a/interface.js');


exports.delete = function(router) {
  console.log('path.delete()');
  router.delete("/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), procedure.deleteIndex);
};

exports.get = function(router, passport) {
  console.log('path.get()');
  //public
  router.get("/", public.getIndex);
  if (!properties.maintenance.switch) {
    router.get("/login", public.getLogin);
    router.get("/login/failure", public.getLoginFailure);
    router.get("/hash/login", public.getHashLogin);
    router.get("/hash/login/failure", public.getHashLoginFailure);
    router.get("/logout", public.getLogout);
  } else {
    router.get("/login", public.getIndex);
    router.get("/login/failure", public.getIndex);
    router.get("/hash/login", public.getIndex);
    router.get("/hash/login/failure", public.getIndex);
    router.get("/logout", public.getIndex);
  }
  //interface
  router.get("/interface", connectEnsureLogin.ensureLoggedIn(), interface.getIndex);
  router.get("/not-authorized", connectEnsureLogin.ensureLoggedIn(), interface.getNotAuthorized);
  //user
  router.get("/user", connectEnsureLogin.ensureLoggedIn(), user.getIndex);
  router.get("/user/:idUser", connectEnsureLogin.ensureLoggedIn(), user.getIndex);
  router.get("/contractor", connectEnsureLogin.ensureLoggedIn(), contractor.getIndex);
  router.get("/contractor/:idContractor", connectEnsureLogin.ensureLoggedIn(), contractor.getIndex);
  router.get("/contractor/:idContractor/file", connectEnsureLogin.ensureLoggedIn(), contractor.getFile);
  router.get("/contractor/:idContractor/file/:idFile", connectEnsureLogin.ensureLoggedIn(), contractor.getFile);
  router.get("/contractor/:idContractor/procedure", connectEnsureLogin.ensureLoggedIn(), contractor.getProcedure);
  router.get("/contractor/:idContractor/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), contractor.getProcedure);
  router.get("/employee", connectEnsureLogin.ensureLoggedIn(), employee.getIndex);
  router.get("/employee/slideshow", connectEnsureLogin.ensureLoggedIn(), employee.getIndex);
  router.get("/employee/:idEmployee", connectEnsureLogin.ensureLoggedIn(), employee.getIndex);
  router.get("/employee/:idEmployee/element", connectEnsureLogin.ensureLoggedIn(), employee.getElement);
  router.get("/employee/:idEmployee/file", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  router.get("/employee/:idEmployee/file/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  router.get("/employee/:idEmployee/procedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/project", connectEnsureLogin.ensureLoggedIn(), employee.getProject);
  router.get("/employee/:idEmployee/project/:idProject", connectEnsureLogin.ensureLoggedIn(), employee.getProject);
  router.get("/employee/:idEmployee/properties", connectEnsureLogin.ensureLoggedIn(), employee.getProperties);
  router.get("/employee/:idEmployee/record", connectEnsureLogin.ensureLoggedIn(), employee.getRecord);
  router.get("/employee/:idEmployee/session", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/session/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/inspection", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/inspection/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/test", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/test/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.getProcedure);
  router.get("/employee/:idEmployee/training", connectEnsureLogin.ensureLoggedIn(), employee.getTraining);
  router.get("/employee/:idEmployee/video/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  router.get("/employee/:idEmployee/audio/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  router.get("/employee/:idEmployee/image/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  router.get("/employee/:idEmployee/document/:idFile", connectEnsureLogin.ensureLoggedIn(), employee.getFile);
  //file
  router.get("/file", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/file/:idFile", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/document", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/document/:idFile", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/image", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/image/:idFile", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/video", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/video/:idFile", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/audio", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  router.get("/audio/:idFile", connectEnsureLogin.ensureLoggedIn(), file.getIndex);
  //procedure
  router.get("/procedure", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/session", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/session/:idProcedure", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/test", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/test/:idProcedure", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/inspection", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  router.get("/inspection/:idProcedure", connectEnsureLogin.ensureLoggedIn(), procedure.getIndex);
  //project
  router.get("/project", connectEnsureLogin.ensureLoggedIn(), project.getIndex);
  router.get("/project/:idProject", connectEnsureLogin.ensureLoggedIn(), project.getIndex);
  router.get("/project/:idProject/building", connectEnsureLogin.ensureLoggedIn(), project.getBuilding);
  router.get("/project/:idProject/building/:idBuilding", connectEnsureLogin.ensureLoggedIn(), project.getBuilding);
  router.get("/project/:idProject/element", connectEnsureLogin.ensureLoggedIn(), project.getElement);
  router.get("/project/:idProject/element/:idElement", connectEnsureLogin.ensureLoggedIn(), project.getElement);
  router.get("/project/:idProject/employee", connectEnsureLogin.ensureLoggedIn(), project.getEmployee);
  router.get("/project/:idProject/employee/:idEmployee", connectEnsureLogin.ensureLoggedIn(), project.getEmployee);
  router.get("/project/:idProject/inspection", connectEnsureLogin.ensureLoggedIn(), project.getProcedure);
  router.get("/project/:idProject/inspection/:idProcedure", connectEnsureLogin.ensureLoggedIn(), project.getProcedure);
  router.get("/project/:idProject/procedure", connectEnsureLogin.ensureLoggedIn(), project.getProcedure);
  router.get("/project/:idProject/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), project.getProcedure);
  //element
  router.get("/element", connectEnsureLogin.ensureLoggedIn(), element.getIndex);
  router.get("/element/:idElement", connectEnsureLogin.ensureLoggedIn(), element.getIndex);

  //training
  router.get("/training", connectEnsureLogin.ensureLoggedIn(), training.getIndex);
  router.get("/training/:idTraining", connectEnsureLogin.ensureLoggedIn(), training.getIndex);
  router.get("/training/:idTraining/resource", connectEnsureLogin.ensureLoggedIn(), training.getResource);
  router.get("/training/:idTraining/resource/:idResource", connectEnsureLogin.ensureLoggedIn(), training.getResource);
  router.get("/training/:idTraining/record", connectEnsureLogin.ensureLoggedIn(), training.getRecord);
  router.get("/queue", connectEnsureLogin.ensureLoggedIn(), training.getQueue);
  router.get("/queue/:idQueue", connectEnsureLogin.ensureLoggedIn(), training.getQueue);
  // router.get("/training/:idTraining/record/:idRecord", connectEnsureLogin.ensureLoggedIn(), training.getRecord);
  // router.get("/phone",connectEnsureLogin.ensureLoggedIn(), phone.getIndex);
  router.get("/parser", connectEnsureLogin.ensureLoggedIn(), function(req, res, next) {
    res.render('interface//parser', {
      title: 'PARSER'
    });

  });
};

exports.post = function(router, passport) {
  console.log('path.post()');
  router.post('/user/:idUser/file', connectEnsureLogin.ensureLoggedIn(), file.postIndex);
  router.post("/employee/:idEmployee/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.postProcedure); //* adds procedure to employee list of procedures for potential completion, used by employees
  router.post("/employee/:idEmployee/project/:idProject", connectEnsureLogin.ensureLoggedIn(), employee.postProject); //* adds project to employee list of projects for potential locality, used by employee
  // router.post("/employee/:idEmployee/project/:idProject/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), employee.postProjectProcedure);
  // router.post("/project/:idProject/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), project.postProcedure);
  router.post("/employee/:idEmployee/properties", connectEnsureLogin.ensureLoggedIn(), employee.postProperties);
  router.post("/employee/:idEmployee/training", connectEnsureLogin.ensureLoggedIn(), employee.postTraining);
  router.post("/login", public.postLogin);
  router.post("/procedure/:idProcedure", connectEnsureLogin.ensureLoggedIn(), procedure.postIndex);
  router.post("/procedure/:idProcedure/instruction/:idInstruction", connectEnsureLogin.ensureLoggedIn(), procedure.postInstruction);
  router.post("/procedure/:idProcedure/instruction/:idInstruction/comment", connectEnsureLogin.ensureLoggedIn(), procedure.postInstructionComment);
  // router.post("/queue/:idQueue/instruction/:idInstruction", connectEnsureLogin.ensureLoggedIn(), user.postQueueInstruction);
  router.post("/phone", connectEnsureLogin.ensureLoggedIn(), phone.postMessage);
};
