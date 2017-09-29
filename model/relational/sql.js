/*
 * Name: relational.js
 * Author: Joaquin Rodriguez
 * Date: 201506
 * Copyright: 2015 Merit Builders, Inc. All Rights Reserved
 */

var idAccount = 1;

exports.deleteFile = function (idFile) {
    return 'DELETE FROM File WHERE idFile=' + idFile + ';';
};

exports.deleteProcedure = function (idProcedure) {
    return 'DELETE FROM Proc WHERE idProcedure=' + idProcedure + ';';
};

exports.insertInstruction = function (c) {
    return 'INSERT INTO `Instruction` (`idAccount`,`createDate`, `statement`, `value`, `duration`,`idProcedure`,`idUser`, `maximum`,`minimum`,`step`,`applicable`,`name`,`description`,`label`,`block`,`type`,`key`,`mask`) ' +
        'VALUES ('+idAccount+',NOW(), \'' + c.statement + '\', ' + c.value + ', ' +c.duration+', '+ c.idProcedure + ', ' + c.idUser + ',' + c.maximum + ', ' + c.minimum + ',' + c.step + ',' + c.applicable + ', \'' + c.name + '\',\'' + c.description + '\',\'' + JSON.stringify(c.label) + '\',\'' + c.block + '\',\'' + c.type + '\',' + c.key + ',\'' + c.mask + '\');';
}

exports.insertInstructionQueue = function (idInstruction, idQueue) {
    return 'INSERT INTO `InstructionQueue` (`idAccount`, `idInstruction`, `idQueue`) ' +
        'VALUES (' + idAccount + ', ' + idInstruction + ', ' + idQueue + ');';
}

exports.insertFile = function (f) {
    return 'INSERT INTO File SET idAccount=' + p.idAccount + ',name=\'' + p.name + '\',createDate=NOW(),activityDate=\'0000-00-00 00:00:00\',completeDate=\'' + p.completeDate + '\';';
};

exports.insertProcedure = function (p) {
    var query = 'INSERT INTO Proc SET idAccount=' + p.idAccount + ',guid=\'' + p.guid + '\',name=\'' + p.name + '\',label=\'' + p.label + '\',type=\'' + p.type + '\',createDate = NOW(), activityDate = \'0000-00-00 00:00:00\',completeDate=\'' + p.completeDate + '\';';
    query+= 'SET @idProcedure=LAST_INSERT_ID();'
    var iList = p.instructionList;
    var i;
    var e;
    for (var x = 0; x < iList.length; x++) {
      i = iList[x];
      query+='INSERT INTO `Instruction` (`idAccount`,`createDate`, `statement`, `value`, `duration`,`idProcedure`, `maximum`,`minimum`,`step`,`applicable`,`name`,`description`,`label`,`block`,`type`,`key`,`mask`) ' +
         'VALUES ('+idAccount+',NOW(), \'' + i.statement + '\', ' + i.value + ', ' +(i.duration===undefined?0:i.duration)+', @idProcedure, ' + i.maximum + ', ' + i.minimum + ',' + i.step + ',' + (i.applicable===undefined?0:i.applicable) + ', \'' + i.name +
         '\', \'' + i.description + '\',\'' + JSON.stringify(i.label) + '\',\'' + i.block + '\',\'' + i.type + '\',' +
         (i.key===undefined?0:i.key) + ',\'' + (i.mask===undefined?null:i.mask) + '\');';
      query+='SET @idInstruction=LAST_INSERT_ID();'
      if(i.elementList !== undefined && i.elementList !== 'undefined' && i.elementList !== null){
          for(var j=0;j<i.elementList.length;j++){
            e = i.elementList[j];
            query+='INSERT INTO `InstructionElement` (`idAccount`,`idInstruction`,`idElement`) VALUES ('+p.idAccount+',@idInstruction,'+e.idElement+');';
          }
      }
    }
    query+="SELECT @idProcedure;"
    return query;
};

exports.insertProjectProcedure = function (idProject, idProcedure) {
    return 'INSERT INTO `ProjectProcedure` (`idAccount`,`idProject`,`idProcedure`) VALUES ('+idAccount+',' + idProject + ',' + idProcedure + ');';
};

exports.insertSignature = function (idUser, idProcedure) {
    return 'INSERT INTO `Signature` (`idAccount`,`idUser`,`date`,`idProcedure`) ' +
        'VALUES ('+idAccount+',' + idUser + ', NOW(), ' + idProcedure + ');';
};

exports.insertProcedureSignature = function (idUser, idProcedure, s) {
    return 'INSERT INTO `Signature` (`idAccount`,`idUser`,`date`,`idProcedure`) ' +
        'VALUES ('+idAccount+',' + idUser + ', \'' + s.date + '\', ' + idProcedure + ');';
};

exports.insertUserFile = function (idUser, f) {
    return 'INSERT INTO `UserFile` (`idAccount`,`idUser`,`idFile`,`permission`,`owner`) VALUES ('+idAccount+',' + idUser + ',' + f.idFile + ',\'' + f.permission + '\',\'' + f.owner + '\');';
};

exports.insertUserLevel = function (idUser,idLevel,createDate,startDate,activityDate,endDate,index) {
    return 'INSERT INTO UserLevel (`idAccount`,idUser,idLevel,createDate,startDate,activityDate,endDate,index) ' +
    'VALUES ('+idAccount+','+idUser+', '+idLevel+', '+createDate+', '+startDate+', '+activityDate+', '+endDate+', '+index+');';
}

exports.insertUserProcedure = function (p) {
    return 'INSERT INTO `UserProcedure` (`idAccount`,`idUser`,`idProcedure`,`permission`,`owner`) VALUES ('+idAccount+','+ p.idUser + ',' + p.idProcedure + ',' + p.permission + ',' + p.owner + ');';
};

exports.insertUserEmail = function (idUser, address) {
    return 'INSERT INTO `Email` (`idAccount`,`idUser`,`address`) VALUES ('+idAccount+',' + idUser + ',\'' + address + '\');';
};

exports.insertCode = function (idAccount, value, idClient, idUser, redirectURI) {
    return 'INSERT INTO `Code` (idAccount,value,idClient,idUser,redirectURI) VALUES (' + idAccount + ',\'' + value + '\',' + idClient + ',' + idUser + ',\'' + redirectURI + '\');';
}

exports.insertToken = function (value, idClient, idUser, redirectURI) {
    return 'INSERT INTO `Token` (idAccount,value,idClient,idUser) VALUES (' + idAccount + ',\'' + value + '\',' + idClient + ',' + idUser + ');';
}

exports.deleteCode = function (key) {
    return 'DELETE FROM `Code` where value=\'' + key + '\';';
}

exports.selectCode = function (key) {
    return 'SELECT idCode,idClient,idUser,redirectURI, value FROM `Code` where value=\'' + key + '\';';
}

exports.selectToken = function (key) {
    return 'SELECT idToken,idClient,idUser, value FROM `Token` where value=\'' + key + '\';';
}

exports.selectInstructionList = function (idProcedure) {
    return 'SELECT * FROM Instruction WHERE idProcedure=' + idProcedure + ';';
};

exports.selectContractor = function (idContractor) {
    return 'SELECT u.idUser, u.role, i.name, c.hireDate, c.idEmployee FROM Contractor c INNER JOIN User u ON u.idUser=c.idUser INNER JOIN Identification i ON u.idUser=i.idUser WHERE c.idContractor=' + idContractor + ';';
};

exports.selectContractorList = function (role) {
    var condition = 'ORDER BY u.role ASC';
    if (typeof role !== "undefined") {
        condition = 'WHERE u.role=' + role;
    }
    return 'SELECT u.idUser, u.role, i.name, e.hireDate, e.idContractor FROM Contractor e INNER JOIN User u ON u.idUser=e.idUser INNER JOIN Identification i ON u.idUser=i.idUser ' + condition + ';';
};

exports.selectElement = function (idElement) {
    return 'call selectElement(' + idElement + ');';
};

exports.selectElementActionList = function (idElement) {
    return 'select e.parent, act.name from Element e Inner join ElementAction ea ON ea.idElement = e.idElement Inner join `Action` act on act.idAction = ea.idAction where e.idElement =' + idElement + ';';
};

//exports.selectElementList = function () {
//    return 'Select e9.name AS name9, e9.idElement AS idElement9, e8.name AS name8,e8.idElement AS idElement8,e7.name AS name7,e7.idElement AS idElement7,e6.name AS name6, e6.idElement AS idElement6, e5.name AS name5, e5.idElement AS idElement5, e4.name AS name4, e4.idElement AS idElement4, e3.name AS name3, e3.idElement AS idElement3, e2.name AS name2, e2.idElement AS idElement2, e1.name AS name1,e1.idElement AS idElement1 From Element AS e1  LEFT OUTER JOIN Element AS e2 ON e2.parent = e1.idElement LEFT OUTER JOIN Element AS e3 ON e3.parent = e2.idElement LEFT OUTER JOIN Element AS e4 ON e4.parent = e3.idElement LEFT JOIN Element AS e5 ON e5.parent = e4.idElement LEFT JOIN Element AS e6 ON e6.parent = e5.idElement LEFT JOIN Element AS e7 ON e7.parent = e6.idElement LEFT JOIN Element AS e8 ON e8.parent = e7.idElement LEFT JOIN Element AS e9 ON e9.parent = e8.idElement where e1.parent=0 ORDER BY name1,name2,name3,name4,name5,name6 ASC;';
//};

exports.selectElementName = function (idElement) {
    return 'call selectElementName(' + idElement + ')';
};

exports.selectEmployee = function (idEmployee) {
    return 'SELECT u.idUser, u.role, i.name, e.hireDate, e.idEmployee FROM Employee e INNER JOIN User u ON u.idUser=e.idUser INNER JOIN Identification i ON u.idUser=i.idUser WHERE e.idEmployee=' + idEmployee + ';';
};

exports.selectEmployeeList = function (role) {
    var condition1 = 'ORDER BY i.lastName, u.role ASC';
    var condition2 = '';
    if (typeof role !== "undefined") {
        condition1 = '';
        condition2 = 'WHERE u.role=\'' + role + '\'';
    }
    return 'SELECT u.idUser, u.role, i.name, i.nickName, ' +
        'e.hireDate, e.idEmployee, ' +
        'GROUP_CONCAT(t.identification SEPARATOR ",") AS identification ' +
        'FROM Employee e INNER JOIN User u ON u.idUser=e.idUser INNER JOIN Identification i ON u.idUser=i.idUser LEFT OUTER JOIN UserTag ut ON ut.idUser=u.idUser LEFT OUTER JOIN Tag t ON t.idTag=ut.idTag ' + condition2 + ' GROUP BY u.idUser '+condition1+';';
};

exports.selectEmployeeTagList = function (idEmployee){
  return 'SELECT t.identification FROM Tag t INNER JOIN UserTag ut ON ut.idTag = t.idTag INNER JOIN User u ON u.idUser=ut.idUser INNER JOIN Employee e ON e.idUser=u.idUser WHERE e.idEmployee='+idEmployee+';';
};

exports.selectEmployeeUser = function (idEmployee) {
    return 'SELECT u.idUser, i.name FROM User u INNER JOIN Employee e ON u.idUser=e.idUser LEFT OUTER JOIN Identification i ON i.idUser = u.idUser WHERE e.idEmployee=' + idEmployee + ';';
};

exports.selectQueueList = function () {
    return 'SELECT ' +
        'q.idQueue, q.name ' +
        'FROM Queue q;';
}

exports.selectQueue = function (idQueue) {
    return 'SELECT ' +
        'q.idQueue, q.name AS queueName, ' +
        'p.idProcedure, p.idAccount, p.name, p.createDate AS procedureCreateDate, p.activityDate AS procedureActivityDate, p.completeDate AS procedureCompleteDate, ' +
        'c.idInstruction, c.statement AS instructionStatement, c.description AS instructionDescription, c.value AS instructionValue, c.maximum, c.minimum, c.activityDate AS instructionActivityDate, c.step AS instructionStep, c.createDate AS instructionCreateDate, c.applicable, c.block AS instructionBlock, c.name AS instructionName, c.label AS instructionLabel, c.com AS instructionComment,c.type AS instructionType,c.key AS instructionKey,c.mask AS instructionMask ' +
        'FROM InstructionQueue qi ' +
        'LEFT OUTER JOIN Instruction c ON c.idInstruction = qi.idInstruction ' +
        'LEFT OUTER JOIN Proc p ON p.idProcedure = c.idProcedure ' +
        'LEFT OUTER JOIN Queue q ON q.idQueue = qi.idQueue ' +
        'WHERE qi.idQueue = ' + idQueue + ';';
};

exports.selectLevelList = function () {
    return 'SELECT ' +
        '* ' +
        'FROM Level l;';
}

exports.selectProcedure = function (idProcedure) {
    return 'SELECT ' +
        'p.idProcedure, p.type, p.idAccount, p.name AS procedureName, p.createDate AS procedureCreateDate, p.activityDate AS procedureActivityDate, p.completeDate AS procedureCompleteDate,p.guid, ' +
        'c.idInstruction, c.statement AS instructionStatement, c.description AS instructionDescription, c.value AS instructionValue, c.maximum, c.minimum, c.activityDate AS instructionActivityDate, c.step AS instructionStep, c.createDate AS instructionCreateDate, c.applicable, c.block AS instructionBlock, c.name AS instructionName, c.label AS instructionLabel, c.com AS instructionComment,c.type AS instructionType,c.key AS instructionKey,c.mask AS instructionMask ' +
        'FROM Proc p ' +
        'Left JOIN Instruction c ON p.idProcedure=c.idProcedure ' +
        'WHERE p.idProcedure=' + idProcedure + ';';
};

exports.selectProcedureGUID = function (guid) {
    return 'SELECT ' +
        'p.idProcedure, p.type, p.idAccount, p.name AS procedureName, p.guid, p.createDate AS procedureCreateDate, p.activityDate AS procedureActivityDate, p.completeDate AS procedureCompleteDate,p.guid, ' +
        'c.idInstruction, c.statement AS instructionStatement, c.description AS instructionDescription, c.value AS instructionValue, c.maximum, c.minimum, c.activityDate AS instructionActivityDate, c.step AS instructionStep, c.createDate AS instructionCreateDate, c.applicable, c.block AS instructionBlock, c.name AS instructionName, c.label AS instructionLabel, c.com AS instructionComment,c.type AS instructionType,c.key AS instructionKey,c.mask AS instructionMask ' +
        'FROM Proc p ' +
        'Left JOIN Instruction c ON p.idProcedure=c.idProcedure ' +
        'WHERE p.guid=\'' + guid + '\';';
};

exports.selectProcedureElementList = function (idProcedure) {
    return 'SELECT ' +
        'e.idElement, e.name ' +
        'FROM Element e ' +
        'INNER JOIN ProcedureElement pe ON pe.idElement=e.idElement ' +
        'WHERE pe.idProcedure=' + idProcedure + ';';
};

exports.selectProcedureUserList = function (idProcedure) {
    return 'SELECT ' +
        'i.name, ' +
        'u.idUser ' +
        'FROM User u ' +
        'INNER JOIN UserProcedure up ON up.idUser=u.idUser ' +
        'INNER JOIN Identification i ON i.idUser = u.idUser ' +
        'WHERE up.idProcedure=' + idProcedure + ';';
};

exports.selectProject = function (idProject) {
    return 'SELECT ' +
        'p.idProject,p.name, p.number, p.createDate, p.startDate, p.activityDate, p.completeDate, ' +
        'b.idBuilding, b.name AS buildingName, b.number AS buildingNumber, b.name AS buildingName, b.createDate AS buildingCreateDate, b.activityDate AS buildingActivityDate, b.completeDate AS buildingCompleteDate ' +
        'FROM Project p ' +
        'LEFT OUTER JOIN Building b ON b.idProject=p.idProject ' +
        'WHERE p.idProject=' + idProject + ';';
};

exports.selectProjectBuilding = function (idBuilding) {
    return 'SELECT b.name, b.number ' +
        'FROM Building b ' +
        'WHERE b.idBuilding = ' + idBuilding + ';';
};

exports.selectProjectBuildingList = function (idProject) {
    return 'SELECT b.name, b.number, b.idProject, b.idBuilding ' +
        'FROM Building b ' +
        'WHERE b.idProject = ' + idProject + ';';
};

exports.selectProjectProcedure = function (idProject, idProcedure) {
    return 'SELECT ' +
        'proj.name, proj.idProject, ' +
        'p.idProcedure, p.idAccount, p.name, p.createDate AS procedureCreateDate, p.activityDate AS procedureActivityDate, p.completeDate AS procedureCompleteDate, ' +
        'c.idInstruction, c.statement AS instructionStatement, c.value AS instructionValue, c.maximum, c.minimum, c.activityDate AS instructionActivityDate, c.createDate AS instructionCreateDate, c.applicable, c.block, c.name AS instructionName, c.com AS instructionComment, ' +
        'i.name AS identificationName ' +
        'FROM Proc p ' +
        'LEFT JOIN Instruction c ON p.idProcedure=c.idProcedure ' +
        'INNER JOIN ProjectProcedure pp ON p.idProcedure=pp.idProcedure ' +
        'INNER JOIN Project proj ON proj.idProject = pp.idProject ' +
        'LEFT OUTER JOIN Signature sig ON sig.idProcedure = p.idProcedure ' +
        'LEFT OUTER JOIN User u ON sig.idUser = u.idUser ' +
        'INNER JOIN Identification i ON i.idUser = u.idUser ' +
        'WHERE p.idProcedure=' + idProcedure + ' AND proj.idProject=' + idProject + ';';
};

exports.selectProjectProcedureList = function (idProject) {
    return 'SELECT ' +
        'proj.name, proj.idProject, ' +
        'p.idProcedure, ' +
        'p.name AS procedureName, p.label AS procedureLabel, p.createDate AS procedureCreateDate, p.activityDate AS procedureActivityDate, p.completeDate AS procedureCompleteDate, ' +
        'sig.date AS signatureDate, ' +
        'u.name AS userName ' +
        'FROM Project proj ' +
        'INNER JOIN ProjectProcedure projp ON proj.idProject = projp.idProject ' +
        'INNER JOIN Proc p ON p.idProcedure = projp.idProcedure ' +
        'LEFT OUTER JOIN Signature sig ON sig.idProcedure = p.idProcedure ' +
        'LEFT OUTER JOIN User u ON sig.idUser = u.idUser ' +
        'LEFT OUTER JOIN Identification i ON i.idUser = u.idUser ' +
        'WHERE proj.idProject=' + idProject + ';';
};

exports.selectProjectProcedureListByName = function (idProject, name) {
    return 'SELECT ' +
        'proj.name, proj.idProject, ' +
        'p.idProcedure, ' +
        'p.name AS procedureName, p.label AS procedureLabel, p.createDate AS procedureCreateDate, p.activityDate AS procedureActivityDate, p.completeDate AS procedureCompleteDate, ' +
        'sig.date AS signatureDate, ' +
        'u.name AS userName ' +
        'FROM Project proj ' +
        'INNER JOIN ProjectProcedure projp ON proj.idProject = projp.idProject ' +
        'INNER JOIN Proc p ON p.idProcedure = projp.idProcedure ' +
        'LEFT OUTER JOIN Signature sig ON sig.idProcedure = p.idProcedure ' +
        'LEFT OUTER JOIN User u ON sig.idUser = u.idUser ' +
        'LEFT OUTER JOIN Identification i ON i.idUser = u.idUser ' +
        'WHERE proj.idProject=' + idProject + ' AND p.name=\'' + name + '\';';
};

exports.selectProjectUserList = function (idProject) {
    return 'SELECT User.role, Employee.idEmployee, Employee.idUser, Identification.name AS employeeName FROM Project INNER JOIN EmployeeProject ON Project.idProject = EmployeeProject.idProject INNER JOIN Employee ON Employee.idEmployee = EmployeeProject.idEmployee INNER JOIN User ON Employee.idUser = User.idUser INNER JOIN Identification ON Identification.idUser=User.idUser WHERE Project.idProject=' + idProject + ' ORDER BY User.role ASC;';
};

exports.selectNameUser = function (name) {
    return 'SELECT u.idUser, u.idAccount, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email FROM User u LEFT OUTER JOIN Email e ON e.idUser=u.idUser WHERE name = \'' + name + '\';';
};

exports.selectIDClient = function (idClient) {
    return 'SELECT idClient, name, identification, secret FROM Client where idClient=' + idClient;
}

exports.selectIdentificationClient = function (identification) {
    return 'SELECT idClient, name, identification, secret FROM Client where identification=\'' + identification + '\';';
}

exports.selectIDUser = function (idUser) {
    return 'SELECT u.idUser, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, '+
    'e.address AS email, '+
    'q.idFile, q.path, q.name, q.extension '+
    'FROM User u '+
    'LEFT OUTER JOIN Email e ON e.idUser=u.idUser '+
    'LEFT OUTER JOIN '+
    '(SELECT f.idFile, f.path, f.name, f.extension, f.createDate, f.label, '+
    'uf.idUser,uf.permission, uf.owner, uf.addDate '+
    'FROM File f '+
    'INNER JOIN UserFile uf ON f.idFile=uf.idFile '+
    'INNER JOIN User u ON u.idUser = uf.idUser '+
    'WHERE f.name=\'profile\' AND uf.idUser='+idUser+') '+
    'AS q ON q.idUser=u.idUser '+
    'WHERE u.idUser = ' + idUser + ';';
    // SELECT u.idUser, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email, q.path AS path FROM User u LEFT OUTER JOIN Email e ON e.idUser=u.idUser  WHERE u.idUser = 1;
};

// 20160122 Commented out original, re-write of function above: selectIDUser, to add path for profile image file.
// exports.selectIDUser = function (idUser) {
//     return 'SELECT u.idUser, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email '+
//     'FROM User u LEFT OUTER JOIN Email e ON e.idUser=u.idUser WHERE u.idUser = ' + idUser + ';';
// };

exports.selectUserContractor = function (idUser) {
    return 'SELECT u.idUser, i.name, c.hireDate, c.idContractor FROM Contractor c INNER JOIN User u ON u.idUser=c.idUser INNER JOIN Identification i ON u.idUser=i.idUser LEFT OUTER JOIN Email e ON e.idUser=u.idUser WHERE u.idUser=' + idUser + ';';
};

exports.selectUserElementList = function(idUserA,idUserB){
    return "call SelectUserElementList("+idUserA+","+idUserB+")";
}

exports.selectUserEmployee = function (idUser) {
    return 'SELECT u.idUser, i.name AS employeeName, e.hireDate, e.idEmployee FROM Employee e INNER JOIN User u ON u.idUser=e.idUser INNER JOIN Identification i ON u.idUser=i.idUser LEFT OUTER JOIN Email em ON em.idUser=u.idUser WHERE u.idUser=' + idUser + ';';
};

exports.selectUserFile = function (idUser, idFile, type) {
    var condition = (type === "document") ? ' f.extension=\'pdf\' OR f.extension=\'docx\'' : ((type === "image") ? 'f.extension=\'jpg\' OR f.extension=\'jpeg\' OR f.extension=\'png\' OR f.extension=\'gif\'' : ((type === "video") ? 'f.extension=\'mp4\' OR f.extension=\'avi\' OR f.extension=\'wav\'' : ((type === "audio") ? 'f.extension=\'mp3\' OR f.extension=\'mpa\'' : '')));
    if (condition != '') {
        condition = ' AND (' + condition + ')';
    }
    return 'SELECT ' +
        'f.idFile, f.path, f.name, f.extension, f.createDate, f.label,' +
        'uf.permission, uf.owner, uf.addDate ' +
        'FROM File f ' +
        'INNER JOIN UserFile uf ON f.idFile=uf.idFile ' +
        'INNER JOIN User u ON u.idUser = uf.idUser ' +
        'WHERE f.idFile=' + idFile + ' AND uf.idUser=' + idUser + condition + ';';
};

exports.selectUserFileProfileImage = function (idUser) {
    return 'SELECT ' +
        'f.idFile, f.path, f.name, f.extension, f.createDate, f.label,' +
        'uf.permission, uf.owner, uf.addDate ' +
        'FROM File f ' +
        'INNER JOIN UserFile uf ON f.idFile=uf.idFile ' +
        'INNER JOIN User u ON u.idUser = uf.idUser ' +
        'WHERE f.name=\'profile\' AND uf.idUser=' + idUser + ';';
};

exports.selectUserFileList = function (idUser, type) {
    var instruction = (type === "document") ? ' f.extension=\'pdf\' OR f.extension=\'docx\'' : ((type === "image") ? ' f.extension=\'jpg\' OR f.extension=\'jpeg\' OR f.extension=\'png\' OR f.extension=\'gif\'' : ((type === "video") ? ' f.extension=\'mp4\' OR f.extension=\'avi\' OR f.extension=\'wav\'' : ((type === "audio") ? ' f.extension=\'mp3\' OR f.extension=\'mpa\'' : '')));
    if (instruction != '') {
        instruction = ' AND (' + instruction + ')';
    }
    return 'SELECT ' +
        'f.idFile, f.path, f.name, f.extension, f.createDate, f.label, ' +
        'uf.permission, uf.owner, uf.addDate ' +
        'FROM File f ' +
        'INNER JOIN UserFile uf ON f.idFile=uf.idFile ' +
        'INNER JOIN User u ON u.idUser = uf.idUser ' +
        'WHERE uf.idUser=' + idUser + instruction + ';';
};

exports.selectUserLevel = function (idUser) {
    return 'SELECT ' +
        'ul.startDate, ul.activityDate, ul.createDate, ' +
        'u.idUser, u.role, ' +
        'l.name, l.label, l.idLevel, l.hexCode ' +
        'from UserLevel ul '+
        'JOIN (Select idUser,max(createDate) as createDate '+
        'from UserLevel group by idUser) q on q.idUser=ul.idUser and ul.createDate=q.createDate '+
        'INNER JOIN Level l ON ul.idLevel=l.idLevel ' +
        'LEFT OUTER JOIN User u ON u.idUser=ul.idUser ' +
        'where ul.idUser=' + idUser + ' order by ul.idUser Desc;'
};

exports.selectUserLevelList = function (idUser) {
    return 'SELECT * '+
    'from Level l ' +
    'INNER JOIN UserLevel ul ON ul.idLevel=l.idLevel ' +
    'LEFT OUTER JOIN User u ON u.idUser=ul.idUser ' +
    'WHERE ul.idUser = ' + idUser + ' ORDER BY ul.index ASC;';
};

exports.selectUserProcedure = function (idUserA, idUserB, idProcedure) {
    return 'SELECT ' +
        'q.idUser, q.owner, q.permission, ' +
        'i.name AS identificationName,' +
        'c.idInstruction, c.type AS instructionType, c.key AS instructionKey, c.mask AS instructionMask, c.statement AS instructionStatement, c.description AS instructionDescription, c.value AS instructionValue, c.duration AS instructionDuration, c.time AS instructionTime,c.maximum, c.minimum, c.step, c.activityDate AS instructionActivityDate, c.createDate AS instructionCreateDate, c.block, c.name AS instructionName, c.com AS instructionComment, c.applicable, c.label AS instructionLabel, ' +
        'p.idProcedure, p.name, p.label, p.createDate, p.activityDate, p.completeDate, p.type, p.guid, ' +
        'up2.type AS userProcedureType, ' +
        'sig.date AS signatureDate ' +
        'FROM UserProcedure up2 ' +
        'INNER JOIN ' +
        '(SELECT up.idUser, up.idProcedure, up.permission, up.owner ' +
        'FROM UserProcedure up ' +
        'WHERE up.idUser=' + idUserA + ' AND up.permission>0) ' + //A
        'AS q ' +
        'ON q.idProcedure=up2.idProcedure ' +
        'INNER JOIN Proc p ON p.idProcedure = up2.idProcedure ' +
        'LEFT JOIN Instruction c ON p.idProcedure=c.idProcedure ' +
        'LEFT OUTER JOIN Signature sig ON sig.idProcedure=up2.idProcedure ' +
        'LEFT OUTER JOIN Identification i ON i.idUser=up2.idUser ' +
        'WHERE up2.idUser=' + idUserB + ' AND up2.idProcedure=\'' + idProcedure + '\' ' +
        'ORDER BY c.block ASC;';
};

exports.selectUserProcedureSignature = function (idUser, idProcedure) {
    return 'SELECT ' +
        '* ' +
        'FROM Signature s ' +
        'WHERE s.idUser=' + idUser + ' AND idProcedure=' + idProcedure;
}

exports.selectUserPhone = function(idUser){
  return 'SELECT '+
        '* '+
        'FROM Phone p '+
        'WHERE p.idUser='+idUser;
}

exports.selectElementList = function () {
    return 'call selectElementList()';
};

exports.selectElementProcedureList = function (idProcedureArray) {
    return 'SELECT ' +
        'p.idProcedure, p.name, p.label, p.createDate, p.activityDate, p.completeDate, p.type, p.guid ' +
        'FROM Proc p ' +
        'WHERE p.idProcedure in (' + idProcedureArray + ');';
};

exports.selectProcedureElementList = function (idElement) {
    return 'call selectProcedureElementList(' + idElement + ')';
};

exports.selectProcedureInstructionElementList = function(idProcedure){

  return 'SELECT e.name, e.idElement FROM InstructionElement ie INNER JOIN Instruction i ON i.idInstruction=ie.idInstruction INNER JOIN Element e ON e.idElement=ie.idElement WHERE i.idProcedure='+idProcedure+';';
}


exports.selectUserProcedureList = function (idUserA, idUserB, type, permission) {
    var condition = (type === "inspection") ? 'p.type=\'inspection\'' : ((type === "session") ? 'p.type=\'session\'' : ((type === "test") ? 'p.type=\'test\'' : ''));
    if (condition !== '') {
        condition = ' AND (' + condition + ')';
    }
    var condition2 = (permission !== null && permission > 0 && permission < 4)?'up2.permission='+permission:'';
    if (condition2 !== '') {
        condition2 = ' AND (' + condition2 + ')';
    }
    return 'SELECT ' +
        'q.idUser, q.owner, q.permission, ' +
        'i.name AS identificationName,' +
        'p.idProcedure, p.name, p.label, p.createDate, p.activityDate, p.completeDate, p.type, p.guid, ' +
        'up2.type AS userProcedureType, ' +
        'sig.date AS signatureDate ' +
        'FROM UserProcedure up2 ' +
        'INNER JOIN ' +
        '(SELECT up.idUser, up.idProcedure, up.permission, up.owner ' +
        'FROM UserProcedure up ' +
        'WHERE up.idUser=' + idUserA + ' AND up.permission>0) ' + //A
        'AS q ' +
        'ON q.idProcedure=up2.idProcedure ' +
        'INNER JOIN Proc p ON p.idProcedure = up2.idProcedure ' +
        'LEFT OUTER JOIN Signature sig ON sig.idProcedure=up2.idProcedure ' +
        'LEFT OUTER JOIN Identification i ON i.idUser=up2.idUser ' +
        'WHERE up2.idUser=' + idUserB + condition + condition2+ ' ORDER BY p.completeDate, p.activityDate, p.createDate, q.permission DESC;';
};

exports.selectUserRecordList = function (idUser, role) {
    var query = 'SELECT ' +
        'c.idInstruction, c.name, c.statement, c.description, AVG(c.value) AS average, c.maximum, c.minimum, c.step, c.block,  c.label ' +
        'FROM UserProcedure ep2 ' +
        'INNER JOIN ' +
        '(SELECT ep.idUser, ep.idProcedure, ep.permission, ep.owner ' +
        'FROM UserProcedure ep ' +
        'INNER JOIN Proc p ON p.idProcedure=ep.idProcedure ' +
        'INNER JOIN User u ON u.idUser = ep.idUser';
    if (typeof role !== "undefined" && role !== null) {
        query += ' WHERE ep.owner=1 AND u.role LIKE \'' + role + '\'';
    }
    query += ') ' +
        'AS q ON q.idProcedure=ep2.idProcedure ' +
        'INNER JOIN Proc p2 ON p2.idProcedure = ep2.idProcedure ' +
        'INNER JOIN Instruction c ON c.idProcedure = p2.idProcedure ' +
        'WHERE ep2.owner=0 AND ep2.idUser=' + idUser + ' AND c.value > -1 ' +
        'GROUP BY c.name;';
    return query;
};

exports.selectUserRecordList = function (idUser, role) {
    var query = 'SELECT ' +
        'c.idInstruction, c.name, c.statement, c.description, AVG(c.value) AS average, c.maximum, c.minimum, c.step, c.block,  c.label ' +
        'FROM UserProcedure ep2 ' +
        'INNER JOIN ' +
        '(SELECT ep.idUser, ep.idProcedure, ep.permission, ep.owner ' +
        'FROM UserProcedure ep ' +
        'INNER JOIN Proc p ON p.idProcedure=ep.idProcedure ' +
        'INNER JOIN User u ON u.idUser = ep.idUser';
    if (typeof role !== "undefined" && role !== null) {
        query += ' WHERE ep.owner=1 AND u.role LIKE \'' + role + '\'';
    }
    query += ') ' +
        'AS q ON q.idProcedure=ep2.idProcedure ' +
        'INNER JOIN Proc p2 ON p2.idProcedure = ep2.idProcedure ' +
        'INNER JOIN Instruction c ON c.idProcedure = p2.idProcedure ' +
        'WHERE ep2.owner=0 AND ep2.idUser=' + idUser + ' AND c.value > -1 ' +
        'GROUP BY c.name;';
    return query;
};

exports.selectUserStatisticList = function (idUser, role) {
    var query = 'SELECT ' +
        'c.idInstruction, c.name, c.statement, c.description, AVG(c.value) AS average, c.maximum, c.minimum, c.step, c.block,  c.label ' +
        'FROM UserProcedure ep2 ' +
        'INNER JOIN ' +
        '(SELECT ep.idUser, ep.idProcedure, ep.permission, ep.owner ' +
        'FROM UserProcedure ep ' +
        'INNER JOIN Proc p ON p.idProcedure=ep.idProcedure ' +
        'INNER JOIN User u ON u.idUser = ep.idUser';
    query += ') ' +
        'AS q ON q.idProcedure=ep2.idProcedure ' +
        'INNER JOIN Proc p2 ON p2.idProcedure = ep2.idProcedure ' +
        'INNER JOIN Instruction c ON c.idProcedure = p2.idProcedure ' +
        'WHERE ep2.owner=0 AND ep2.idUser=' + idUser + ' AND c.value > -1 ';
        if (typeof role !== "undefined" && role !== null) {
            query += ' WHERE ep.owner=1 AND u.role LIKE \'' + role + '\' ';
        }
        query+='GROUP BY c.name;';

    return query;
};

exports.selectUserProject = function (idUserA, idUserB, idProject) {
    return 'SELECT ' +
        'q.idUser, q.owner, q.permission, ' +
        'i.name AS identificationName,' +
        'p.idProject, p.name,  p.createDate, p.startDate, p.activityDate, p.completeDate ' +
        'FROM UserProject up2 ' +
        'INNER JOIN ' +
        '(SELECT up.idUser, up.idProject, up.permission, up.owner ' +
        'FROM UserProject up ' +
        'WHERE up.idUser=' + idUserA + ' AND up.permission>0) ' + //A
        'AS q ' +
        'ON q.idProject=up2.idProject ' +
        'INNER JOIN Project p ON p.idProject = up2.idProject ' +
        'LEFT OUTER JOIN Identification i ON i.idUser=up2.idUser ' +
        'LEFT OUTER JOIN Building b ON b.idProject=p.idProject ' +
        'WHERE up2.idUser=' + idUserB + ' AND up2.idProject=' + idProject + ';';
}

exports.selectUserProjectList = function (idUserA, idUserB) {
    return 'SELECT ' +
        'q.idUser, q.owner, q.permission, ' +
        'i.name AS identificationName,' +
        'p.idProject, p.name, p.number,  p.createDate, p.startDate, p.activityDate, p.completeDate, ' +
        'b.idBuilding, b.name AS buildingName, b.number AS buildingNumber, b.name AS buildingName, b.createDate AS buildingCreateDate, b.activityDate AS buildingActivityDate, b.completeDate AS buildingCompleteDate ' +
        'FROM UserProject up2 ' +
        'INNER JOIN ' +
        '(SELECT up.idUser, up.idProject, up.permission, up.owner ' +
        'FROM UserProject up ' +
        'WHERE up.idUser=' + idUserA + ' AND up.permission>0) ' + //A
        'AS q ' +
        'ON q.idProject=up2.idProject ' +
        'INNER JOIN Project p ON p.idProject = up2.idProject ' +
        'LEFT OUTER JOIN Building b ON b.idProject=p.idProject ' +
        'LEFT OUTER JOIN Identification i ON i.idUser=up2.idUser ' +
        'WHERE  up2.idUser=' + idUserB + ' ' + //up2.owner=1 AND
        'GROUP BY p.completeDate, p.activityDate, p.startDate, p.number DESC;';
};

exports.updateInstructionValue = function (idInstruction, value) {
    return 'UPDATE Instruction SET value=' + value + ', activityDate=NOW() WHERE idInstruction = ' + idInstruction + ';';
};

exports.updateInstructionComment = function (idInstruction, comment) {
    return 'UPDATE Instruction SET com=\'' + comment + '\', activityDate=NOW() WHERE idInstruction = ' + idInstruction + ';';
};

exports.updateProcedure = function (p) {
    return 'UPDATE Proc SET createDate=\'' + p.createDate + '\', activityDate=\'' + p.activityDate + '\', completeDate=\'' + p.completeDate + '\' WHERE idProcedure=' + p.idProcedure;
};

exports.updateProcedureActivityDate = function (idProcedure) {
    return 'UPDATE Proc SET activityDate=NOW() WHERE idProcedure=' + idProcedure;
};

exports.updateProcedureActivityDate = function (idProcedure) {
    return 'UPDATE Proc SET activityDate=NOW() WHERE idProcedure=' + idProcedure;
};

exports.updateProcedureCompleteDate = function (p) {
    return 'UPDATE Proc SET completeDate=NOW() WHERE idProcedure=' + p.idProcedure;
};

exports.updateProcedureNotApplicable = function (idProcedure) {
    return 'UPDATE Instruction SET value=\'-1\' WHERE idProcedure=' + idProcedure + ';';
};

exports.updateUser = function (idUser, name, password) {
    return 'UPDATE User SET name=\'' + name + '\', password=\'' + password + '\' WHERE idUser=\'' + idUser + '\';';
};

exports.updateUserEmail = function (idUser, address) {
    return 'UPDATE Email SET address=\'' + address + '\' WHERE idUser=\'' + idUser + '\';';
};

exports.updateUserLogin = function (user) {
    return 'UPDATE User SET login=login + 1, activityDate=NOW() WHERE idUser=\'' + user.idUser + '\';';
};

exports.updateUserPassword = function (user) {
    return 'UPDATE User SET password=\'' + user.password + '\', activityDate=NOW() WHERE idUser=\'' + user.idUser + '\';';
};

exports.updateUserProcedure = function (idUser, idProcedure, permission, owner) {
    return 'UPDATE UserProcedure SET permission=' + permission + ', owner=' + owner + ' WHERE idProcedure=' + idProcedure + ' AND idUser=' + idUser + ';';
};

exports.updateIdentification = function (identification) {
    var query = 'UPDATE Identification SET ';
    if (identication.name !== null) {
        query += 'name=' + identification.name + ' ';
    }
    if (identification.firstName !== null) {
        query += ' firstname=' + identification.firstname + ' ';
    }
    query += ' WHERE idIdentifaction=' + identification.idIdentification + ';'
    return query;
};

exports.test = function () {
  var idEmployee = 1;
  var idUser = 1;
  var idProcedure = 1;

  var s = this.selectEmployeeUser(idEmployee);
  console.log(s);
  s = this.selectIDUser(idUser);
  console.log(s);
  s = this.selectUserFileProfileImage(idUser);
  console.log(s);
  s = this.selectIDClient(idUser);
  console.log(s);
}

this.test();
