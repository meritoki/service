
var Browser = require("zombie");
var assert = require("assert");
  var browser = new Browser();
   browser.visit("http://test.mbidvd.org/onlinetesting/testtaking/login.cfm?DBID=MBI", function () {
       // fill in login field
       browser.fill('input[name=UserID]', 'HJonathan');
       // fill in password field
       browser.fill('input[name=Password]', 'H2282');
       // submit the form
       browser.document.forms[0].submit();
       // wait for new page to be loaded then fire callback function
       browser.wait().then(function () {
           console.log('Form submitted ok!');
           // the resulting page will be displayed in your default browser
           console.log(browser.dump());
       })
   });
