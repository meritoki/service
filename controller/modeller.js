var model = require('../model');

// console.log(model.relational);
console.log(model.object);
console.log(model.relational.sql.selectIDUser(1));
model.relational.getIDUser(1,function(e,u){
  console.log(u);
});
  
