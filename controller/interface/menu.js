exports.getUser = function(idEmployee, role) {
  var m = {};
  if (role.indexOf(",") > -1) {
    m = this.getUser(idEmployee, role.split(",")[0]);
  } else {
    if (('general-manager').indexOf(role) > -1) {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'FILE': '/employee/' + idEmployee + '/file',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (('quality-manager,training-manager,safety-manager').indexOf(role) > -1) {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'supervisor') {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'worker') {
      m = {
        'ELEMENTS': '/employee/' + idEmployee + '/element',
        'RECORDS': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'assessor') {
      m = {
        'PROJECTS': '/employee/' + idEmployee + '/project',
        'FILES': '/employee/' + idEmployee + '/file',
        'RECORDS': '/employee/' + idEmployee + '/record'
      }
    }
  }
  return m;
};

function getMenu(role) {
  var m = {};
  if (role.indexOf(",") > -1) {
    m = getMenu(role.split(",")[0]);
  } else {
    if (('general-manager').indexOf(role) > -1) {
      m = {
        'ACCOUNT': '/account',
        'PROJECTS': '/project',
        'EMPLOYEES': '/employee',
        'PROCEDURES': '/procedure',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'RECORD': '/record',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (('quality-manager,training-manager,safety-manager').indexOf(role) > -1) {
      m = {
        'ACCOUNT': '/account',
        'PROJECTS': '/project',
        'EMPLOYEES': '/employee',
        'PROCEDURES': '/procedure',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (role === 'supervisor') {
      m = {
        'HOME': '/account',
        'PROJECTS': '/project',
        'EMPLOYEES': '/employee',
        'PROCEDURES': '/procedure',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (role === 'worker') {
      m = {
        'ACCOUNT': '/account',
        'ELEMENTS': '/element',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else if (role === 'assessor') {
      m = {
        'ACCOUNT': '/account',
        'EMPLOYEES': '/employee',
        'PROJECTS': '/project',
        'TRAINING': '/training',
        'RESOURCE': '/resource',
        'FILES': '/file',
        'LOGOUT': '/logout'
      }
    } else {
      m = {
        'HOME': '/account',
        'LOGIN': '/login'
      }
    }
  }
  return m;
};

exports.getMenu = getMenu;

var getUserMenu = function(idEmployee, role) {
  var m = {};
  if (role.indexOf(",") > -1) {
    m = getUserMenu(idEmployee, role.split(",")[0]);
  } else {
    if (('general-manager').indexOf(role) > -1) {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'FILE': '/employee/' + idEmployee + '/file',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (('quality-manager,training-manager,safety-manager').indexOf(role) > -1) {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'supervisor') {
      m = {
        'PROJECT': '/employee/' + idEmployee + '/project',
        'PROCEDURE': '/employee/' + idEmployee + '/procedure',
        'ELEMENT': '/employee/' + idEmployee + '/element',
        'TRAINING': '/employee/' + idEmployee + '/training',
        'RECORD': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'worker') {
      m = {
        'ELEMENTS': '/employee/' + idEmployee + '/element',
        'RECORDS': '/employee/' + idEmployee + '/record'
      }
    } else if (role === 'assessor') {
      m = {
        'PROJECTS': '/employee/' + idEmployee + '/project',
        'FILES': '/employee/' + idEmployee + '/file',
        'RECORDS': '/employee/' + idEmployee + '/record'
      }
    }
  }
  return m;
};

var getTrainingMenu = function(idEmployee) {
  var m = {
    'ELEMENT': '/employee/' + idEmployee + '/element',
    'RESOURCE': '/employee/' + idEmployee + '/resource',
    'RECORD': '/employee/' + idEmployee + '/record'
  }
  return m;
};

var getResourceMenu = function(idEmployee) {
  var m = {
    'ELEMENT': '/employee/' + idEmployee + '/element',
    'TRAINING': '/employee/' + idEmployee + '/training',
    'RECORD': '/employee/' + idEmployee + '/record'
  }
  return m;
};

var getRecordMenu = function(idEmployee) {
  var m = {
    'ELEMENT': '/employee/' + idEmployee + '/element',
    'TRAINING': '/employee/' + idEmployee + '/training',
    'RESOURCE': '/employee/' + idEmployee + '/resource'
  }
  return m;
};

var getElementMenu = function(idEmployee) {
  var m = {
    'TRAINING': '/employee/' + idEmployee + '/training',
    'RESOURCE': '/employee/' + idEmployee + '/resource',
    'RECORD': '/employee/' + idEmployee + '/record'
  }
  return m;
};
