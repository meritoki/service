
  var Request = require("request");


  exports.postIDUser = function(req, res, next) {
      var id = req.body.idUser;
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3001/v1/user/id",
        "body": JSON.stringify({
            "idUser": id
        })
      }, (error, response, body) => {
          if (error) {
            res.end(error);
          } else {
            res.end(body);
          }
      });
      // res.end("hello world");
  }

  exports.postUser= function(req, res, next) {
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3002/v1/user",
        "body": JSON.stringify(req.body)
      }, (error, response, body) => {
        if (error) {
          console.log(error);
          var status = 500;
          res.status(status).end(http.STATUS_CODES[status]);
        } else {
          res.end(JSON.stringify(body));
        }
      });
    }
