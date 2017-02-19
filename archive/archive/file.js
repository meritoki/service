var user = require('./user.js');
var relational = require('../../model/relational.js');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './model/media/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({
  storage: storage
}).single('userFile');

exports.postIndex = function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.redirect("File is uploaded");
  });

}


exports.getIndex = function(req, res, next) {
  console.log("user.getFile " + req.url);
  var view = ((req.url).indexOf("view") > -1) ? true : false;
  var type = ((req.url).indexOf("image") > -1) ? "image" : (((req.url).indexOf("document") > -1) ? "document" : (((req.url).indexOf("video") > -1) ? "video" : ((req.url).indexOf("audio") > -1) ? "audio" : undefined));
  var user = req.user;
  var role = user.role;
  var url = getURL();
  var menu = getMenu(role);
  var idFile = req.params.idFile;
  var idContractor = req.params.idContractor;
  var idEmployee = req.params.idEmployee;
  var idUser = user.idUser;
  if (isAuthorized(role, "general-manager,quality-manager,safety-manager,supervisor,mentor,worker,assessor")) {
    relational.getUserFile(idUser, idFile, type, function(error, file) {
      if (error) {
        relational.getUserFileList(idUser, type, function(error, fileList) {
          if (error) throw error;
          res.render('account/file', {
            title: 'FILES',
            fileList: fileList,
            type: type,
            menu: menu
          });
        });
      } else {
        if (view) {
          if (file.extension === 'pdf') {
            fs.readFile('./model' + file.path + file.name + '.' + file.extension, function(error, data) {
              res.contentType("application/pdf");
              res.send(data);
            });
          }
        } else {
          var p = '../../model/' + file.path + '/' + file.name + '.' + file.extension;
          res.download(path.resolve(__dirname, '' + p));
        }
      }
    });
  } else {
    res.redirect("/not-authorized");
  }
};
