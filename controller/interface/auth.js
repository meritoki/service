
  var Request = require("request");


  exports.postIDAuth = function(req, res, next) {
      var idUser = req.body.idUser;
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/v1/auth/id",
        "body": JSON.stringify({
            "idUser": idUser
        })
      }, (error, response, body) => {
          if (error) {
            res.end(error);
          } else {
            res.end(body);
          }
      });
  }

  exports.postNameAuth = function(req, res, next) {
      var name = req.body.name;
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/v1/auth/name",
        "body": JSON.stringify({
            "name": name
        })
      }, (error, response, body) => {
          if (error) {
            res.end(error);
          } else {
            res.end(body);
          }
      });
  }

  exports.postNamePasswordAuth = function(req, res, next) {
      var name = req.body.name;
      var password = req.body.password;
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/v1/auth/name/password",
        "body": JSON.stringify({
            "name": name,
            "password": password
        })
      }, (error, response, body) => {
          if (error) {
            res.end(error);
          } else {
            res.end(body);
          }
      });
  }
