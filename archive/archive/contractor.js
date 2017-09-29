var user = require('./user.js');
var relational = require('../../model/relational.js');

exports.getFile = function (req, res, next) {
    var idContractor = req.params.idContractor;
    relational.getContractorUser(idContractor, function (error, u) {
        if (!error) {
            req.params.idUser = u.idUser;
        }
        user.getFile(req, res, next);
    });
};

exports.getIndex = function (req, res, next) {
    console.log('contractor.getIndex');
    var idContractor = req.params.idContractor;
    var role;
    relational.getContractor(idContractor, function (error, contractor) {
        if (error) {
            relational.getContractorList(role, function (error, contractorList) {
                req.params.contractorList = contractorList;
                user.getIndex(req, res, next);
            });
        } else {
            req.params.contractor = contractor;
            user.getIndex(req, res, next);
        }

    });
};

exports.getProcedure = function (req, res, next) {
    var idContractor = req.params.idContractor;
    relational.getContractorUser(idContractor, function (error, u) {
        if (!error) {
            req.params.idUser = u.idUser;
        }
        user.getProcedure(req, res, next);
    });
};

exports.getProject = function (req, res, next) {
    var idContractor = req.params.idContractor;
    relational.getContractorUser(idContractor, function (error, u) {
        if (!error) {
            req.params.idUser = u.idUser;
        }
        user.getProject(req, res, next);
    });
};

/*
 * Function returns sessions where the owner is the employee specified by "idEmployee"
 */
exports.getSession = function (req, res, next) {
    var idEmployee = req.params.idEmployee;
    var idSession = req.params.idSession;
    var user = req.user;
    var role = user.role;
    var idUser = user.idUser;
    var url = getURL();
    var menu = getMenu(role);
    if (isAuthorized(role, "general-manager,training-manager")) {
        relational.getEmployeeSession(idEmployee, idSession, function (error, session) {
            if (error) {
                relational.getEmployeeSessionList(idEmployee, function (error, sessionList) {
                    res.render('account/session', {
                        title: 'Session List',
                        url: url,
                        menu: menu,
                        sessionList: sessionList,
                        idEmployee: idEmployee,
                        generalManager: true,
                        trainingManager: true
                    });
                });
            } else {
                relational.getSessionElementList(idSession, function (error, elementList) {
                    relational.getSessionEmployeeList(idSession, function (error, employeeList) {
                        session.employeeList = employeeList;
                        session.elementList = elementList;
                        res.render('account/session', {
                            title: 'Session',
                            url: url,
                            menu: menu,
                            session: session,
                            idEmployee: idEmployee,
                            generalManager: true,
                            trainingManager: true
                        });

                    });
                });
            }
        });
    } else if (isAuthorized(role, "assessor")) {
        relational.getEmployeeSession(idEmployee, idSession, function (error, session) {
            if (error) {
                relational.getEmployeeSessionList(idEmployee, function (error, sessionList) {
                    res.render('account/session', {
                        title: 'Session List',
                        url: url,
                        menu: menu,
                        sessionList: sessionList,
                        idEmployee: idEmployee,
                        assessor: true
                    });
                });
            } else {
                relational.getSessionElementList(idSession, function (error, elementList) {
                    relational.getSessionEmployeeList(idSession, function (error, employeeList) {
                        session.employeeList = employeeList;
                        session.elementList = elementList;
                        res.render('account/session', {
                            title: 'Session',
                            url: url,
                            menu: menu,
                            session: session,
                            idEmployee: idEmployee,
                            assessor: true
                        });
                    });
                });
            }
        });
    } else {
        res.redirect("/not-authorized");
    }
};