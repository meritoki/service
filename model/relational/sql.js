exports.selectIDClient = function (idClient) {
    return 'SELECT id, name, identification, secret FROM Client where idClient=' + idClient;
}

exports.selectIdentificationClient = function (identification) {
    return 'SELECT id, name, identification, secret FROM Client where identification=\'' + identification + '\';';
}

exports.insertCode = function (idAccount, value, idClient, idUser, redirectURI) {
    return 'INSERT INTO `Code` (value,idClient,idUser,redirectURI) VALUES (\'' + value + '\',' + idClient + ',' + idUser + ',\'' + redirectURI + '\');';
}

exports.insertToken = function (value, idClient, idUser, redirectURI) {
    return 'INSERT INTO `Token` (value,idClient,idUser) VALUES (\'' + value + '\',' + idClient + ',' + idUser + ');';
}

exports.insertUserEmail = function (idUser, address) {
    return 'INSERT INTO `Email` (`idUser`,`address`) VALUES (' + idUser + ',\'' + address + '\');';
};

exports.insertCode = function (value, idClient, idUser, redirectURI) {
    return 'INSERT INTO `Code` (value,idClient,idUser,redirectURI) VALUES (\'' + value + '\',' + idClient + ',' + idUser + ',\'' + redirectURI + '\');';
}

exports.insertToken = function (value, idClient, idUser, redirectURI) {
    return 'INSERT INTO `Token` (value,idClient,idUser) VALUES (\'' + value + '\',' + idClient + ',' + idUser + ');';
}

exports.deleteCode = function (key) {
    return 'DELETE FROM `Code` where value=\'' + key + '\';';
}

exports.selectCode = function (key) {
    return 'SELECT id,idClient,idUser,redirectURI, value FROM `Code` where value=\'' + key + '\';';
}

exports.selectToken = function (key) {
    return 'SELECT id,idClient,idUser, value FROM `Token` where value=\'' + key + '\';';
}

exports.selectNameUser = function (name) {
    return 'SELECT u.id, u.idAccount, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email FROM User u LEFT OUTER JOIN Email e ON e.idUser=u.id WHERE name = \'' + name + '\';';
};

exports.selectIDClient = function (idClient) {
    return 'SELECT id, name, identification, secret FROM Client where idClient=' + idClient;
}

exports.selectIdentificationClient = function (identification) {
    return 'SELECT id, name, identification, secret FROM Client where identification=\'' + identification + '\';';
}

exports.selectIDUser = function (idUser) {
    return 'SELECT u.idUser, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, '+
    'e.address AS email, '+
    'q.idFile, q.path, q.name, q.extension '+
    'FROM User u '+
    'LEFT OUTER JOIN Email e ON e.idUser=u.idUser '+
    'LEFT OUTER JOIN '+
    '(SELECT f.idFile, f.path, f.name, f.extension, f.createDate, f.label, '+
    'uf.idUser,uf.permission, uf.owner, uf.addDate '+
    'FROM File f '+
    'INNER JOIN UserFile uf ON f.idFile=uf.idFile '+
    'INNER JOIN User u ON u.idUser = uf.idUser '+
    'WHERE f.name=\'profile\' AND uf.idUser='+idUser+') '+
    'AS q ON q.idUser=u.idUser '+
    'WHERE u.idUser = ' + idUser + ';';
    // SELECT u.idUser, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email, q.path AS path FROM User u LEFT OUTER JOIN Email e ON e.idUser=u.idUser  WHERE u.idUser = 1;
};

exports.updateUser = function (idUser, name, password) {
    return 'UPDATE User SET name=\'' + name + '\', password=\'' + password + '\' WHERE idUser=\'' + idUser + '\';';
};

exports.updateUserEmail = function (idUser, address) {
    return 'UPDATE Email SET address=\'' + address + '\' WHERE idUser=\'' + idUser + '\';';
};

exports.updateUserLogin = function (user) {
    return 'UPDATE User SET login=login + 1, activityDate=NOW() WHERE id=\'' + user.idUser + '\';';
};

exports.updateUserPassword = function (user) {
    return 'UPDATE User SET password=\'' + user.password + '\', activityDate=NOW() WHERE idUser=\'' + user.idUser + '\';';
};

exports.updateIdentification = function (identification) {
    var query = 'UPDATE Identification SET ';
    if (identication.name !== null) {
        query += 'name=' + identification.name + ' ';
    }
    if (identification.firstName !== null) {
        query += ' firstname=' + identification.firstname + ' ';
    }
    query += ' WHERE idIdentifaction=' + identification.idIdentification + ';'
    return query;
};
