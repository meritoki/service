/*
 * Name: properties.js
 * Author: Joaquin Osvaldo Rodriguez
 * Date: 201807
 * Copyright: 2018 Meritoki 2018 All Rights Reserved
 */
var properties = {}

properties.name = "web";
properties.version = "0.1";
properties.api = true;
properties.web = {};
//app
properties.web.app = {};
properties.web.app.switch = true;
properties.web.app.https = 443;
properties.web.app.http = 8080;
properties.web.app.maintenance = {};
properties.web.app.maintenance.switch = false;
properties.web.app.maintenance.date = "November 20, 2015 01:00 AM"
properties.web.app.session = {};
properties.web.app.session.maxAge = 7200000; //1 hour in milliseconds
properties.web.app.session.secret = 'color';
//service
properties.web.service = {};
properties.web.service.switch = true;
properties.web.service.https = 443;
properties.web.service.http = 8080;
properties.web.service.maintenance = {};
properties.web.service.maintenance.switch = false;
properties.web.service.session = {};
properties.web.service.session.maxAge = 7200000; //1 hour in milliseconds
properties.web.service.session.secret = 'color';

properties.feature = {};
properties.feature.switch = true;
//0.37.0
properties.maintenance = {};
properties.maintenance.switch = false;
properties.maintenance.date = "November 20, 2015 01:00 AM"
properties.cookie = {};
properties.cookie.secret = '123';
properties.database = {};
properties.database.vendor = 'mysql';
properties.database.schema = 'web';
properties.database.hostname = 'localhost';
properties.database.password = 'ncrsb';
properties.database.username = 'root';
properties.email = {};
properties.email.address = 'meritoki@gmail.com';
properties.email.password = '';
properties.email.service = 'Gmail';
properties.https = false;
properties.host = 'metanoia.com';
properties.log = {};
properties.log.path = '/var/log/meritoki/metanoia/';
properties.log.filename = 'app.express';
properties.phone = {};
properties.phone.provider = 'twilio';
properties.phone.acountSID = '';
properties.phone.authToken = '';
properties.phone.from='';
properties.port = {};
properties.port.http = '8080';
properties.port.https = '8443';
properties.security = {};
properties.security.keyPath = './controller/security/key/key.pem';
properties.security.certificatePath = './controller/security/certificate/*/*.crt';
properties.security.certificateExternalCAPath = './controller/security/certificate/*/*.crt';
properties.security.certificateTrustCAPath = './controller/security/certificate/*/*.crt';
properties.security.certificateDomainValidationPath = './controller/security/certificate/*/*.crt';
properties.session = {};
properties.session.maxAge = 7200000; //1 hour in milliseconds
properties.session.secret = 'color';
module.exports = properties;
