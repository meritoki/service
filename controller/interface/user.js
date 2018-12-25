
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
