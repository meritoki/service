/*
 * compile.js
 * Script
 */
var relational = require('./relational.js');
var database = require('./database.js');
var properties = require('./properties.js');
var controllerProperties = require('../controller/properties.js');
var controllerRelational = require('./relational.js');
var controllerDatabase = require('./database.js');

var user = require('./object/user.js');
var procedure = require('./object/procedure.js');
var instruction = require('./object/instruction.js');

console.log("Merit Builder Data Compiler");
console.log("Version 0.1.0");

controllerDatabase.setProperties(controllerProperties);
controllerRelational.setDatabase(controllerDatabase);


var array = properties.array;

for (var i = 0; i < array.length; i++) {
    properties.database.schema = array[i];
    database.setProperties(properties);
    relational = require('./relational' + properties.map[i + ''] + '.js');
    relational.setDatabase(database);
    if (properties.map[i + ''] === '-0.16.0') {
        relational.getEmployeeList(function (err, eList) {
            console.log(eList);
            var e = null;
            for (var j = 0; j < eList.length; j++) {
                e = eList[j];
                if (e !== null) {
                    relational.getEmployeeProcedureList(e.idEmployee, function (err, pList) {
                        console.log(pList);
                    });
                }
            }
        });
    } else {

        relational.getEmployeeList("", function (err, eList) {
            console.log(eList);
            var e = null;
            for (var j = 0; j < eList.length; j++) {
                e = eList[j];
                if (e !== null) {
                    relational.getUserProcedureList(e.idUser, e.idUser, function (err, pList) {
                        console.log(pList);
                    });
                }
            }
        });

    }
}



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


sleep(10000);


//database.getQueryResult('drop tables;', function (err, result) {
//    console.log(result);
//});
//
//relational.getEmployeeList("supervisor", function (err, eList) {
//    console.log(eList);
//});