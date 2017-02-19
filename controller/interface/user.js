/*
 * Name: User.js
 * Date: 2015-07-08
 * Author: Joaquin Osvaldo Rodriguez
 */
var relational = require('../../model/relational.js');
var properties = require('../properties.js');
var fs = require('fs');
var path = require('path');
var bcrypt = require('bcryptjs');
//var Browser = require("zombie");
//var assert = require("assert");
/*
 * Function returns JSON formatted menu by the role name of a user.
 */
var getMenu = function(role) {
  var m = {};
  if (role.indexOf(",") > -1) {
    m = getMenu(role.split(",")[0]);
  } else {
    if (('general-manager').indexOf(role) > -1) {
      m = {
        'ACCOUNT': '/account',
        'PROJECTS': '/project',
        'EMPLOYEES': '/employee',
        'PROCEDURES': '/procedure',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'RECORD': '/record',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (('quality-manager,training-manager,safety-manager').indexOf(role) > -1) {
      m = {
        'ACCOUNT': '/account',
        'PROJECTS': '/project',
        'EMPLOYEES': '/employee',
        'PROCEDURES': '/procedure',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (role === 'supervisor') {
      m = {
        'HOME': '/account',
        'PROJECTS': '/project',
        'EMPLOYEES': '/employee',
        'PROCEDURES': '/procedure',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (role === 'worker') {
      m = {
        'ACCOUNT': '/account',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (role === 'assessor') {
      m = {
        'ACCOUNT': '/account',
        'EMPLOYEES': '/employee',
        'PROJECTS': '/project',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else {
      m = {
        'HOME': '/account',
        'LOGIN': '/login'
      }
    }
  }
  return m;
};

var getUserMenu = function(idEmployee, role) {
  var m = {};
  if (role.indexOf(",") > -1) {
    m = getUserMenu(idEmployee, role.split(",")[0]);
  } else {
    if (('general-manager').indexOf(role) > -1) {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'FILE': '/employee/' + idEmployee + '/file',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (('quality-manager,training-manager,safety-manager').indexOf(role) > -1) {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'supervisor') {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'worker') {
      m = {
        'ELEMENTS': '/employee/' + idEmployee + '/element',
        'RECORDS': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'assessor') {
      m = {
        'PROJECTS': '/employee/' + idEmployee + '/project',
        'FILES': '/employee/' + idEmployee + '/file',
        'RECORDS': '/employee/' + idEmployee + '/record'
      }
    }
  }
  return m;
};

var getTrainingMenu = function(idEmployee) {
  var m = {
    'ELEMENT': '/employee/' + idEmployee + '/element',
    'RESOURCE': '/employee/' + idEmployee + '/resource',
    'RECORD': '/employee/' + idEmployee + '/record'
  }
  return m;
};

var getResourceMenu = function(idEmployee) {
  var m = {
    'ELEMENT': '/employee/' + idEmployee + '/element',
    'TRAINING': '/employee/' + idEmployee + '/training',
    'RECORD': '/employee/' + idEmployee + '/record'
  }
  return m;
};

var getRecordMenu = function(idEmployee) {
  var m = {
    'ELEMENT': '/employee/' + idEmployee + '/element',
    'TRAINING': '/employee/' + idEmployee + '/training',
    'RESOURCE': '/employee/' + idEmployee + '/resource'
  }
  return m;
};

var getElementMenu = function(idEmployee) {
  var m = {
    'TRAINING': '/employee/' + idEmployee + '/training',
    'RESOURCE': '/employee/' + idEmployee + '/resource',
    'RECORD': '/employee/' + idEmployee + '/record'
  }
  return m;
};

/*
 * Function returns URL with FQDN for host, prefixed by secure http if applicable.
 */
var getURL = function() {
  var url = 'https://';
  if (!properties.https && !req.secure) {
    url = 'http://';
  }
  url = url + properties.host
  return url;
};


var instantiateProcedureList = function(pList) {
  // console.log('instantiateProcedureList');
  if (pList !== null) {
    var p;
    for (i = 0; i < pList.length; i++) {
      p = pList[i];
      p = instantiateProcedureDate(p);
      p = instantiateProcedurePermission(p.permission, p);
      p = instantiateProcedureType(p.type, p);
    }
  }
  return pList;
}

var instantiateProjectList = function(pList) {
  // console.log('instantiateProjectList');
  if (pList !== null) {
    var p;
    for (i = 0; i < pList.length; i++) {
      p = pList[i];
      p = instantiateProjectDate(p);
    }
  }
  return pList;
}

var instantiateProcedurePermission = function(permission, p) {
  // console.log('instantiateProcedurePermission ' + permission + ' ' + p);
  if (p !== null) {
    if (p.permission === 3) {
      p.permissionLabel = 'execute';
      p.execute = 'permission';
      p.write = null;
      p.read = null;
      p.hidden = null;
    } else if (p.permission === 2) {
      p.permissionLabel = 'write';
      p.write = 'permission';
      p.read = null;
      p.execute = null;
      p.hidden = null;
    } else if (p.permission === 1) {
      p.permissionLabel = 'read';
      p.read = 'permission';
      p.write = null;
      p.execute = null;
      p.hidden = null;
    } else {
      p.permissionLabel = 'hidden';
      p.hidden = 'permission';
      p.write = null;
      p.execute = null;
      p.read = null;
    }
    var iList = p.instructionList || null;
    if (iList !== null) {
      var instruction;
      for (j = 0; j < iList.length; j++) {
        instruction = iList[j];
        instruction = instantiateInstructionPermission(p.permission, instruction);
      }

    }
  }
  return p;
}

var instantiateProcedureType = function(type, p) {
  // console.log('procedure.instantiateProcedureType ' + type + ' ' + p);
  if (p !== null) {
    if (type !== null && type !== 'null') {
      if (type === 'test') {
        p.test = 'type';
        p.inspection = null;
        p.hidden = null;
        p.session = null;

      } else if (type === 'session') {
        p.session = 'type';
        p.test = null;
        p.inspection = null;
        p.hidden = null;

      } else if (type === 'inspection') {
        p.inspection = 'type';
        p.test = null;
        p.hidden = null;
        p.session = null;

      } else {
        p.hidden = 'type';
        p.test = 'null';
        p.inspection = null;
        p.session = null;
      }
    }
  }
  return p;
}

var instantiateInstructionPermission = function(permission, instruction) {
  // console.log('procedure.instantiateInstructionPermission ' + permission + ' ' + instruction);
  if (permission + '' === 3 + '') {
    instruction.permissionLabel = 'execute';
    instruction.execute = 'permission';
    instruction.write = null;
    instruction.read = null;
    instruction.hidden = null;
  } else if (permission + '' === 2 + '') {
    instruction.permissionLabel = 'write';
    instruction.write = 'permission';
    instruction.read = null;
    instruction.execute = null;
    instruction.hidden = null;
  } else if (permission + '' === 1 + '') {
    instruction.permissionLabel = 'read';
    instruction.read = 'permission';
    instruction.write = null;
    instruction.execute = null;
    instruction.hidden = null;
  } else {
    instruction.permissionLabel = 'hidden';
    instruction.hidden = 'permission';
    instruction.write = null;
    instruction.execute = null;
    instruction.read = null;
  }
  return instruction;
}

var instantiateProcedureDate = function(p) {
  // console.log('instantiateProcedureDate');
  if (p.label === 'null') {
    p.label = null;
  }
  if (p.createDate === '0000-00-00 00:00:00' || p.createDate === null) {
    p.createDateLabel = null;
  } else {
    var d = new Date(p.createDate);
    p.createDateLabel = 'Created ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  if (p.activityDate === '0000-00-00 00:00:00' || p.activityDate === null) {
    p.activityDateLabel = null;
  } else {
    var d = new Date(p.activityDate);
    p.activityDateLabel = 'Activity ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  if (p.completeDate === '0000-00-00 00:00:00' || p.completeDate === null) {
    p.completeDateLabel = null;
  } else {
    var d = new Date(p.completeDate);
    p.completeDateLabel = 'Completed ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  return p;
}

var instantiateProjectDate = function(p) {
  // console.log('instantiateProjectDate');
  if (p.createDate === '0000-00-00 00:00:00' || p.createDate === null) {
    p.createDateLabel = null;
  } else {
    var d = new Date(p.createDate);
    p.createDateLabel = 'Created ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  if (p.startDate === '0000-00-00 00:00:00' || p.startDate === null) {
    p.startDateLabel = null;
  } else {
    var d = new Date(p.startDate);
    p.startDateLabel = 'Start ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  if (p.activityDate === '0000-00-00 00:00:00' || p.activityDate === null) {
    p.activityDateLabel = null;
  } else {
    var d = new Date(p.activityDate);
    p.activityDateLabel = 'Activity ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  if (p.completeDate === '0000-00-00 00:00:00' || p.completeDate === null) {
    p.completeDateLabel = null;
  } else {
    var d = new Date(p.completeDate);
    p.completeDateLabel = 'Completed ' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
  }
  return p;
}



var formatAMPM = function(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

var formatDate = function(date) {
  var d = new Date(date);
  return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' at ' + formatAMPM(d);
};


exports.deleteProcedure = function(req, res, next) {
  console.log('deleteProcedure');
  //    var user = req.user;
  //    var role = user.role;
  var idProcedure = req.params.idProcedure;
  //    if (isAuthorized(role, "general-manager")) {
  relational.getProcedure(idProcedure, function(error, p) {
    if (error) {
      res.end('{"status":500}');

    } else {
      if (p !== null) {
        relational.removeProcedure(idProcedure, function(error, result) {
          res.end('{"status":200,"idProcedure":' + idProcedure + '}');
        });
      } else {
        res.end('{"status":500,"idProcedure":' + idProcedure + '}');
      }
    }
  });
};

exports.getAccount = function(req, res, next) {
  console.log("user.getAccount");
  var user = req.user;
  var idUser = user.idUser;
  var role = user.role;
  var menu = getMenu(role);
  if (isAuthorized(role, "general-manager,training-manager,safety-manager,quality-manager,supervisor,worker")) {
    relational.getUserEmployee(idUser, function(error, employee) {
      if (error) throw error;
      relational.getUserFileProfileImage(idUser, function(error, file) {
        fs.readFile('./model' + file.path + file.name + '.' + file.extension, function(error, image) {
          if (error) {
            res.render('account', {
              title: 'EMPLOYEE ACCOUNT',
              employee: employee,
              menu: menu,
              user: user
            });
          } else {
            var base64Image = image.toString('base64');
            res.render('account', {
              title: 'EMPLOYEE ACCOUNT',
              employee: employee,
              image: base64Image,
              menu: menu,
              user: user
            });
          }
        });
      });
    });
  } else if (isAuthorized(role, "assessor")) {
    relational.getUserContractor(idUser, function(error, contractor) {
      if (error) throw error;
      res.render('account', {
        title: 'Contractor Account',
        contractor: contractor,
        menu: menu,
        user: user
      });
    });
  }
};

exports.getElement = function(req, res, next) {
  var api = ((req.url).indexOf("api") > -1) ? true : false;
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  var idElement = req.params.idElement;
  var idUser = req.params.idUser || user.idUser;
  var  contentMenu = getElementMenu(user.idEmployee);
  if (isAuthorized(role, "general-manager,quality-manager,safety-manager,supervisor,mentor,worker,assessor")) {
    relational.getElement(idElement, function(error, element) {
      if (error) {
        relational.getElementList(function(error, elementList) {
          if (error) throw error;
          if (api) {
            res.end('{"status":200,"elementList":' + JSON.stringify(elementList) + "}");
          } else {
            //                    console.log(elementList);
            var action;
            for (var i = 0; i < elementList.length; i++) {
              action = elementList[i].action;
              elementList[i].actionList = action.split(",");

            }
            res.render('account/element', {
              title: 'ELEMENTS',
              elementList: elementList,
              contentMenu:contentMenu,
              menu: menu
            });
          }
        });
      } else {
        console.log(element);
        relational.getElementProcedureList(element.procedureList, function(error, pList) {
          if (error) {
            if (api) {
              res.end('{"status":200,"element":' + JSON.stringify(element) + "}");
            } else {
              res.render('account/element', {
                title: 'ELEMENT',
                element: element,
                menu: menu
              });
            }
          } else {
            if (api) {
              element.procedureList = pList;
              res.end('{"status":200,"element":' + JSON.stringify(element) + "}");
            } else {
              res.render('account/element', {
                title: 'ELEMENT',
                element: element,
                procedureList: pList,
                menu: menu
              });
            }
          }
        });
      }
    });
  } else {
    res.redirect("/not-authorized");
  }
};

exports.getFile = function(req, res, next) {
  console.log("user.getFile " + req.url);
  var view = ((req.url).indexOf("view") > -1) ? true : false;
  var type = ((req.url).indexOf("image") > -1) ? "image" : (((req.url).indexOf("document") > -1) ? "document" : (((req.url).indexOf("video") > -1) ? "video" : ((req.url).indexOf("audio") > -1) ? "audio" : undefined));
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  var idFile = req.params.idFile;
  var idContractor = req.params.idContractor;
  var idEmployee = req.params.idEmployee;
  var idUser = user.idUser;
  if (isAuthorized(role, "general-manager,quality-manager,safety-manager,supervisor,mentor,worker,assessor")) {
    relational.getUserFile(idUser, idFile, type, function(error, file) {
      if (error) {
        relational.getUserFileList(idUser, type, function(error, fileList) {
          if (error) throw error;
          res.render('account/file', {
            title: 'FILES',
            fileList: fileList,
            type: type,
            menu: menu
          });
        });
      } else {
        if (view) {
          if (file.extension === 'pdf') {
            fs.readFile('./model' + file.path + file.name + '.' + file.extension, function(error, data) {
              res.contentType("application/pdf");
              res.send(data);
            });
          }
        } else {
          var p = '../../model/' + file.path + '/' + file.name + '.' + file.extension;
          res.download(path.resolve(__dirname, '' + p));
        }
      }
    });
  } else {
    res.redirect("/not-authorized");
  }
};

exports.getIndex = function(req, res, next) {
  console.log("user.getIndex");
  var api = ((req.url).indexOf("api") > -1) ? true : false;
  var slideshow = ((req.url).indexOf("slideshow") > -1) ? true : false;
  var statisticRole = 'supervisor'; //req.headers.role;
  var user = req.user;
  var role = typeof user !== "undefined" ? user.role : '';
  var url = getURL();
  var menu = getMenu(role);
  var idUserA = typeof user !== "undefined" ? user.idUser : null;
  var idUserB = idUserA;
  //    req.params.idUser;

  var employee = req.params.employee;
  var employeeList = req.params.employeeList;
  var contractor = req.params.contractor;
  var contractorList = req.params.contractorList;

  if (isAuthorized(role, "general-manager")) {
    if (typeof employee !== "undefined") {
      if (api) {
        res.end('{"status":200,"employee":' + JSON.stringify(employee) + "}");
      } else {
        relational.getUserFileProfileImage(employee.idUser, function(error, file) {
          if (error) throw error;
          fs.readFile('./model' + file.path + file.name + '.' + file.extension, function(error, image) {
            if (error) {
              fs.readFile('./model/media/merit-builders/image/employee/0/profile.jpg', function(error, image) {
                var userMenu = getUserMenu(employee.idEmployee, role);
                if (error) {

                  res.render('account/employee', {
                    title: 'EMPLOYEE',
                    employee: employee,
                    employeeMenu: userMenu,
                    menu: menu,
                    user: user
                  });

                } else {
                  var base64Image = image.toString('base64');
                  res.render('account/employee', {
                    title: 'EMPLOYEE',
                    employee: employee,
                    employeeMenu: userMenu,
                    image: base64Image,
                    menu: menu,
                    user: user
                  });
                }
              });
            } else {
              var base64Image = image.toString('base64');
              res.render('account/employee', {
                title: 'EMPLOYEE',
                employee: employee,
                image: base64Image,
                employeeMenu: userMenu,
                menu: menu,
                user: user
              });
            }
          });
        });

      }
    } else if (typeof contractor !== "undefined") {
      relational.getUserFileProfileImage(contractor.idUser, function(error, file) {
        if (error) throw error;
        fs.readFile('./model' + file.path + file.name + '.' + file.extension, function(error, image) {
          if (error) {
            fs.readFile('./model/media/merit-builders/image/contractor/0/profile.jpg', function(error, image) {
              if (error) {
                res.render('account/employee', {
                  title: 'CONTRACTOR',
                  employee: employee,
                  menu: menu,
                  user: user
                });
              } else {
                var base64Image = image.toString('base64');
                res.render('account/employee', {
                  title: 'EMPLOYEE',
                  employee: employee,
                  image: base64Image,
                  menu: menu,
                  user: user
                });
              }
            });
          } else {
            var base64Image = image.toString('base64');
            res.render('account/employee', {
              title: 'EMPLOYEE',
              employee: employee,
              image: base64Image,
              menu: menu,
              user: user
            });
          }
        });
      });
    } else if (typeof employeeList !== "undefined") {
      if (api) {
        res.end('{"status":200,"employeeList":' + JSON.stringify(employeeList) + "}");
      } else if (slideshow) {
        res.render('account/slideshow', {
          title: 'EMPLOYEES',
          employeeList: employeeList,
          url: url,
          menu: menu,
          generalManager: isAuthorized(role, "general-manager"),
          assessor: isAuthorized(role, "assessor"),
          user: user
        })
      } else {
        idUserB = idUserA;
        relational.getUserProcedureList(idUserA, idUserB, null, 0, function(error, procedureList) {
          if (error) throw error;
          relational.getUserProjectList(idUserA, idUserB, function(error, projectList) {
            if (error) throw error;
            res.render('account/employee', {
              title: 'EMPLOYEES',
              employeeList: employeeList,
              procedureList: procedureList,
              projectList: projectList,
              url: url,
              menu: menu,
              generalManager: isAuthorized(role, "general-manager"),
              assessor: isAuthorized(role, "assessor"),
              user: user
            })
          });
        });
      }
    } else if (typeof contractorList !== "undefined") {
      if (api) {
        res.end('{"status":200,"contractorList":' + JSON.stringify(contractorList) + "}");
      } else {
        idUserB = idUserA;
        relational.getUserProcedureList(idUserA, idUserB, null, 0, function(error, procedureList) {
          if (error) throw error;
          relational.getUserProjectList(idUserA, idUserB, function(error, projectList) {
            if (error) throw error;
            res.render('account/contractor', {
              title: 'EMPLOYEES',
              employeeList: employeeList,
              procedureList: procedureList,
              projectList: projectList,
              url: url,
              menu: menu,
              generalManager: isAuthorized(role, "general-manager"),
              assessor: isAuthorized(role, "assessor"),
              user: user
            })
          });
        });
      }
    }
  } else if (isAuthorized(role, "supervisor,training-manager,safety-manager,quality-manager,assessor")) {
    if (typeof employeeList !== "undefined") {
      res.render('account/employee', {
        title: 'EMPLOYEES',
        employeeList: employeeList,
        url: url,
        menu: menu,
        generalManager: false,
        assessor: isAuthorized(role, "assessor"),
        user: user
      })
    } else if (typeof contractorList !== "undefined") {
      res.render('account/employee', {
        title: 'EMPLOYEES',
        employeeList: employeeList,
        url: url,
        menu: menu,
        generalManager: isAuthorized(role, "general-manager"),
        assessor: isAuthorized(role, "assessor"),
        user: user
      })
    } else {
      res.redirect("/not-authorized");
    }
  } else {
    res.redirect("/not-authorized");
  }
};

exports.getNotAuthorized = function(req, res, next) {
  var user = req.user;
  var role = user.role;
  var menu = getMenu(role);
  res.render('account/not-authorized', {
    title: 'NOT AUTHORIZED',
    menu: menu
  });
};

exports.getProcedure = function(req, res, next) {
  var api = ((req.url).indexOf("api") > -1) ? true : false;
  var type = ((req.url).indexOf("session") > -1) ? "session" : (((req.url).indexOf("inspection") > -1) ? "inspection" : (((req.url).indexOf("test") > -1) ? "test" : null));
  var url = getURL();
  var user = req.user;
  var role = typeof user !== "undefined" ? user.role : '';
  var menu = getMenu(role);
  var idUserA = typeof user !== "undefined" ? user.idUser : '';
  var idUserB = req.params.idUser
  if (typeof idUserB === "undefined") {
    idUserB = idUserA;
  }
  var idProcedure = req.params.idProcedure;
  var idEmployee = req.params.idEmployee; //represents self or other user
  if (isAuthorized(role, "general-manager,training-manager,supervisor,quality-manager,safety-manager")) {
    if (isAuthorized(role, "general-manager")) {
      if (typeof idUserB !== "undefined") {
        idUserA = idUserB;
      }
    }
    relational.getUserProcedure(idUserA, idUserB, idProcedure, function(error, procedure) {
      if (error) {
        if (api) {
          relational.getUserProcedureList(idUserA, idUserB, type, 3, function(error, procedureList) {
            if (error) throw error;
            procedureList = instantiateProcedureList(procedureList);
            res.end('{"status":200,"procedureList":' + JSON.stringify(procedureList) + "}");
          });
        } else {
          relational.getUserProcedureList(idUserA, idUserB, type, null, function(error, procedureList) {
            if (error) throw error;
            procedureList = instantiateProcedureList(procedureList);
            res.render('account/procedure', {
              title: 'EMPLOYEE PROCEDURES',
              procedureList: procedureList,
              idEmployee: idEmployee,
              menu: menu,
              generalManager: isAuthorized(role, "general-manager"),
              url: url
            });
          });
        }
      } else {
        relational.getProcedureInstructionElementList(procedure.idProcedure, function(error, elementList) {
          if (error) throw error;
          var e = null;
          var instruction = null;
          for (var i = 0; i < elementList.length; i++) {
            e = elementList[i];
            for (var j = 0; j < procedure.instructionList.length; j++) {
              instruction = procedure.instructionList[j];
              instruction.elementList = [];
              if (e.idInstruction === instruction.idInstruction) {
                instruction.elementList.push(e);
              }
            }
          }
          relational.getUserFileProfileImage(procedure.idUser, function(error, file) {
            if (error) throw error;
            fs.readFile('./model' + file.path + file.name + '.' + file.extension, function(error, image) {
              if (error) {
                if (api) {
                  res.end('{"status":200,"procedure":' + JSON.stringify(procedure) + "}");
                } else {
                  res.render('account/procedure', {
                    title: 'EMPLOYEE PROCEDURE',
                    idEmployee: idEmployee,
                    procedure: procedure,
                    url: url,
                    menu: menu
                  });
                }
              } else {
                image = image.toString('base64');
                if (api) {
                  res.end('{"status":200,"procedure":' + JSON.stringify(procedure) + ',"image":' + JSON.stringify(image) + "}");
                } else {
                  res.render('account/procedure', {
                    title: 'EMPLOYEE PROCEDURE',
                    idEmployee: idEmployee,
                    image: image,
                    procedure: procedure,
                    url: url,
                    menu: menu
                  });
                }
              }
            });
          });
        });
      }
    });
  } else {
    res.redirect('/not-authorized');
  }
};



exports.getProject = function(req, res, next) {
  console.log('user.getProject');
  var type = ((req.url).indexOf("session") > -1) ? "session" : (((req.url).indexOf("inspection") > -1) ? "inspection" : (((req.url).indexOf("test") > -1) ? "test" : null));
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  var idUser = req.params.idUser;
  var idProject = req.params.idProject;
  var idEmployee = req.params.idEmployee;
  var r;
  if (idUser == undefined) {
    idUser = user.idUser;
  }
  if (isAuthorized(role, "general-manager,supervisor,training-manager,safety-manager,quality-manager,assessor")) {
    relational.getUserProject(user.idUser, idUser, idProject, function(error, project) {
      if (error) {
        relational.getUserProjectList(user.idUser, idUser, function(error, projectList) {
          if (error) {
            projectList = undefined;
          }
          projectList = instantiateProjectList(projectList);
          relational.getEmployeeList("quality-manager", function(error, employeeList) {
            if (error) throw error;
            relational.getUserProcedureList(user.idUser, idUser, type, 0, function(error, procedureList) {
              if (error) {
                procedureList = undefined;
              }

              res.render('account/project', {
                title: 'PROJECT',
                projectList: projectList,
                procedureList: procedureList,
                employeeList: employeeList,
                url: url,
                menu: menu,
                generalManager: isAuthorized(role, "general-manager"),
                assessor: isAuthorized(role, "assessor")
              });
            });
          });
        });
      } else {
        res.render('account/project', {
          title: 'Project',
          project: project,
          menu: menu,
          generalManager: isAuthorized(role, "general-manager"),
          assessor: isAuthorized(role, "assessor")
        });
      }
    });

  } else {
    res.redirect("/not-authorized");
  }
};

exports.getProjectBuilding = function(req, res, next) {
  var idBuilding = req.params.idBuilding;
  var idProject = req.params.idProject;
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  relational.getProjectBuilding(idBuilding, function(error, building) {
    if (error) {
      relational.getProjectBuildingList(idProject, function(error, buildingList) {
        if (error) throw error;
        res.render('account/building', {
          title: 'UNITS',
          buildingList: buildingList,
          menu: menu
        });
      });
    } else {
      res.render('account/building', {
        title: 'UNIT',
        building: building,
        menu: menu
      });
    }
  });
};

exports.getProjectElement = function(req, res, next) {
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  var idBuilding = req.params.idBuilding;
  var idProject = req.params.idProject;
  relational.getProjectBuilding(idBuilding, function(error, building) {
    if (error) {
      relational.getProjectBuilding(idProject, function(error, buildingList) {
        if (error) throw error;
        res.render('account/building', {
          title: 'UNITS',
          buildingList: buildingList,
          menu: menu
        });
      });
    } else {
      res.render('account/building', {
        title: 'UNIT',
        building: building,
        menu: menu
      });
    }
  });
};

exports.getProjectEmployee = function(req, res, next) {
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  var idBuilding = req.params.idBuilding;
  var idProject = req.params.idProject;
  relational.getProjectBuilding(idBuilding, function(error, building) {
    if (error) {
      relational.getProjectBuilding(idProject, function(error, buildingList) {
        if (error) throw error;
        res.render('account/building', {
          title: 'UNITS',
          buildingList: buildingList,
          menu: menu
        });
      });
    } else {
      res.render('account/building', {
        title: 'UNIT',
        building: building,
        menu: menu
      });
    }
  });
};

exports.getProjectProcedure = function(req, res, next) {
  var api = ((req.url).indexOf("api") > -1) ? true : false;
  var type = ((req.url).indexOf("session") > -1) ? "session" : (((req.url).indexOf("inspection") > -1) ? "inspection" : (((req.url).indexOf("test") > -1) ? "test" : null));
  var url = getURL();
  var user = req.user;
  var role = typeof user !== "undefined" ? user.role : '';
  var menu = getMenu(role);
  var idUserA = typeof user !== "undefined" ? user.idUser : '';
  var idUserB = req.params.idUser
  if (typeof idUserB === "undefined") {
    idUserB = idUserA;
  }
  var idProject = req.params.idProject;
  var idProcedure = req.params.idProcedure;
  if (isAuthorized(role, "general-manager,supervisor,training-manager,safety-manager,quality-manager,assessor")) {
    if (isAuthorized(role, "general-manager,quality-manager")) {
      if (typeof idUserB !== "undefined") {
        idUserA = idUserB;
      }
    }
    relational.getUserProcedure(idUserA, idUserB, idProcedure, function(error, procedure) {
      if (error) {
        console.log(error);
        relational.getProjectProcedureList(idProject, function(error, procedureList) {
          if (error) throw error;
          procedureList = instantiateProcedureList(procedureList);
          res.render('account/procedure', {
            title: 'PROJECT PROCEDURES',
            menu: menu,
            idProject: idProject,
            procedureList: procedureList
          });
        })
      } else {
        relational.getUserEmployee(idUserA, function(error, e) {
          res.render('account/procedure', {
            title: 'PROCEDURES',
            menu: menu,
            url: url,
            procedure: procedure,
            idProject: idProject,
            idEmployee: e.idEmployee
          });
        });
      }
    });
  } else {
    res.redirect('/not-authorized');
  }
};

exports.getProperties = function(req, res, next) {
  var url = getURL();
  var user = req.user;
  var role = user.role;
  var menu = getMenu(role);
  var idUser = req.params.idUser || user.idUser;
  if (isAuthorized(role, "general-manager")) {
    relational.getIDUser(idUser, function(err, user) {
      user.idEmployee = req.params.idEmployee;
      res.render('account/user/properties', {
        title: 'PROPERTIES',
        menu: menu,
        url: url,
        user: user
      });
    });
  } else if (isAuthorized(role, "supervisor,training-manager,safety-manager,quality-manager,supervisor,worker")) {
    if (req.params.idUser === user.idUser) {
      relational.getIDUser(idUser, function(err, user) {
        user.idEmployee = req.params.idEmployee;
        res.render('account/user/properties', {
          title: 'PROPERTIES',
          menu: menu,
          url: url,
          user: user
        });
      });
    } else {
      res.redirect("/not-authorized");
    }
  } else {
    res.redirect("/not-authorized");
  }
};

exports.getQueue = function(req, res, next) {
  var url = getURL();
  var user = req.user;
  var role = user.role;
  var menu = getMenu(role);
  var idUser = req.params.idUser || user.idUser;
  var idQueue = req.params.idQueue;
  if (isAuthorized(role, "general-manager,supervisor,training-manager,safety-manager,quality-manager,assessor")) {
    relational.getQueue(idQueue, function(error, queue) {
      if (error) {
        relational.getQueueList(function(error, queueList) {
          res.render('account/queue', {
            title: 'QUEUE',
            menu: menu,
            queueList: queueList
          });
        });
      } else {
        console.log(queue);
        res.render('account/queue', {
          title: 'QUEUE',
          menu: menu,
          queue: queue
        });
      }
    });
  }
};

exports.getRecord = function(req, res, next) {
  console.log("user.getRecord");
  var url = getURL();
  var user = req.user;
  var role = user.role;
  var menu = getMenu(role);
  var idUser = req.params.idUser || user.idUser;
  var contentMenu = getRecordMenu(user.idEmployee);

  if (isAuthorized(role, "general-manager")) {
    console.log("user.getRecord " + idUser);
    relational.getUserElementList(user.idUser, idUser, function(err, rList) {
      if (err) {
        throw err;
      } else {
        res.render('account/record', {
          title: 'RECORD',
          menu: menu,
          contentMenu:contentMenu,
          url: url,
          user: user,
          recordList: rList
        });
      }
    });
  } else {
    res.redirect("/not-authorized");
  }
};

exports.getResource = function(req, res, next) {
  var user = req.user;
  var role = user.role;
  var menu = getMenu(role);
  var idResource = req.params.idResource;
  var contentMenu = getResourceMenu(user.idEmployee);
  if (idResource !== undefined && idResource !== 'undefined') {
    if (idResource === '1') {
      res.render('account/resource/metal-building-institute', {
        title: 'METAL BUILDING INSTITUTE',
        menu: menu,
        contentMenu: contentMenu
      });
    } else if (idResource === '2') {
      res.render('account/resource/merit-builders-recorder', {
        title: 'RECORDER',
        menu: menu,
        contentMenu: contentMenu
      });
    }
  } else {
    res.render('account/resource', {
      title: 'RESOURCE',
      menu: menu,
      contentMenu: contentMenu
    });
  }



  //
  //    browser = new Browser()
  //    browser.visit("http://test.mbidvd.org/onlinetesting/testtaking/login.cfm?DBID=MBI", function () {
  //        // fill in login field
  //        browser.fill('input[name=UserID]', 'GAlas');
  //        // fill in password field
  //        browser.fill('input[name=Password]', 'A3321');
  //        // submit the form
  //        browser.document.forms[0].submit();
  //        // wait for new page to be loaded then fire callback function
  //        browser.wait().then(function () {
  //            console.log('Form submitted ok!');
  //            // the resulting page will be displayed in your default browser
  //            browser.viewInBrowser();
  //        })
  //    });
};

exports.getTraining = function(req, res, next) {
  console.log('user.getTraining');
  var user = req.user;
  var training = {};
  var paramIDUser = (typeof(req.params.idUser) !== undefined) ? req.params.idUser : null;
  var paramIDEmployee = (typeof(req.params.idEmployee) !== undefined) ? req.params.idEmployee : user.idEmployee;
  training.idEmployee = paramIDEmployee;
  training.url = getURL();

  var role = user.role;
  var menu = getMenu(role);
  var idUser = req.params.idUser || user.idUser;
  var contentMenu = getTrainingMenu(training.idEmployee);
  if (isAuthorized(role, "general-manager,supervisor,training-manager,safety-manager,quality-manager,supervisor,worker,assessor")) {
    relational.getUserLevel(idUser, function(error, level) {
      if (error) throw error;
      relational.getLevelList(function(error, levelList) {
        if (error) throw error;
        var nowDate = new Date();
        var startDate;
        var endDate;
        var endDateLabel = formatDate(endDate);
        var durationStart = 0;
        var durationEnd = 0;
        var l;
        for (i = 0; i < levelList.length; i++) {
          l = levelList[i];
          startDate = new Date(new Date(nowDate).setMonth(nowDate.getMonth() + durationStart));
          l.startDateLabel = formatDate(startDate);
          durationStart += l.duration
          durationEnd += l.duration;
          endDate = new Date(new Date(nowDate).setMonth(nowDate.getMonth() + durationEnd));
          l.endDateLabel = formatDate(endDate);
          // console.log(l.startDateLabel);
          // console.log(l.endDateLabel);
        }
        res.render('account/training', {
          title: 'TRAINING',
          training: training,
          menu: menu,
          contentMenu: contentMenu,
          level: level,
          levelList: levelList
        });
      });
    });
  }
};

//POST
exports.postEmployeeLevel = function(req, res, next) {
  console.log('user.postEmployeeLevel');
  var idEmployee = req.body.idEmployee;
  var idLevel = req.body.idLevel;


};

exports.postEmployeeProcedure = function(req, res, next) {
  console.log('user.postEmployeeProcedure');
  var user = req.user;
  var idProcedure = req.params.idProcedure;
  var idUserA = req.params.idUserA;
  var permissionA = req.params.permissionA;
  var ownerA = req.params.ownerA;
  var idUserB = req.params.idUserB; //idUser for Employee B, determined in employee.js
  var permissionB = req.params.permissionB;
  var ownerB = req.params.ownerB;
  var label = req.params.label;
  var p = req.body.procedure || null;
  var s = req.body.signature || null;
  console.log('p=' + (p !== null));
  console.log('s=' + (s !== null));
  console.log('user.postEmployeeProcedure idProcedure=' + idProcedure);
  console.log('user.postEmployeeProcedure idUserA=' + idUserA);
  console.log('user.postEmployeeProcedure ownerA=' + ownerA);
  console.log('user.postEmployeeProcedure permissionA=' + permissionA);
  console.log('user.postEmployeeProcedure idUserB=' + idUserB);
  console.log('user.postEmployeeProcedure ownerB=' + ownerB);
  console.log('user.postEmployeeProcedure permissionB=' + permissionB);
  console.log('user.postEmployeeProcedure label=' + label);

  if (idProcedure !== undefined && idProcedure !== "undefined") {
    if (('' + idProcedure).indexOf('-') === -1) {
      console.log('normal idProcedure');
      if (p !== null) {
        console.log('p=' + (p !== null));
        p = JSON.parse(p);
        relational.setProcedure(p.idUser, p, function(error) {
          if (error) {
            res.end('{"status":500}');
          } else {
            if (s !== null) {
              s = JSON.parse(s);
              relational.getUserProcedureSignature(s.employee.idUser, p.idProcedure, function(error, x) {
                if (error) {
                  res.end('{"status":500}');
                } else {
                  if (x !== null) {
                    res.end('{"status":500}');
                  } else {
                    relational.setProcedureSignature(s.employee.idUser, p.idProcedure, s, function(error) {
                      if (error) {
                        res.end('{"status":500}');
                      } else {
                        res.end('{"status":200, "idProcedure":' + p.idProcedure + ',"guidProcedure":"' + p.idProcedure + '", "idEmployee":' + s.employee.idEmployee + '}');
                      }
                    });
                  }
                }
              });
            } else {
              res.end('{"status":500}');
            }
          }
        });
      } else {
        relational.getProcedure(idProcedure, function(error, procedure) { //get template by id
          if (error) {
            res.end('{"status":500}');
          }
          if (label !== null) {
            procedure.label = label;
          } else {
            procedure.label = '';
          }
          procedure.idAccount = 1;
          relational.cloneProcedure(procedure, function(error, idProcedure) {
            if (error) {
              console.log('error');
              res.end('{"status":500}');
            } else {
              if (idUserB === null) {
                console.log(idUserB);
                procedure.idUser = idUserA;
                console.log("break");
                procedure.idProcedure = idProcedure;
                console.log("break");
                procedure.owner = ownerA;
                console.log("break");
                procedure.permission = permissionA;
                console.log("break");
                relational.setUserProcedure(procedure, function(error) {
                  if (error) {
                    res.end('{"status":500}');
                  } else {
                    res.end('{"status":200}');
                  }
                });
              } else {
                console.log("break");
                procedure.idUser = idUserA;
                console.log("break");
                procedure.idProcedure = idProcedure;
                console.log("break");
                procedure.owner = ownerA;
                console.log("break");
                procedure.permission = permissionA;
                console.log("break");
                relational.setUserProcedure(procedure, function(error) {
                  if (error) {
                    res.end('{"status":500}');
                  } else {
                    if (ownerB !== undefined && permissionB !== undefined) {
                      procedure.idUser = idUserB;
                      procedure.owner = ownerB;
                      procedure.permission = permissionB;
                      relational.setUserProcedure(procedure, function(error) {
                        if (error) {
                          res.end('{"status":500}');
                        } else {
                          res.end('{"status":200}');
                        }
                      });
                    } else {
                      res.end('{"status":500}');
                    }
                  }
                });
              }
            }
          });
        });
      }
    } else {
      if (p !== null) {
        p = JSON.parse(p);
        p.idAccount = 1; //req.user.idAccount;
        var guidProcedure = p.idProcedure;
        p.guid = guidProcedure;
        relational.getGUIDProcedure(guidProcedure, function(error, gp) {
          if (error) {
            console.log(error);
            res.end('{"status":500}');
          } else {
            if (gp === null) { //not found
              if (p.permission === 2 || (p.permission === 1 && p.owner === 1)) {
                relational.cloneProcedure(p, function(error, idProcedure) {
                  if (error) {
                    console.log(error);
                    res.end('{"status":500}');
                  } else {
                    p.idProcedure = idProcedure;
                    p.idUser = idUserA;
                    relational.setUserProcedure(p, function(error) {
                      relational.getUserEmployee(idUserA, function(error, e) {
                        if (error) {
                          console.log(error);
                          res.end('{"status":500}');
                        } else {
                          res.end('{"status":200, "idProcedure":' + p.idProcedure + ',"guidProcedure":"' + guidProcedure + '", "idEmployee":' + e.idEmployee + '}');
                        }
                      });
                    });
                  }
                });
              } else {
                res.end('{"status":500}');
              }
            } else {
              relational.getUserProcedure(idUserA, idUserA, gp.idProcedure, function(error, procedure) {
                if (procedure === null) {
                  p.idProcedure = gp.idProcedure;
                  p.idUser = idUserA;
                  relational.setUserProcedure(p, function(error) {
                    relational.getUserEmployee(idUserA, function(error, e) {
                      if (error) {
                        console.log(error);
                        res.end('{"status":500}');
                      } else {
                        res.end('{"status":200, "idProcedure":' + p.idProcedure + ',"guidProcedure":"' + guidProcedure + '", "idEmployee":' + e.idEmployee + '}');
                      }
                    });
                  });
                } else {
                  res.end('{"status":500}');
                }
              });
            }
          }
        });
      } else {
        res.end('{"status":500}');
      }
    }
  } else {
    res.end('{"status":500}');
  }
};

exports.postEmployeeProject = function(req, res, next) {};

exports.postProcedure = function(req, res, next) {
  var user = req.user;
  var idProcedure = req.params.idProcedure;
  var idUser = user.idUser;
  var idProject = req.body.idproject;
  var idEmployee = req.body.idemployee;
  var applicable = (typeof req.body.applicable !== "undefined" ? false : true);
  if (typeof idProcedure !== "undefined") {
    relational.getProcedure(idProcedure, function(error, procedure) {
      if (error) throw error;
      if (procedure.completeDate === null || procedure.completeDate === '0000-00-00 00:00:00') {
        var instructionList = procedure.instructionList;
        var completeFlag = (instructionList.length > 0);
        var c;
        for (var i = 0; i < instructionList.length; i++) {
          c = instructionList[i];
          if (c.value === -2) {
            completeFlag = false;
          }
        }
        if (applicable) {
          console.log('applicable');
          if (completeFlag) {
            console.log('completeFlag');
            relational.setProcedureCompleteDate(procedure, function(error, proc) {
              if (error) throw error;
              relational.setSignature(idUser, idProcedure, function(error, s) {
                if (error) throw error;
                res.end('{"status":200}');
              });
            });
          } else {
            res.end('{"status":500}');
          }
        } else {
          relational.setProcedureNotApplicable(idProcedure, function(error) {
            if (error) throw error;
            relational.setProcedureCompleteDate(procedure, function(error, proc) {
              if (error) throw error;
              relational.setSignature(idUser, idProcedure, function(error, s) {
                if (error) throw error;
                res.end('{"status":200}');
              });
            });
          });
        }
      } else {
        res.end('{"status":500}');
      }
    });
  } else {
    res.end('{"status":500}');
  }
};

exports.postProcedureInstruction = function(req, res, next) {
  var idProcedure = req.params.idProcedure;
  var idInstruction = req.params.idInstruction;
  var value = req.body.value;
  console.log('user.postProcedureInstruction idProcedure=' + idProcedure);
  console.log('user.postProcedureInstruction idInstruction=' + idInstruction);
  console.log('user.postProcedureInstruction value=' + value);
  if (typeof(idProcedure) !== undefined && typeof(idInstruction) !== undefined) {
    relational.getProcedure(idProcedure, function(error, p) {
      if (error) {
        res.end('{"status":500}');
      } else {
        if (p !== null) {
          relational.setInstructionValue(idInstruction, value, function(error) {
            if (error) {
              res.end('{"status":500}');
            } else {
              relational.setProcedureActivityDate(idProcedure, function(error) {
                if (error) {
                  res.end('{"status":500}');
                } else {
                  res.end('{"success":true,"status":200}');
                }
              });
            }
          });
        } else {
          res.end('{"status":500}');
        }
      }
    });
  }
};

exports.postProcedureInstructionComment = function(req, res, next) {
  console.log('postProcedureInstructionComment');
  var user = req.user;
  var idUser = user.idUser
  var idProcedure = req.params.idProcedure;
  var idInstruction = req.params.idInstruction;
  var comment = req.body.comment;
  console.log('postProcedureInstructionComment id Procedure=' + idProcedure);
  console.log('postProcedureInstructionComment idInstruction=' + idInstruction);
  console.log('postProcedureInstructionComment comment=' + comment);
  if (typeof(idProcedure) != undefined && typeof(idInstruction) !== undefined) {
    relational.setInstructionComment(idInstruction, comment, function(error, c) {
      if (error) throw error;
      relational.setProcedureActivityDate(idProcedure, function(error) {
        if (error) throw error;
        res.end('{"success":true,"status":200}');
      })
    });
  } else {
    res.end('{"success":false,"status":500}');
  }
};

exports.postEmployeeProjectProcedure = function(req, res, next) {
  console.log('user.postEmployeeProjectProcedure');
  var idProject = req.params.idProject;
  var idProcedure = req.params.idProcedure;
  var employeeIDEmployee = req.body.employeeIDEmployee;
  var employeePermission = req.body.employeePermission;
  var employeeOwner = req.body.employeeOwner;
  var projectPermission = req.body.projectPermission;
  var projectOwner = req.body.projectOwner;
  var label = req.body.label;
  if (idProcedure !== undefined && idProcedure !== "undefined") {
    relational.getProcedure(idProcedure, function(error, procedure) {
      if (error) throw error;
      relational.getProjectProcedureListByName(idProject, procedure.name, function(error, procedureList) {
        procedure.label = label;
        if (procedureList.length >= 0) {
          procedure.label += " Phase " + (procedureList.length + 1);
        }
        console.log(procedure.label);
        relational.cloneProcedure(procedure, function(error, idProcedure) {
          if (error) throw error;
          console.log(idProcedure);
          if (idProcedure !== null) {
            var instructionList = procedure.instructionList;
            var c;
            for (var i = 0; i < instructionList.length; i++) {
              c = instructionList[i];
              c.idProcedure = idProcedure;
              relational.setInstruction(c, function(error, result) {
                return;
              });
            }
          }
          procedure.idProcedure = idProcedure;
          procedure.owner = projectOwner;
          procedure.permission = projectPermission;
          relational.setProjectProcedure(idProject, idProcedure, function(error) {
            if (error) {
              res.end('{"status":500}');
            } else {
              if (employeeIDEmployee !== undefined && employeeIDEmployee !== 0 && employeePermission !== undefined && employeeOwner !== undefined) {
                procedure.idProcedure = idProcedure;
                procedure.owner = employeeOwner;
                procedure.permission = employeePermission;
                relational.getEmployeeUser(employeeIDEmployee, function(error, u) {
                  if (!error) {
                    procedure.idUser = u.idUser;
                    relational.setUserProcedure(procedure, function(error, result) {
                      if (error) {
                        res.end('{"status":500}');
                      } else {
                        res.end('{"status":200}');
                        relational.getEmployeeList("general-manager", function(error, employeeList) {
                          for (i = 0; i < employeeList.length; i++) {
                            e = employeeList[i];
                            procedure.permission = 1;
                            procedure.idUser = e.idUser;
                            relational.setUserProcedure(procedure, function(error, result) {});
                          }
                        });
                      }
                    });
                  } else {
                    res.end('{"status":500}');
                  }
                });
              } else {
                res.end('{"status":500}');
              }
            }
          });
        });
      });
    });
  }
};

exports.postProcedureSignature = function(req, res, next) {
  console.log('user.postProcedureSignature');
  var user = req.user;
  var idProcedure = req.params.idProcedure;
  var idUser = req.body.iduser;
  var idProject = req.body.idProject;
  var idEmployee = req.body.idEmployee;
  console.log('postProcedure idProcedure=' + idProcedure);
  console.log('postProcedure idUser=' + idUser);
  console.log('postProcedure idProject=' + idProject);
  console.log('postProcedure idEmployee=' + idEmployee);
  if (typeof(idProcedure) !== undefined && typeof(idUser) !== undefined) {
    relational.getProcedure(idProcedure, function(error, procedure) {
      if (error) throw error;
      if (procedure.completeDate !== null) {
        relational.setSignature(idUser, idProcedure, function(error, s) {
          res.end('{"status":200}');
        });
      } else {
        res.end('{"status":500}');
      }
    });
  } else {
    res.end('{"status":500}');
  }
};

exports.postProperties = function(req, res, next) {
  console.log('user.postProperties');
  var user = req.user;
  var idUser = req.params.idUser;
  var properties = JSON.parse(req.body.properties); // || "{'password':null,'name':null,'email':null}");
  console.log('user ' + user);
  console.log('idUser ' + idUser);
  console.log('properties ' + properties);
  var flag = false;
  relational.getIDUser(idUser, function(err, user) {
    if (properties.name !== null && user.name !== properties.name) {
      console.log('user.postProperties name');
      flag = true;
    } else {
      properties.name = user.name;
    }
    if (properties.email !== null && user.email !== properties.email) {
      console.log('user.postProperties email');
      flag = true;
    } else {
      properties.email = user.email;
    }
    if (properties.password !== null) {
      console.log('user.postProperties password');
      bcrypt.hash(properties.password, 10, function(err, passwordhash) {
        console.log(passwordhash);
        console.log(user.password);

        if (user.password !== '' + passwordhash) {
          console.log('new');
          properties.password = passwordhash;
          flag = true;
        }

        if (flag) {
          console.log('user.postProperties flag');
          relational.setUserProperties(idUser, properties, function(error) {
            if (error) {
              res.end('{"status":500}');
            } else {
              res.end('{"status":200}');
            }
          });
        }
      });
    } else {
      properties.password = user.password;
      if (flag) {
        console.log('user.postProperties flag');
        relational.setUserProperties(idUser, properties, function(error) {
          if (error) {
            res.end('{"status":500}');
          } else {
            res.end('{"status":200}');
          }
        });
      }
    }
  });
};

exports.postQueueInstruction = function(req, res, next) {
  console.log('user.postQueueInstruction');
  var idQueue = req.params.idQueue;
  var idInstruction = req.params.idInstruction;
  console.log('user.postQueueInstruction idQueue=' + idQueue);
  console.log('user.postQueueInstruction idInstruction=' + idInstruction);
  if (typeof(idQueue) !== undefined && typeof(idInstruction) !== undefined) {
    relational.addQueueInstruction(idQueue, idInstruction, function(error) {
      if (error) {
        res.end('{"status":500}');
      } else {
        res.end('{"status":200}');
      }
    });
  } else {
    res.end('{"status":500}');
  }
};

exports.postUserPassword = function(req, res, next) {
  console.log('user.postUserPassword');
  var password = req.params.password;
  var idUser = req.body.iduser;
  if (typeof(password) !== undefined && typeof(idUser) !== undefined) {

  } else {
    res.end('{"status":500}');
  }
};

exports.postTraining = function(req, res, next) {
  console.log('user.postTraining');
  var bodyStart = (typeof(req.body.start) !== undefined) ? req.body.start : null;
  var bodyStop = (typeof(req.body.stop) !== undefined) ? req.body.stop : null;
  var user = req.user;
  var idUser = (typeof(req.params.idUser) !== undefined) ? req.params.idUser : user.idUser;
  // var paramIDEmployee = (typeof(req.params.idEmployee)!==undefined)?req.params.idEmployee:null;
  if (idUser !== null) {
    relational.getUserLevelList(idUser, function(error, lList) {
      if (error) {
        res.end('{"status":500,"error":' + error + '}');
      } else {
        console.log(lList);
        var level = null;
        if (lList.length > 0) {
          level = lList[0];

        }

        if (bodyStart) {
          res.end('{"status":200}');
        }
      }
    });
  }
};

exports.postFile = function(req,res,next) {


}

function levelCompare(a, b) {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
}

/*
 * Function recusrively searches roles string with comma delimited role names, for a match to the role name contained in the role string. If a role string match is found, functions
 * returns true, else false.
 */
function isAuthorized(role, roles) {
  //    console.log('isAuthorized ' + role + ' ' + roles);
  var authorization = false;
  if (typeof role !== "undefined") {
    if (role.indexOf(",") > -1) {
      authorization = isAuthorized(role.split(",")[0], roles);
    } else {
      if (roles.indexOf(role) > -1) {
        authorization = true;
      }
    }
  }
  return authorization;
};

exports.isAuthorized = isAuthorized;
