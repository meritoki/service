var fs = require("fs");
var relational = require('../model/relational.js');
var fileName = 'selected-employee.json';
var fs = require('fs');
var data;
var count = 0;
var loop = 3;
var flag = true;

while ((count < loop) && flag) {
  count++;
  try {
    data = fs.readFileSync(fileName);
    flag = false;
  } catch (e) {
    if (e instanceof Error) {
      if (e.code === 'ENOENT') {
        console.log('Creating file');
        fs.writeFileSync(fileName, JSON.stringify([]), "utf8");
      } else {
        throw e;
      }
    }
  }
}
var selectedEmployee = JSON.parse(data);
var select = {};
var employee = null;
var index = null;
var max = 0;
var min = 0;



var t = function(b) {
  var flag = true;
  if (b > 0) {
    relational.getEmployeeList('worker', function(error, employeeList) {
      max = employeeList.length - 1;
      index = Math.round(Math.random() * (max - min) + min);
      employee = employeeList[index];
      console.log(employee.name);
      select.idUser = employee.idUser;
      select.name = employee.name;
      select.date = new Date();
      console.log(select);
      for (var i = 0; i < selectedEmployee.length; i++) {
        employee = selectedEmployee[i];
        if (employee.idUser + "" === select.idUser + "") {
          flag = false;
        }
      }
      if (flag) {
        selectedEmployee.push(select);
        fs.writeFileSync(fileName, JSON.stringify(selectedEmployee), "utf8");
        return t(-1);
      } else {
        console.log("retry");
        return t(1);
      }
    });
  }
}

t(1);




// // And then, to read it...
// myJson = require("./filename.json");
