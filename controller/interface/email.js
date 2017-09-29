var nodemailer = require("nodemailer");
var properties = require("../properties");

var email = function (to, from, replyTo, subject, text, html) {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: properties.email.service,
        auth: {
            user: properties.email.address,
            pass: properties.email.password
        }
    });
    var option = {
        to: to,
        from: from,
        replyTo: replyTo,
        subject: subject,
        text: text,
        html: html
    };
    smtpTransport.sendMail(option, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.message);
        }
        smtpTransport.close();
    });
}
exports.sendEmail = email;