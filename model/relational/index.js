/*
 * Name: relational.js
 * Author: Joaquin Rodriguez
 * Date: 201506
 * Copyright: 2015 Merit Builders, Inc.All Rights Reserved
 */
var database = require('../database.js');
var sql = require('./sql.js');
var bcrypt = require('bcryptjs');
var object = require('../object');


exports.sql = sql;
// var building = object.building;

// var instruction = object.instruction;
// var contractor = object.contractor;
// var element = object.element;
// var employee = object.employee;
// var file = object.file;

// var level = object.level;
// var project = object.project;
// var procedure = object.procedure;
// var phone = object.phone;
// var queue = object.queue;
// var record = object.record;
// var signature = object.signature;
// var statistic = object.statistic;
var client = object.client;
var identification = object.identification;
var user = object.user;
var token = object.token;
var code = object.code;

exports.setDatabase = function(d) {
  database = d;
};

var insertFile = function(f, callback) {
  console.log('relational.insertFile');
  database.getQueryResult(sql.insertFile(f),
    function(err, result) {
      var idProcedure = result.insertId;
      callback(err, idProcedure);
    });
};

var insertUserFile = function(idUser, f, callback) {
  database.getQueryResult(sql.insertUserFile(idUser, f),
    function(err, info) {
      if (err) throw err;
      return callback(err, info);
    });
};

exports.removeFile = function(idFile, callback) {
  database.getQueryResult(deleteFile(idFile), function(err, result) {
    if (err) throw err;
    callback(err, result);
  });
};

exports.removeProcedure = function(idProcedure, callback) {
  console.log('relational.removeProcedure');
  database.getQueryResult(sql.deleteProcedure(idProcedure), function(err, result) {
    if (err) throw err;
    callback(err, result);
  });
};


exports.getInstructionList = function(idProcedure, callback) {
  if (typeof idProcedure !== "undefined") {
    database.getQueryResult(sql.selectInstructionList(idProcedure), function(err, result) {
      var instructionList = [];
      var c;
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        for (i = 0; i < result.length; i++) {
          c = new instruction();
          c.idInstruction = result[i].idInstruction;
          c.name = result[i].name;
          c.statement = result[i].statement;
          c.value = result[i].value;
          c.maximum = result[i].maximum;
          c.minimum = result[i].minimum;
          c.applicable = result[i].applicable;
          c.block = result[i].block;
          c.activityDate = result[i].activityDate;
          c.createDate = result[i].createDate;
          c.comment = result[i].comment;
          c.idProcedure = result[i].idProcedure;
          instructionList.push(c);
        }
      }
      return callback(err, instructionList);
    });
  } else {
    return callback(new Error("typeof idProcedure === \"undefined\""), null);
  }
};

exports.getAuthorizationCode = function(code, callback) {
  if (typeof code !== "undefined") {
    database.getQueryResult(sql.selectContractor(idUser), function(err, result) {
      if (err) throw err;
      var object = null;
      if (result !== undefined && result.length > 0) {}
      return callback(err, object);
    });
  } else {
    return callback(new Error("typeof code === \"undefined\""), null);
  }
};

exports.getContractor = function(idUser, callback) {
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectContractor(idUser), function(err, result) {
      if (err) throw err;
      var e;
      if (result !== undefined && result.length > 0) {
        e = new contractor();
        e.idEmployee = result[0].idEmployee;
        e.idUser = result[0].idUser;
        e.name = result[0].employeeName;
        e.role = result[0].role;
      }
      return callback(err, e);
    });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getContractorList = function(role, callback) {
  console.log('relational.getContractorList');
  database.getQueryResult(sql.selectContractorList(role), function(err, result) {
    if (err) throw err;
    var employeeList = [];
    var e;
    if (result !== undefined && result.length > 0) {
      for (var i = 0; i < result.length; i++) {
        e = new contractor();
        e.idEmployee = result[i].idContractor;
        e.idUser = result[i].idUser;
        e.role = result[i].role;
        e.name = result[i].name;
        e.hireDate = result[i].hireDate;
        employeeList.push(e);
      }
    }
    return callback(err, employeeList);
  });
};

exports.getElement = function(idElement, callback) {
  console.log('relational.getElement');
  if (typeof idElement !== "undefined") {
    database.getQueryResult(sql.selectElement(idElement), function(err, result) {
      var e = null;
      if (result !== undefined && result.length > 0) {
        e = new element();
        e.idElement = idElement;
        e.id = result[0][0].id;
        e.name = result[0][0].name;
        e.level = result[0][0].level;
        e.procedureList = result[0][0].procedureList;
      }
      return callback(err, e);
    });
  } else {
    return callback(new Error("typeof idElement === \"undefined\""), null);
  }
};

exports.getElementList = function(callback) {
  console.log('relational.getElementList');
  database.getQueryResult(sql.selectElementList(), function(err, result) {
    //        if (err) throw err;
    var elementList = [];
    var e;
    var name;
    if (result !== undefined && result.length > 0) {
      for (var i = 0; i < result[0].length; i++) {
        e = new element();
        e.idElement = result[0][i].idElement;
        e.name = result[0][i].name;
        e.level = result[0][i].level;
        e.color = result[0][i].color;
        e.hexCode = result[0][i].hexCode;
        e.action = result[0][i].action;
        e.testCount = result[0][i].testCount;
        e.inspectionCount = result[0][i].inspectionCount;
        e.sessionCount = result[0][i].sessionCount;
        e.test = result[0][i].test;
        e.inspection = result[0][i].inspection;
        e.session = result[0][i].session;
        e.inspector = result[0][i].inspector;
        e.instructor = result[0][i].instructor;
        e.student = result[0][i].student;
        e.rate = result[0][i].rate;
        e.time = result[0][i].time / 216000;
        e.average = result[0][i].average;
        e.id = result[0][i].id;
        elementList.push(e);
      }
    }
    return callback(err, elementList);
  });
};

exports.getElementProcedureList = function(idProcedureArray, callback) {
  console.log('relational.getElementProcedureList');
  if (typeof idProcedureArray !== "undefined") {
    database.getQueryResult(sql.selectElementProcedureList(idProcedureArray), function(err, result) {
      //        if (err) throw err;
      var procedureList = [];
      var p;
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        for (i = 0; i < result.length; i++) {
          p = new procedure();
          p.idUser = result[i].idUser;
          p.idProcedure = result[i].idProcedure;
          p.name = result[i].name;
          p.label = result[i].label;
          p.signatureDate = result[i].signatureDate;
          p.createDate = result[i].createDate;
          p.activityDate = result[i].activityDate;
          p.completeDate = result[i].completeDate;
          p.type = result[i].type;
          p.guid = result[i].guid;
          p.permission = 3;
          p.permissionLabel = 'execute';
          p.owner = 0;
          procedureList.push(p);
        }
      }
      return callback(err, procedureList);
    });
  } else {
    return callback(new Error("typeof idProcedureArray === \"undefined\""), null);
  }
};

exports.getElementActionList = function(idElement) {
  console.log('relational.getElementActionList');
  database.getQueryResult(sql.getElementActionArray(idElement), function(err, result) {
    if (err) throw err;
    var a;
    var aList = [];
    var actionListString = '';
    if (result !== undefined && result.length > 0) {
      actionListString = result[0].actionList;
      aList = actionListString.split(',');
    }
    return callback(err, aList);
  });
}

exports.getElementName = function(idElement, callback) {
  console.log('relational.getElementName');
  if (typeof idElement !== "undefined") {
    database.getQueryResult(sql.selectElementName(idElement), function(err, result) {
      if (err) throw err;
      var e;
      if (result !== undefined && result.length > 0) {
        e = new element();
        e.name = result[0].name;
        e.idElement = idElement;
      }
      return callback(err, e);
    });
  } else {
    return callback(new Error("typeof idElement === \"undefined\""), null);
  }
};

exports.getEmployee = function(idEmployee, callback) {
  console.log('relational.getEmployee');
  if (typeof idEmployee !== "undefined") {
    database.getQueryResult(sql.selectEmployee(idEmployee), function(err, result) {
      if (err) throw err;
      var e;
      if (result !== undefined && result.length > 0) {
        e = new employee();
        e.idEmployee = result[0].idEmployee;
        e.idUser = result[0].idUser;
        e.name = result[0].name;
        e.role = result[0].role;
        e.hireDate = result[0].hireDate;
      }
      return callback(err, e);
    });
  } else {
    return callback(new Error("typeof idEmployee === \"undefined\""), null);
  }
};

exports.getEmployeeList = function(role, callback) {
  console.log('relational.getEmployeeList');
  database.getQueryResult(sql.selectEmployeeList(role), function(err, result) {
    if (err) throw err;
    var employeeList = [];
    var e;
    if (result !== undefined && result.length > 0) {
      for (var i = 0; i < result.length; i++) {
        e = new employee();
        e.idEmployee = result[i].idEmployee;
        e.idUser = result[i].idUser;
        e.role = result[i].role;
        e.name = result[i].name;
        e.identification = result[i].identification;
        e.nickName = result[i].nickName;
        e.hireDate = result[i].hireDate;
        employeeList.push(e);
      }
    }
    return callback(err, employeeList);
  });
};

exports.getUserList = function(role, callback) {
  console.log('relational.getUserList');
  database.getQueryResult(sql.selectUserList(role), function(err, result) {
    if (err) throw err;
    var employeeList = [];
    var e;
    if (result !== undefined && result.length > 0) {
      for (var i = 0; i < result.length; i++) {
        e = new employee();
        e.idEmployee = result[i].idEmployee;
        e.idUser = result[i].idUser;
        e.role = result[i].role;
        e.name = result[i].name;
        e.identification = result[i].identification;
        e.nickName = result[i].nickName;
        e.hireDate = result[i].hireDate;
        employeeList.push(e);
      }
    }
    return callback(err, employeeList);
  });
};

exports.getUserStatisticList = function(idUser, role, callback) {
  console.log('relational.getUserStatisticList');
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserStatisticList(idUser, role),
      function(err, result) {
        var statisticList = [];
        var s;
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          for (var i = 0; i < result.length; i++) {
            s = new statistic();
            s.average = result[i].average;
            // s.name = result[i].name;
            s.description = result[i].description;
            s.statement = result[i].statement;
            statisticList.push(s);
          }
        }
        return callback(null, statisticList);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getUserElementList = function(idUserA, idUserB, callback) {
  console.log("relational.getUserElementList " + idUserA + " " + idUserB);
  if (typeof idUserA !== "undefined" && typeof idUserB !== "undefined") {
    database.getQueryResult(sql.selectUserElementList(idUserA, idUserB), function(err, result) {
      var r = null;
      var rList = [];
      if (result !== undefined && result.length > 0) {
        for (i = 0; i < result[0].length; i++) {
          r = new element();
          r.name = result[0][i].name;
          r.id = result[0][i].id;
          r.level = result[0][i].level;
          r.type = result[0][i].type;
          r.value = result[0][i].value;
          r.key = result[0][i].key;
          r.maximum = result[0][i].maximum;
          r.minimum = result[0][i].minimum;
          r.duration = result[0][i].duration;
          r.key = result[0][i].key;
          r.rate = result[0][i].rate;
          r.time = result[0][i].time;
          r.average = result[0][i].average;
          r.session = result[0][i].session;
          r.inspection = result[0][i].inspection;
          r.test = result[0][i].test;
          r.hexCode = result[0][i].hexCode;
          rList.push(r);
        }
      }
      var r = null;
      var map = new Object();
      var list = [];
      for (var i = 0; i < rList.length; i++) {
        r = rList[i];
        if (map[r.name] !== undefined && map[r.name] !== null) {
          map[r.name].push(r);
        } else {
          map[r.name] = [];
          map[r.name].push(r);
        }
      }
      var keyList = Object.keys(map);
      var rList = [];
      var record = null;
      var knowledge = 0;
      var knowledgeCount = 0;
      var skill = 0;
      var skillCount = 0;
      var experience = 0;
      for (var i = 0; i < keyList.length; i++) {
        list = map[keyList[i]];
        record = {};
        for (var j = 0; j < list.length; j++) {
          r = list[j];
          knowledge = 0;
          knowledgeCount = 0;
          skill = 0;
          skillCount = 0;
          experience = 0;
          // console.log(r);
          if (r.type === 'question') {
            if (r.key !== null && r.value !== null && r.value > -2) {
              knowledgeCount++;
              if (r.key == r.value) {
                knowledge += 1;
              } else {
                knowledge += 0;
              }
            }
            if (r.duration !== null) {
              experience += r.duration;
            }
          } else if (r.type === 'topic') {
            if (r.duration !== null) {
              experience += r.duration;
            }
          } else if (r.type === 'action') {;
            if (r.value !== null && r.value > -2 && r.minimum !== null && r.maximum !== null) {
              var diff = r.maximum - (r.minimum - 1);
              skill += r.value / diff;
              skillCount++;
              console.log(skill);
              console.log(skillCount);
            }
            if (r.duration !== null) {
              experience += r.duration;
            }
          }
        }
        record = r;
        record.knowledge = (knowledgeCount > 0) ? (knowledge / knowledgeCount) * 100 : knowledge;
        record.skill = (skillCount > 0) ? (skill / skillCount) : skill;
        record.experience = experience / 216000;
        record.average = record.average * 100;
        record.time = record.time / 216000;
        rList.push(record);
      }
      return callback(err, rList);
    });
  } else {
    return callback(new Error("typeof idUserA || idUserB === \"undefined\""), null);
  }
}

exports.getEmployeeUser = function(idEmployee, callback) {
  console.log('relational.getEmployeeUser ' + idEmployee);
  if (typeof idEmployee !== "undefined") {
    database.getQueryResult(sql.selectEmployeeUser(idEmployee), function(err, result) {
      var u;
      if (result !== undefined && result.length > 0) {
        u = new user();
        u.idUser = result[0].idUser;
        u.name = result[0].name;
      }
      return callback(err, u);
    });
  } else {
    return callback(new Error("typeof idEmployee === \"undefined\""), null);
  }
};

exports.getLevelList = function(callback) {
  console.log('relational.getLevelList');
  database.getQueryResult(sql.selectLevelList(), function(err, result) {
    var d = new level();
    var lList = [];
    if (result !== undefined && result.length > 0) {
      for (i = 0; i < result.length; i++) {
        d = new level();
        d.idLevel = result[i].idLevel;
        d.label = result[i].label;
        d.name = result[i].name;
        d.hexCode = result[i].hexCode;
        d.duration = result[i].duration;
        lList.push(d);
      }
    }
    return callback(err, lList);
  });
};

exports.getProcedure = function(idProcedure, callback) {
  console.log('relational.getProcedure ' + idProcedure);
  database.getQueryResult(sql.selectProcedure(idProcedure), function(err, result) {
    if (err) throw err;
    if (result !== undefined && result.length > 0) {
      var c;
      var s;
      var p = new procedure();
      p.idProcedure = result[0].idProcedure;
      p.idAccount = result[0].idAccount;
      p.name = result[0].procedureName;
      p.signatureDate = result[0].signatureDate;
      p.userName = result[0].userName;
      p.type = result[0].type;
      p.guid = result[0].guid;
      p.createDate = result[0].procedureCreateDate;
      p.activityDate = result[0].procedureActivityDate;
      p.completeDate = result[0].procedureCompleteDate;
      for (i = 0; i < result.length; i++) {
        if (result[i].idInstruction !== undefined && result[i].idInstruction !== null) {
          c = new instruction();
          c.idInstruction = result[i].idInstruction;
          c.idProcedure = result[i].idProcedure;
          c.statement = result[i].instructionStatement;
          c.description = result[i].instructionDescription;
          c.value = result[i].instructionValue;
          c.comment = result[i].instructionComment;
          c.activityDate = result[i].instructionActivityDate;
          c.createDate = result[i].instructionCreateDate;
          c.maximum = result[i].maximum;
          c.minimum = result[i].minimum;
          c.step = result[i].instructionStep;
          c.applicable = result[i].applicable;
          c.block = result[i].instructionBlock;
          c.key = result[i].instructionKey;
          c.type = result[i].instructionType;
          c.mask = result[i].instructionMask;
          if (result[i] !== undefined) {
            c.label = JSON.parse(result[i].instructionLabel);
          }
          c.name = result[i].instructionName;
          p.instructionList.push(c);
        }
      }
    }
    return callback(err, p);
  });
};

exports.getProcedureInstructionElementList = function(idProcedure, callback) {
  if (typeof idProcedure !== "undefined") {
    database.getQueryResult(sql.selectProcedureInstructionElementList(idProcedure), function(err, result) {
      if (err) throw err;
      var elementList = [];
      var e;
      var name;
      if (result !== undefined && result.length > 0) {
        for (var i = 0; i < result[0].length; i++) {
          e = new element();
          e.idElement = result[0][i].idElement;
          e.name = result[0][i].name;
          // e.level = result[0][i].level;
          // e.color = result[0][i].color;
          // e.hexCode = result[0][i].hexCode;
          // e.action = result[0][i].action;
          // e.testCount = result[0][i].testCount;
          // e.inspectionCount = result[0][i].inspectionCount;
          // e.sessionCount = result[0][i].sessionCount;
          // e.test = result[0][i].test;
          // e.inspection = result[0][i].inspection;
          // e.session = result[0][i].session;
          // e.inspector = result[0][i].inspector;
          // e.instructor = result[0][i].instructor;
          // e.student = result[0][i].student;
          // e.rate = result[0][i].rate;
          // e.time = result[0][i].time / 216000;
          // e.average = result[0][i].average;
          // e.id = result[0][i].id;
          elementList.push(e);
        }
      }
      return callback(err, elementList);
    });
  } else {
    return callback(new Error("typeof idProcedure === \"undefined\""), null);
  }

}

exports.getGUIDProcedure = function(guid, callback) {
  console.log('relational.getGUIDProcedure');
  database.getQueryResult(sql.selectProcedureGUID(guid), function(err, result) {
    if (err) throw err;
    var p = null;
    if (result !== undefined && result.length > 0) {
      var c;
      var s;
      p = new procedure();
      p.idProcedure = result[0].idProcedure;
      p.idAccount = result[0].idAccount;
      p.name = result[0].procedureName;
      p.signatureDate = result[0].signatureDate;
      p.userName = result[0].userName;
      p.type = result[0].type;
      p.guid = result[0].guid;
      p.createDate = result[0].procedureCreateDate;
      p.activityDate = result[0].procedureActivityDate;
      p.completeDate = result[0].procedureCompleteDate;
      for (i = 0; i < result.length; i++) {
        if (result[i].idInstruction !== undefined && result[i].idInstruction !== null) {
          c = new instruction();
          c.idInstruction = result[i].idInstruction;
          c.idProcedure = result[i].idProcedure;
          c.statement = result[i].instructionStatement;
          c.description = result[i].instructionDescription;
          c.value = result[i].instructionValue;
          c.comment = result[i].instructionComment;
          c.activityDate = result[i].instructionActivityDate;
          c.createDate = result[i].instructionCreateDate;
          c.maximum = result[i].maximum;
          c.minimum = result[i].minimum;
          c.step = result[i].instructionStep;
          c.applicable = result[i].applicable;
          c.block = result[i].instructionBlock;
          c.key = result[i].instructionKey;
          c.type = result[i].instructionType;
          c.mask = result[i].instructionMask;
          if (result[i] !== undefined) {
            c.label = JSON.parse(result[i].instructionLabel);
          }
          c.name = result[i].instructionName;
          p.instructionList.push(c);
        }
      }
    }
    return callback(err, p);
  });
};

exports.getProject = function(idProject, callback) {
  console.log('relational.getProject');
  if (typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectProject(idProject), function(err, result) {
      if (err) throw err;
      var p;
      var b;
      var bList = [];
      if (result !== undefined && result.length > 0) {
        p = new project();
        p.idProject = result[0].idProject;
        p.name = result[0].name;
        p.number = result[0].number;
        p.createDate = result[0].createDate;
        p.startDate = result[0].startDate;
        p.activityDate = result[0].activityDate;
        p.completeDate = result[0].completeDate;
        for (var i = 0; i < result.length; i++) {
          b = new building();
          b.idBuilding = result[i].idBuilding;
          b.name = result[i].buildingName;
          b.number = result[i].buildingNumber;
          b.createDate = result[i].buildingCreateDate;
          b.activityDate = result[i].buildingActivityDate;
          b.completeDate = result[i].buildingCompleteDate;
          bList.push(b);
        }
        p.buildingList = bList;
      }
      return callback(err, p);
    });
  } else {
    return callback(new Error("typeof idProject === \"undefined\""), null);
  }
};

exports.getProjectBuilding = function(idBuilding, callback) {
  console.log('relational.getProjectBuilding');
  if (typeof idBuilding !== "undefined") {
    database.getQueryResult(sql.selectProjectBuilding(idBuilding), function(err, result) {
      var b = null;
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        b = new building();
        b.idBuilding = result[0].idBuilding;
        b.name = result[0].name;
        b.number = result[0].number;
      }
      return callback(err, b);
    });
  } else {
    return callback(new Error("typeof idBuilding === \"undefined\""), null);
  }
};

exports.getProjectBuildingList = function(idProject, callback) {
  console.log('relational.getProjectBuildingList');
  if (typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectProjectBuildingList(idProject), function(err, result) {
      var bList = [];
      var b;
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        for (i = 0; i < result.length; i++) {
          b = new building();
          b.idBuilding = result[i].idBuilding;
          b.idProject = result[i].idProject;
          b.name = result[i].name;
          b.number = result[i].number;
          bList.push(b);
        }
      }
      console.log(bList);
      return callback(err, bList);
    });
  } else {
    return callback(new Error("typeof idProject === \"undefined\""), null);
  }
};

exports.getProjectProcedure = function(idProject, idProcedure, callback) {
  console.log('relational.getProjectProcedure');
  if (typeof idProject !== "undefined" && typeof idProcedure !== "undefined") {
    database.getQueryResult(sql.selectProjectProcedure(idProject, idProcedure), function(err, result) {
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        var c;
        var s;
        var p = new procedure();
        p.idProcedure = idProcedure;
        p.idAccount = result[0].idAccount;
        p.idProject = result[0].idProject;
        p.identificationName = result[0].identificationName;
        p.name = result[0].procedureName;
        p.permission = 2;
        p.owner = 0;
        p.signatureDate = result[0].signatureDate;
        p.createDate = result[0].procedureCreateDate;
        p.activityDate = result[0].procedureActivityDate;
        p.completeDate = result[0].procedureCompleteDate;
        for (i = 0; i < result.length; i++) {
          if (result[i].idInstruction !== undefined && result[i].idInstruction !== null) {
            c = new instruction();
            c.idInstruction = result[i].idInstruction;
            c.idProcedure = idProcedure;
            c.statement = result[i].instructionStatement;
            c.value = result[i].instructionValue;
            c.comment = result[i].instructionComment;
            c.activityDate = result[i].instructionActivityDate;
            c.createDate = result[i].instructionCreateDate;
            c.maximum = result[i].maximum;
            c.minimum = result[i].minimum;
            c.applicable = result[i].applicable;
            c.block = result[i].block;
            c.name = result[i].instructionName;
            p.instructionList.push(c);
          }
        }
      }
      return callback(err, p);
    });
  } else {
    return callback(new Error("typeof idProject === \"undefined\" || typeof idProcedure === \"undefined\""), null);
  }
};

exports.getProjectProcedureList = function(idProject, callback) {
  console.log('relational.getProjectProcedureList');
  if (typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectProjectProcedureList(idProject),
      function(err, result) {
        var procedureList = [];
        var p;
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          for (i = 0; i < result.length; i++) {
            p = new procedure();
            p.idProject = result[i].idProject;
            p.idProcedure = result[i].idProcedure;
            p.name = result[i].procedureName;
            p.label = result[i].procedureLabel;
            p.signatureDate = result[i].signatureDate;
            p.userName = result[i].userName;
            p.createDate = result[i].procedureCreateDate;
            p.activityDate = result[i].procedureActivityDate;
            p.completeDate = result[i].procedureCompleteDate;
            p.permission = 1;
            p.owner = 0;
            procedureList.push(p);
          }
        }
        return callback(err, procedureList);
      });
  } else {
    return callback(new Error("typeof idProject === \"undefined\""), null);
  }
};

exports.getProjectProcedureListByName = function(idProject, name, callback) {
  console.log('relational.getProjectProcedureListByName');
  if (typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectProjectProcedureListByName(idProject, name),
      function(err, result) {
        var procedureList = [];
        var p;
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          for (i = 0; i < result.length; i++) {
            p = new procedure();
            p.idProject = result[i].idProject;
            p.idProcedure = result[i].idProcedure;
            p.name = result[i].procedureName;
            p.label = result[i].procedureLabel;
            p.signatureDate = result[i].signatureDate;
            p.userName = result[i].userName;
            p.createDate = result[i].procedureCreateDate;
            p.activityDate = result[i].procedureActivityDate;
            p.completeDate = result[i].procedureCompleteDate;
            p.permission = 1;
            p.owner = 0;
            procedureList.push(p);
          }
        }
        return callback(err, procedureList);
      });
  } else {
    return callback(new Error("typeof idProject === \"undefined\""), null);
  }
};

exports.getProjectUserList = function(idProject, callback) {
  console.log('relational.getProjectUserList');
  if (typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectProjectUserList(idProject), function(err, result) {
      var employeeList = [];
      var e;
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        for (i = 0; i < result.length; i++) {
          e = new employee();
          e.idEmployee = result[i].idEmployee;
          e.idUser = result[i].idUser;
          e.name = result[i].employeeName;
          e.role = result[i].role;
          employeeList.push(e);
        }
      }
      return callback(err, employeeList);
    });
  } else {
    return callback(new Error("typeof idProject === \"undefined\""), null);
  }
};

exports.getProjectElementList = function(idProject, callback) {
  console.log('relational.getProjectElementList');
  if (typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectProjectElementList(idProject),
      function(err, result) {
        if (err) throw err;
        var u;
        var elementList = [];
        for (i = 0; i < result.length; i++) {
          u = new element();
          u.idElement = result[i].idElement;
          u.name = result[i].name;
          elementList.push(u);
        }
        return callback(err, elementList);
      });
  } else {
    return callback(new Error("typeof idProject === \"undefined\""), null);
  }
};

exports.getQueueList = function(callback) {
  database.getQueryResult(sql.selectQueueList(), function(error, result) {
    if (error) throw error;
    var queueList = [];
    var q;
    for (i = 0; i < result.length; i++) {
      q = new queue();
      q.idQueue = result[i].idQueue;
      q.name = result[i].name;
      queueList.push(q);
    }
    return callback(null, queueList);

  });
}
exports.getQueue = function(idQueue, callback) {
  if (typeof idQueue !== "undefined") {
    database.getQueryResult(sql.selectQueue(idQueue), function(error, result) {
      if (error) throw error;
      var q = new queue();
      var procedureList = [];
      var p;
      var i;
      if (result !== undefined && result.length > 0) {
        q.idQueue = result[0].idQueue;
        q.name = result[0].queueName;
        for (z = 0; z < result.length; z++) {
          p = new procedure();
          p.idProcedure = result[z].idProcedure;
          p.idAccount = result[z].idAccount;
          p.idUser = result[z].idUser;
          p.name = result[z].name;
          p.label = result[z].label;
          p.owner = result[z].owner;
          p.type = result[z].type;
          p.createDate = result[z].createDate;
          p.activityDate = result[z].activityDate;
          p.createDate = result[z].createDate;
          p.type = result[z].type;
          i = new instruction();
          i.idInstruction = result[z].idInstruction;
          i.statement = result[z].instructionStatement;
          i.description = result[z].instructionDescription;
          i.value = result[z].instructionValue + "";
          i.comment = result[z].instructionComment;
          i.activityDate = result[z].instructionActivityDate;
          i.createDate = result[z].instructionCreateDate;
          i.maximum = result[z].maximum;
          i.minimum = result[z].minimum;
          i.step = result[z].step;
          i.applicable = result[z].applicable;
          if (result[z] !== undefined) {
            i.label = JSON.parse(result[z].instructionLabel);
          }
          i.block = result[z].block;
          i.name = result[z].instructionName;
          i.type = result[z].instructionType;
          console.log('instruction type=' + i.type);
          i.key = result[z].instructionKey;
          i.mask = result[z].instructionMask;
          p.instructionList.push(i);
          q.procedureList.push(p);
          console.log(i);
          console.log(p);
          console.log(q);
        };
      }
      return callback(null, q);
    });
  } else {
    return callback(new Error("typeof idQueue === \"undefined\""), null);
  }
}

exports.getSessionUserList = function(idSession, callback) {
  console.log('relational.getSessionEmployeeList');
  if (typeof idSession !== "undefined") {
    database.getQueryResult(sql.selectSessionUserList(idSession),
      function(error, result) {
        if (error) throw error;
        var employeeList = [];
        var e;
        for (i = 0; i < result.length; i++) {
          e = new employee();
          e.idEmployee = result[i].idEmployee;
          e.name = result[i].name;
          employeeList.push(e);
        }
        return callback(null, employeeList);
      });

  } else {
    return callback(new Error("typeof idSession === \"undefined\""), null);
  }
};

exports.getNameUser = function(name, callback) {
  console.log('relational.getNameUser ' + name);
  if (typeof name !== "undefined") {
    database.getQueryResult(sql.selectNameUser(name), function(err, result) {
      u = null;
      if (result !== undefined && result.length > 0) {
        u = new user();
        u.idUser = result[0].idUser;
        u.name = result[0].name;
        u.email = result[0].email;
        u.role = result[0].role;
        u.password = result[0].password;
      }
      return callback(err, u);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};

exports.getToken = function(key, callback) {
  console.log('relational.getToken');
  if (typeof key !== "undefined" && key !== 'null') {
    database.getQueryResult(sql.selectToken(key), function(err, result) {
      var c = null;
      if (result !== undefined && result.length > 0) {
        c = new token();
        c.idToken = result[0].idToken;
        c.idClient = result[0].idClient;
        c.idUser = result[0].idUser;
        c.value = result[0].value;
      }
      return callback(err, c);
    });
  } else {
    return callback(new Error("typeof key === \"undefined\""), null);
  }
}

exports.setToken = function(token, idUser, idClient, callback) {
  console.log('relational.setToken');
  if (typeof token !== "undefined") {
    database.getQueryResult(sql.insertToken(token, idClient, idUser),
      function(err, result) {
        return callback(err);
      });
  } else {
    return callback(new Error("typeof token === \"undefined\""), null);
  }
}

exports.getCode = function(key, callback) {
  console.log('relational.getCode');
  if (typeof key !== "undefined") {
    database.getQueryResult(sql.selectCode(key), function(err, result) {
      var c = null;
      if (result !== undefined && result.length > 0) {
        c = new code();
        c.idCode = result[0].idCode;
        c.idClient = result[0].idClient;
        c.idUser = result[0].idUser;
        c.value = result[0].value;
        c.redirectURI = result[0].redirectURI;
      }
      return callback(err, c);
    });
  } else {
    return callback(new Error("typeof key === \"undefined\""), null);
  }
}

exports.setCode = function(code, idClient, idUser, redirectURI, callback) {
  console.log('relational.setCode');
  if (typeof code !== "undefined") {
    database.getQueryResult(sql.insertCode(1, code, idClient, idUser, redirectURI),
      function(err, result) {
        return callback(err, result);
      });
  } else {
    return callback(new Error("typeof code === \"undefined\""));
  }
}

exports.removeCode = function(code, callback) {
  console.log('relational.removeCode');
  if (typeof code !== "undefined") {
    database.getQueryResult(sql.deleteCode(code), function(err, result) {
      if (err) throw err;
      callback(err, result);
    });
  } else {
    return callback(new Error("typeof code === \"undefined\""), null);
  }

}

exports.getIDClient = function(idClient, callback) {
  console.log('relational.getIDClient');
  if (typeof idClient !== "undefined") {
    database.getQueryResult(sql.selectIDClient(idClient), function(err, result) {
      if (err) throw err;
      var c = null;
      if (result !== undefined && result.length > 0) {
        c = new client();
        c.idClient = result[0].idClient;
        c.name = result[0].name;
        c.identification = result[0].identification;
        c.secret = result[0].secret;
      }
      return callback(err, c);
    });
  } else {
    return callback(new Error("typeof idClient === \"undefined\""), null);
  }
}

exports.getIdentificationClient = function(identification, callback) {
  console.log('relational.getIdentificationClient');
  if (typeof identification !== "undefined") {
    database.getQueryResult(sql.selectIdentificationClient(identification), function(err, result) {
      var c = null;
      if (result !== undefined && result.length > 0) {
        c = new client();
        c.idClient = result[0].idClient;
        c.name = result[0].name;
        c.identification = result[0].identification;
        c.secret = result[0].secret;
      }
      return callback(err, c);
    });
  } else {
    return callback(new Error("typeof identification === \"undefined\""), null);
  }
}

exports.getIDUser = function(username, callback) {
  console.log('relational.getUser ' + username);
  if (typeof username !== "undefined") {
    database.getQueryResult(sql.selectIDUser(username), function(err, result) {
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        u = new user();
        u.idUser = result[0].idUser;
        u.name = result[0].name;
        u.email = result[0].email;
        u.role = result[0].role;
        u.password = result[0].password;
        f = new file();
        f.idFile = result[0].idFile;
        f.path = result[0].path;
        f.name = result[0].name;
        f.extension = result[0].extension;
        return callback(err, u);
      } else {
        return callback(err, null);
      }

    });
  } else {
    return callback(new Error("typeof username === \"undefined\""), null);
  }
};

exports.getUserContractor = function(idUser, callback) {
  console.log("relational.getUserContractor");
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserContractor(idUser), function(err, result) {
      if (err) throw err;
      var c;
      if (result !== undefined && result.length > 0) {
        c = new contractor();
        c.idContractor = result[0].idContractor;
        c.idUser = result[0].idUser;
        c.name = result[0].name;
      }
      return callback(err, c);
    });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

// exports.getUserElementList = function(idUser, callback) {
//   console.log('relational.getUserElementList');
//   if (typeof idUser !== "undefined") {
//     database.getQueryResult(sql.selectUserElementList(idUser), function(err, result) {
//       if (err) throw err;
//       var e;
//       if (result !== undefined && result.length > 0) {
//         e = new employee();
//         e.idEmployee = result[0].idEmployee;
//         e.idUser = result[0].idUser;
//         e.name = result[0].employeeName;
//       }
//       return callback(err, e);
//     });
//
//   } else {
//     return callback(new Error("typeof idUser === \"undefined\""), null);
//   }
// };

exports.getUserEmployee = function(idUser, callback) {
  console.log("relational.getUserEmployee");
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserEmployee(idUser), function(err, result) {
      if (err) throw err;
      var e;
      if (result !== undefined && result.length > 0) {
        e = new employee();
        e.idEmployee = result[0].idEmployee;
        e.idUser = result[0].idUser;
        e.name = result[0].employeeName;
      }
      return callback(err, e);
    });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getUserFile = function(idUser, idFile, type, callback) {
  console.log("relational.getUserFile");
  if (typeof idUser !== "undefined" && typeof idFile !== "undefined") {
    database.getQueryResult(sql.selectUserFile(idUser, idFile, type),
      function(err, result) {
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          var d = new file();
          d.idFile = result[0].idFile;
          d.idUser = result[0].idUser;
          d.path = result[0].path;
          d.name = result[0].name;
          d.extension = result[0].extension;
          d.label = result[0].label;
          d.permission = result[0].permission;
          d.owner = result[0].owner;
        }
        return callback(err, d);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\" || typeof idFile === \"undefined\""), null);
  }
};

exports.getUserFileProfileImage = function(idUser, callback) {
  //    console.log("relational.getUserFileProfileImage");
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserFileProfileImage(idUser),
      function(err, result) {
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          var d = new file();
          d.idFile = result[0].idFile;
          d.idUser = result[0].idUser;
          d.path = result[0].path;
          d.name = result[0].name;
          d.extension = result[0].extension;
          d.label = result[0].label;
          d.permission = result[0].permission;
          d.owner = result[0].owner;
        }
        return callback(err, d);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getUserLevel = function(idUser, callback) {
  console.log("relational.getUserLevel");
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserLevel(idUser),
      function(err, result) {
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          var d = new level();
          d.idLevel = result[0].idLevel;
          d.idUser = result[0].idUser;
          d.label = result[0].label;
          d.name = result[0].name;
          d.hexCode = result[0].hexCode;
          d.createDate = result[0].createDate;
          d.startDate = result[0].startDate;
          d.activityDate = result[0].activityDate;
          d.endDate = result[0].endDate;
        }
        return callback(err, d);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getUserLevelList = function(idUser, callback) {
  console.log("relational.getUserLevelList");
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserLevelList(idUser),
      function(err, result) {
        if (err) throw err;
        var lList = [];
        var d = null;
        if (result !== undefined && result.length > 0) {
          for (i = 0; i < result.length; i++) {
            var d = new level();
            d.idLevel = result[0].idLevel;
            d.idUser = result[0].idUser;
            d.label = result[0].label;
            d.name = result[0].name;
            d.hexCode = result[0].hexCode;
            d.createDate = result[0].createDate;
            d.startDate = result[0].startDate;
            d.activityDate = result[0].activityDate;
            d.endDate = result[0].endDate;
            d.index = result[0].index;
            lList.push(d);
          }
        }
        return callback(err, lList);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getUserPhone = function(idUser, callback) {
  console.log('relational.getUserPhone ' + idUser);
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserPhone(idUser),
      function(err, result) {
        if (err) throw err;
        var p = null;
        if (result !== undefined && result.length > 0) {
          p = new phone();
          p.number = result[0].number;
          p.idAccount = result[0].idAccount;
        }
        return callback(err, p);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
}

exports.getUserFileList = function(idUser, type, callback) {
  console.log("relational.getUserFileList");
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUserFileList(idUser, type),
      function(err, result) {
        if (err) throw err;
        var fList = [];
        if (result !== undefined && result.length > 0) {
          var f;
          for (i = 0; i < result.length; i++) {
            f = new file();
            f.idFile = result[i].idFile;
            f.idUser = result[i].idUser;
            f.path = result[i].path;
            f.name = result[i].name;
            f.extension = result[i].extension;
            f.label = result[i].label;
            f.permission = result[i].permission;
            f.owner = result[i].owner;
            f.addDate = result[i].addDate;
            fList.push(f);
          }
        }
        return callback(err, fList);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\""), null);
  }
};

exports.getUserProcedure = function(idUserA, idUserB, idProcedure, callback) {
  console.log('relational.getUserProcedure');
  if (typeof idUserA !== "undefined" && typeof idUserB !== "undefined" && typeof idProcedure !== "undefined") {
    database.getQueryResult(sql.selectUserProcedure(idUserA, idUserB, idProcedure),
      function(err, result) {
        if (err) {
          console.log(err);
        }
        var p = new procedure();
        if (result !== undefined && result.length > 0) {
          var c;
          p.idProcedure = result[0].idProcedure;
          p.idAccount = result[0].idAccount;
          p.idUser = idUserB;
          p.name = result[0].name;
          p.label = result[0].label;
          p.owner = result[0].owner;
          p.type = result[0].type;
          p.guid = result[0].guid;
          p.createDate = result[0].createDate;
          p.activityDate = result[0].activityDate;
          p.createDate = result[0].createDate;
          p.type = result[0].type;
          p.instructionList = [];
          p.identificationName = result[0].identificationName;
          p.signatureDate = result[0].signatureDate;
          p.idElementList = result[0].idElementList;
          p.permission = result[0].permission;
          if (p.signatureDate !== null && p.signatureDate !== undefined) {
            if (p.permission != 3) {
              p.permission = 1;
            }
          }
          for (var i = 0; i < result.length; i++) {
            if (result[i].idInstruction !== undefined && result[i].idInstruction !== null) {
              c = new instruction();
              c.idInstruction = result[i].idInstruction;
              c.statement = result[i].instructionStatement;
              c.description = result[i].instructionDescription;
              c.value = result[i].instructionValue + "";
              c.comment = result[i].instructionComment;
              c.duration = result[i].instructionDuration;
              c.time = result[i].instructionTime;
              c.activityDate = result[i].instructionActivityDate;
              c.createDate = result[i].instructionCreateDate;
              c.maximum = result[i].maximum;
              c.minimum = result[i].minimum;
              c.step = result[i].step;
              c.applicable = result[i].applicable;
              if (result[i] !== undefined) {
                c.label = JSON.parse(result[i].instructionLabel);
              }
              c.block = result[i].block;
              c.name = result[i].instructionName;
              c.type = result[i].instructionType;
              c.key = result[i].instructionKey;
              c.mask = result[i].instructionMask;
              p.instructionList.push(c);
            }
          }
        }
        return callback(err, p);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\" || typeof idProcedure === \"undefined\""), null);
  }
};

exports.getUserProcedureGUID = function(idUserA, idUserB, guid, callback) {
  console.log('relational.getUserProcedure');
  if (typeof idUserA !== "undefined" && typeof idUserB !== "undefined" && typeof guid !== "undefined") {
    database.getQueryResult(sql.selectUserProcedure(idUserA, idUserB, guid),
      function(err, result) {
        if (err) {
          console.log(err);
        }
        var p = new procedure();
        if (result !== undefined && result.length > 0) {
          var c;
          p.idProcedure = result[0].idProcedure;
          p.idAccount = result[0].idAccount;
          p.idUser = result[0].idUser;
          p.name = result[0].name;
          p.label = result[0].label;
          p.owner = result[0].owner;
          p.type = result[0].type;
          p.guid = result[0].guid;
          p.createDate = result[0].createDate;
          p.activityDate = result[0].activityDate;
          p.createDate = result[0].createDate;
          p.type = result[0].type;
          p.instructionList = [];
          p.identificationName = result[0].identificationName;
          p.signatureDate = result[0].signatureDate;
          p.permission = result[0].permission;
          if (p.signatureDate !== null && p.signatureDate !== undefined) {
            if (p.permission != 3) {
              p.permission = 1;
            }
          }
          for (var i = 0; i < result.length; i++) {
            if (result[i].idInstruction !== undefined && result[i].idInstruction !== null) {
              c = new instruction();
              c.idInstruction = result[i].idInstruction;
              c.statement = result[i].instructionStatement;
              c.description = result[i].instructionDescription;
              c.value = result[i].instructionValue + "";
              c.duration = result[i].instructionDuration;
              c.time = result[i].instructionTime;
              c.comment = result[i].instructionComment;
              c.activityDate = result[i].instructionActivityDate;
              c.createDate = result[i].instructionCreateDate;
              c.maximum = result[i].maximum;
              c.minimum = result[i].minimum;
              c.step = result[i].step;
              c.applicable = result[i].applicable;
              if (result[i] !== undefined) {
                c.label = JSON.parse(result[i].instructionLabel);
              }
              c.block = result[i].block;
              c.name = result[i].instructionName;
              c.type = result[i].instructionType;
              console.log('instruction type=' + c.type);
              c.key = result[i].instructionKey;
              c.mask = result[i].instructionMask;
              p.instructionList.push(c);
            }
          }
        }
        return callback(err, p);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\" || typeof idProcedure === \"undefined\""), null);
  }
};

exports.getUserProcedureSignature = function(idUser, idProcedure, callback) {
  if (typeof idUser !== "undefined" && typeof idProcedure !== "undefined") {
    database.getQueryResult(sql.selectUserProcedureSignature(idUser, idProcedure), function(err, result) {
      var s = null;
      if (result !== undefined && result.length > 0) {
        s = new signature();
        s.date = result[0].date;
      }
      callback(err, s);
    });
  } else {
    return callback(new Error("typeof idUser === \"undefined\" && typeof idProcedure === \"undefined\""), null);
  }
}
exports.getUserProcedureList = function(idUserA, idUserB, type, permission, callback) {
  console.log('relational.getUserProcedureList');
  if (typeof idUserA !== "undefined" && typeof idUserB !== "undefined") {
    database.getQueryResult(sql.selectUserProcedureList(idUserA, idUserB, type, permission),
      function(err, result) {
        var procedureList = [];
        var p;
        if (err) throw err;
        if (result !== undefined && result.length > 0) {
          for (i = 0; i < result.length; i++) {
            p = new procedure();
            p.idUser = result[i].idUser;
            p.idProcedure = result[i].idProcedure;
            p.name = result[i].name;
            p.label = result[i].label;
            p.signatureDate = result[i].signatureDate;
            p.createDate = result[i].createDate;
            p.activityDate = result[i].activityDate;
            p.completeDate = result[i].completeDate;
            p.type = result[i].type;
            p.guid = result[i].guid;
            p.userProcedureType = result[i].userProcedureType;
            p.identificationName = result[i].identificationName;
            p.permission = result[i].permission;
            if (p.signatureDate !== null && p.signatureDate !== undefined) {
              if (p.permission != 3) {
                p.permission = 1;
              }
            }
            p.owner = result[i].owner;
            procedureList.push(p);
          }
        }
        return callback(err, procedureList);
      });
  } else {
    return callback(new Error("typeof idUserA === \"undefined\" && typeof idUserB === \"undefined\""), null);
  }
};

exports.getUserProcedureOwnerUserIdentification = function(idProcedure, callback) {
  console.log('relational.getProcedureOwnerUserIdentification');
  if (typeof idProcedure !== "undefined") {
    database.getQueryResult(sql.selectUserProcedureOwnerUserIdentification(idProcedure),
      function(err, result) {
        if (err) throw err;
        var i = null;
        if (result !== undefined && result.length > 0) {
          i = identification();
          i.name = result[0].name;
        }
        return callback(null, i);
      });
  } else {
    return callback(new Error("typeof idProcedure === \"undefined\""), null);
  }
};

exports.getUserProject = function(idUserA, idUserB, idProject, callback) {
  console.log('relational.getUserProject');
  if (typeof idUserA !== "undefined" && typeof idUserB !== "undefined" && typeof idProject !== "undefined") {
    database.getQueryResult(sql.selectUserProject(idUserA, idUserB, idProject),
      function(error, result) {
        if (error) throw error;
        var p = new project();
        if (result !== undefined && result.length > 0) {
          var c;
          p.idProject = result[0].idProject;
          p.name = result[0].name;
          p.createDate = result[0].createDate;
          p.startDate = result[0].startDate;
          p.activityDate = result[0].activityDate;
          p.completeDate = result[0].completeDate;
          for (var i = 0; i < result.length; i++) {
            if (result[i].idBuilding !== undefined && result[i].idBuilding !== null) {
              c = new building();
              c.idBuilding = result[i].idBuilding;
              c.buildingName = result[i].buildingName;
              c.buildingNumber = result[i].buildingNumber;
              p.buildingList.push(c);
            }
          }
        }
        return callback(null, p);
      });
  } else {
    return callback(new Error("typeof idUserA === \"undefined\" || typeof idUserB === \"undefined\" || typeof idProject === \"undefined\""), null);
  }
};

exports.getUserProjectList = function(idUserA, idUserB, callback) {
  console.log('relational.getUserProjectList');
  if (typeof idUserA !== "undefined" && typeof idUserB !== "undefined") {
    database.getQueryResult(sql.selectUserProjectList(idUserA, idUserB),
      function(error, result) {
        if (error) throw error;
        var projectList = [];
        if (result !== undefined && result.length > 0) {
          var p = null;
          var b = null;
          var bList = [];
          var idProject = null;
          var idBuilding = null;
          for (i = 0; i < result.length; i++) {
            if (idProject !== result[i].idProject) {
              p = new project();
              bList = [];
              idProject = result[i].idProject;
              p.idProject = idProject;
              p.name = result[i].name;
              p.number = result[i].number;
              p.createDate = result[i].createDate;
              p.startDate = result[i].startDate;
              p.activityDate = result[i].activityDate;
              p.completeDate = result[i].completeDate;
              projectList.push(p);
            }
          }
        }
        return callback(null, projectList);
      });
  } else {
    return callback(new Error("typeof idUser === \"undefined\" || typeof idProject === \"undefined\""), null);
  }
};

// exports.setInstruction = function(c, callback) {
//   console.log('relational.updateInstruction');
//   if (typeof c !== "undefined") {
//     database.getQueryResult(sql.updateInstruction(c),
//       function(err, result) {
//         if (err) throw err;
//         return callback(err);
//       });
//   } else {
//     return callback(new Error("typeof instruction === \"undefined\""), null);
//   }
// };

exports.setInstructionValue = function(idInstruction, value, callback) {
  database.getQueryResult(sql.updateInstructionValue(idInstruction, value), function(err, result) {
    if (err) throw err;
    return callback(err);
  });
};

exports.setInstructionComment = function(idInstruction, comment, callback) {
  database.getQueryResult(sql.updateInstructionComment(idInstruction, comment), function(err, result) {
    if (err) throw err;
    return callback(err, null);
  });
};

exports.setProcedure = function(idUser, p, callback) {
  console.log('setProcedure');
  database.getQueryResult(sql.updateUserProcedure(idUser, p.idProcedure, p.permission, p.owner), function(err, result) {
    if (err) throw err;
    database.getQueryResult(sql.updateProcedure(p), function(err, result) {
      return callback(err);
    });
  });
};

exports.setProcedureActivityDate = function(idProcedure, callback) {
  database.getQueryResult(sql.updateProcedureActivityDate(idProcedure),
    function(err, result) {
      if (err) throw err;
      callback(err);
    });
};

exports.setProcedureCompleteDate = function(p, callback) {
  database.getQueryResult(sql.updateProcedureCompleteDate(p),
    function(err, result) {
      if (err) throw err;
      callback(err, null);
    });
};

exports.setProcedureNotApplicable = function(idProcedure, callback) {
  database.getQueryResult(sql.updateProcedureNotApplicable(idProcedure),
    function(err, result) {
      if (err) throw err;
      callback(err, null);
    });
};

exports.addQueueInstruction = function(idQueue, idInstruction, callback) {
  database.getQueryResult(sql.insertInstructionQueue(idInstruction, idQueue), function(err) {
    if (err) throw err;
    return callback(err);
  });
};

exports.setUserPassword = function(user, callback) {
  if (typeof user !== "undefined") {
    database.getQueryResult(sql.updateUserPassword(user), function(err, result, fields) {
      if (err) throw err;
    });
  } else {
    callback(new Error("typeof user === \"undefined\""), null);
  }
};

exports.setIdentification = function(identification, callback) {
  if (typeof identification !== "undefined") {
    database.getQueryResult(sql.updateIdentification(identification), function(err, result, fields) {
      if (err) throw err;
    });
  } else {
    return callback(new Error("typeof identification === \"undefined\""), null);
  }
};

exports.getNamePasswordUser = function(name, password, callback) {
  console.log("relational.getNamePasswordUser")
  this.getNameUser(name, function(err, user) {
    if (err) {
      return callback(err, null);
    } else {
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          return callback(err, null);
        } else {
          if (result) {
            database.getQueryResult(sql.updateUserLogin(user), function(err, result, fields) {
              return callback(err, user);
            });
          } else {
            return callback(null, null);
          }
        }
      });
    }
  });
};

exports.getNamePasswordHashUser = function(name, password, callback) {
  console.log("relational.getNamePasswordHashUser")
  this.getNameUser(name, function(err, user) {
    if (err) {
      return callback(err, null);
    } else {
      if (user.password == password) {
        database.getQueryResult(sql.updateUserLogin(user), function(err, result, fields) {
          console.log(user);
          return callback(err, user);
        });
      } else {
        return callback(null, null);
      }
    }
  });
};

exports.setInstruction = function(i, callback) {
  console.log('relational.setInstruction');
  database.getQueryResult(sql.insertInstruction(i),
    function(err, result) {
      callback(err);
    });
};

exports.cloneProcedure = function(p, callback) {
  console.log('relational.cloneProcedure');
  database.getQueryResult(sql.insertProcedure(p),
    function(err, result) {
      for (var i = 0; i < result.length; i++) {
        if (result[i].length > 0) {
          for (var j = 0; j < result[i].length; j++) {
            idProcedure = result[i][j]["@idProcedure"];
          }
        }
      }
      console.log('relational.cloneProcedure ' + idProcedure);
      callback(err, idProcedure);
    });
};

exports.setProjectProcedure = function(idProject, idProcedure, callback) {
  console.log('relational.setProjectProcedure');
  database.getQueryResult(sql.insertProjectProcedure(idProject, idProcedure), function(err, result) {
    callback(err);
  });
};

exports.setSignature = function(idUser, idProcedure, callback) {
  database.getQueryResult(sql.insertSignature(idUser, idProcedure),
    function(err, result, fields) {
      if (err) throw err;
      return callback(err, null);
    });
};

exports.setProcedureSignature = function(idUser, idProcedure, s, callback) {
  database.getQueryResult(sql.insertProcedureSignature(idUser, idProcedure, s),
    function(err) {
      return callback(err);
    });
};

exports.setUserProcedure = function(p, callback) {
  console.log('relational.setUserProcedure');
  database.getQueryResult(sql.insertUserProcedure(p),
    function(err) {
      return callback(err);
    });
};

exports.setUserProperties = function(idUser, p, callback) {
  console.log('relational.setUserProperties');
  database.getQueryResult(sql.updateUser(idUser, p.name, p.password), function(err) {
    if (err) {
      return callback(err);
    } else {
      database.getQueryResult(sql.updateUserEmail(idUser, p.email), function(err) {
        if (err) {
          database.getQueryResult(sql.insertUserEmail(idUser, p.email), function(err) {
            if (err) {
              return callback(err);
            } else {
              return callback(null);
            }
          });
        } else {
          return callback(null);
        }

      });
    }
  });
};

exports.getTest = function() {
  console.log('relational.test');


}
