  var Request = require("request");

  exports.postID = function(req, res, next) {
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3003/v1/id",
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



  exports.postIDID = function(req, res, next) {
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3003/v1/id/id",
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
