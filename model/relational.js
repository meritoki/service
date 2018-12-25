/*
 * Name: relational.js
 * Author: Joaquin Rodriguez
 * Date: 201506
 * Copyright: 2018 Meritoki All Rights Reserved
 */

var database = require('./database.js');
var sql = require('./relational/sql.js');
var bcrypt = require('bcryptjs');
var client = require('./object/client.js');
var identification = require('./object/identification.js');
var phone = require('./object/phone.js');
var user = require('./object/user.js');
var token = require('./object/token.js');
var code = require('./object/code.js');

exports.setDatabase = function(d) {
  database = d;
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

exports.getNamePasswordUser = function(name, password, callback) {
  console.log("relational.getNamePasswordUser")
  this.getNameUser(name, function(err, user) {
    if (err) {
      //return callback(err, null);
      return callback(null,null);
    } else {
      console.log('bcrypt compare');
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          return callback(err, null);
        } else {
          if (result) {
            console.log('bcrypt success');
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

exports.getIDClient = function(idClient, callback) {
  console.log('relational.getIDClient');
  if (typeof idClient !== "undefined") {
    database.getQueryResult(sql.selectIDClient(idClient), function(err, result) {
      if (err) throw err;
      var c = null;
      if (result !== undefined && result.length > 0) {
        c = new client();
        c.idClient = result[0].id;
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
