
  var Request = require("request");


  exports.postEmailVerification = function(req, res, next) {
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3004/v1/msg/email/verification",
        "body": JSON.stringify({
            "to": req.body.to
        })
      }, (error, response, body) => {
          if (error) {
            res.end(error);
          } else {
            res.end(body);
          }
      });
  }

  exports.getVerify = function(req, res, next) {
      Request.get({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3004/v1/msg/email/verify",
        "qs": {
            "mail": req.query.mail,
            "id": req.query.id
        }
      }, (error, response, body) => {
          if (error) {
            res.end(error);
          } else {
            res.end(body);
          }
      });
  }
