/*
 * Name: public.js
 * Author: Joaquin Rodriguez
 * Date: 201511
 */
var properties = require('../properties.js');
var passport = require('passport');

var menu = {
  'HOME': '/',
  'LOGIN': '/login'
};

var getMenu = function(role) {
  var m = {};
  m = {
    'HOME': '/',
    'LOGIN': '/login'
  }
  return m;
};

exports.getAPILogin = function(req, res) {
  var user = req.user;
  if (user !== undefined) {
    var role = user.role;
    menu = getMenu(role);
  }
  res.render('public/login', {
    menu: menu,
    action: '/api/login',
    title: 'LOGIN'
  })
}

exports.getAPILoginFailure = function(req, res) {
  var user = req.user;
  if (user !== undefined) {
    var role = user.role;
    menu = getMenu(role);
  }
  res.render('public/login', {
    title: 'LOGIN FAILURE',
    action: '/api/login',
    menu: menu,
    message: 'Please check your username or password and try again'
  });
}



//POST
exports.getLogout = function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    }
  })
  req.logout();
  res.redirect('/');
}


exports.postAPILogin = passport.authenticate('local', {
  // successReturnToOrRedirect: '/',
  successReturnToOrRedirect: '/',
  failureRedirect: '/api/login/failure'
});
