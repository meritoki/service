/**
 * Name: oauth2.js
 * Date: 2015-07-08
 */
var oauth2orize = require('oauth2orize'),
  passport = require('passport'),
  connectEnsureLogin = require('connect-ensure-login'),
  token = require('./token');
  var Request = require("request");

var server = oauth2orize.createServer();

server.serializeClient(function(client, done) {
  console.log('oauth2.serializeClient');
  return done(null, client.identification);
});

server.deserializeClient(function(identification, done) {
  console.log('oauth2.deserializeClient ' + identification);
  console.log('authentication.passportOauth2ClientPasswordStrategy ' + identification);
  Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/v1/auth/client",
    "body": JSON.stringify({
        "identification": identification
    })
  }, (error, response, body) => {
      if(error) {
          return done(error,null);
      }
      var client = null;
      try {
        client = JSON.parse(body);
      } catch (e) {
          console.log(e);
      }
      console.log("oauth2.deserializeClient: "+client);
      return done(null, client);
  });
  // relational.getIdentificationClient(identification, function(err, client) {
  //   if (err) {
  //     return done(err);
  //   }
  //   return done(null, client);
  // });
});

server.grant(oauth2orize.grant.code(function(client, redirectURI, user, ares, done) {
  var value = token.uid(16);
  console.log('oauth2.grant');
  Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/v1/auth/code",
    "body": JSON.stringify({
        "value": value,
        "idClient": client.idClient,
        "idUser": user.idUser,
        "redirectURI":redirectURI
    })
  }, (error, response, body) => {
      if(error) {
          return done (error,null);
      }
      var code = null;
      try {
        var code = JSON.parse(body);
      } catch (e) {
          console.log(e);
      }
      console.log(code.value);
      return done(null, code.value);
  });
  //
  // relational.setCode(value, client.idClient, user.idUser, redirectURI, function(err) {
  //   done(err, value);
  // });
}));

server.exchange(oauth2orize.exchange.code(function(client, value, redirectURI, done) {
  console.log('oauth2.exchange'); // + code);
  console.log(client);
  console.log(value);
  console.log(redirectURI);
  Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/v1/auth/code",
    "body": JSON.stringify({
        "key": value
    })
  }, (error, response, body) => {
      var code = null;
      try {
        var code = JSON.parse(body);
      } catch (e) {
          console.log(e);
      }
      try {
        client = JSON.parse(client);
      } catch (e) {
          console.log(e);
      }
      console.log(client.secret);
      if(error) {
          return done(error);
      }
      if (code === undefined) {
        return done(null, false);
      }
      console.log(client.idClient +" "+code.idClient);
      if (client.idClient !== code.idClient) {
        return done(null, false);
      }
      if (redirectURI !== code.redirectURI) {
        return done(null, false);
      }
      Request.del({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/v1/auth/code",
        "body": JSON.stringify({
            "key": code.value
        })
      }, (error, response, body) => {
          if(error) {
              return done(error);
          }
          var value = token.uid(256);
          Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/v1/auth/token",
            "body": JSON.stringify({
                "token": value,
                "idUser": client.idUser,
                "idClient": client.idClient
            })
          }, (error, response, body) => {
              var code = null;
              try {
                var code = JSON.parse(body);
              } catch (e) {
                  console.log(e);
              }
              if(error) {
                  return done(error);
              }
              return done(null, value);
          });
      });
  });
  // relational.getCode(value, function(err, code) {
  //   if (err) {
  //     console.log(err);
  //     return done(err);
  //   }
  //   if (code === undefined) {
  //     return done(null, false);
  //   }
  //   if (client.idClient + '' !== code.idClient + '') {
  //     return done(null, false);
  //   }
  //   if (redirectURI !== code.redirectURI) {
  //     return done(null, false);
  //   }
  //   relational.removeCode(code.value, function(err) {
  //     if (err) {
  //       console.log(err);
  //       return done(err);
  //     }
  //     var value = token.uid(256);
  //     relational.setToken(value, code.idUser, code.idClient, function(err) {
  //       if (err) {
  //         return done(err);
  //       } else {
  //         return done(null, value);
  //       }
  //     });
  //   });
  // });
}));

exports.authorization = [
  connectEnsureLogin.ensureLoggedIn('/api/login'),
  server.authorization(function(identification, redirectURI, done) {
    console.log('oauth2.authorization ' + identification);
    Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:3000/v1/auth/client",
      "body": JSON.stringify({
          "identification": identification
      })
    }, (error, response, body) => {
        if(error) {
            return done(error,null);
        }
        var client = JSON.parse(body);
        return done(null,client,redirectURI);
    });
    // relational.getIdentificationClient(identification, function(err, client) {
    //   if (err) {
    //     console.log(err);
    //     return done(err);
    //   }else{
    //   // WARNING: For security purposes, it is highly advisable to check that
    //   //          redirectURI provided by the client matches one registered with
    //   //          the server.  For simplicity, this example does not.  You have
    //   //          been warned.
    //     console.log('oauth2.authorization ' + identification+' '+JSON.stringify(client));
    //     return done(null, client, redirectURI);
    //   }
    // });
  }),
  function(req, res) {
    menu = {
      'HOME': '/',
      'LOGOUT': '/logout'
    }
    res.render('public/dialog', {
      transactionID: req.oauth2.transactionID,
      title: "OAUTH2",
      menu: menu,
      user: req.user,
      client: req.oauth2.client
    });
  }
]

exports.decision = [
  connectEnsureLogin.ensureLoggedIn(),
  server.decision()
]

exports.token = [
  passport.authenticate(['basic', 'oauth2-client-password'], {
    session: false
  }),
  server.token(),
  server.errorHandler()
]
