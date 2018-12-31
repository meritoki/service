var Request = require("request");

exports.postLocation = function(req, res, next) {
    Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:3002/v1/location",
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



exports.postIDLocation = function(req, res, next) {
    Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:3002/v1/location/id",
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
