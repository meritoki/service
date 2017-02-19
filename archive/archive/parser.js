var relational = require('../../model/relational.js');
var properties = require('../properties.js');
var fs = require('fs');
var path = require('path');
var bcrypt = require('bcryptjs');
var exec = require('child_process').exec,
  child;

exports.post = function(req, res, next) {
  var user = req.user;
  var role = user.role;
  if (isAuthorized(role, "general-manager,quality-manager,safety-manager,supervisor,mentor,worker,assessor")) {
    relational.getUserFile(idUser, idFile, type, function(error, file) {
      child = exec('/usr/bin/java -jar ' + properties.jar.parser,
        function(error, stdout, stderr) {
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
    });
  }
}


// var exec = require('child_process').exec, child;
// child = exec('/usr/bin/java -jar ~/Applications/example.jar',
//   function (error, stdout, stderr){
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if(error !== null){
//       console.log('exec error: ' + error);
//     }
// });
