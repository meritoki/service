var phone = require('./interface/phone.js');
var relational = require('../model/relational.js');
var employee = null;
var roles = ['supervisor'];
var message = [];

var args = process.argv.slice(2);
console.log(args);


exports.sendMessageToRole = function(roles, message,live) {
  for (var i = 0; i < roles.length; i++) {
    relational.getEmployeeList(roles[i], function(error, employeeList) {
      for (var j = 0; j < employeeList.length; j++) {
        employee = employeeList[j];
        console.log(employee.name);
        relational.getUserPhone(employee.idUser, function(error, phone) {
          if(phone !== null){
            sendMessageToPhoneNumber(phone.number,message,live);
          }
        });
      }
    });
  }
}

var sendMessageToPhoneNumber = function(phoneNumber,message,live){
  if (phoneNumber !== null) {
    console.log((live?"live:":"test:")+phoneNumber);
    for(var k=0;k<message.length;k++){
      if(live){
        console.log("live:"+message[k]);
        phone.sendMessage(phoneNumber,message[k]);
      }else{
        console.log("test(length="+message[k].length+"):"+message[k]);
      }
    }
  }
}

exports.getMessage = function (statement,maximum,page){
  var message = [];
  var start = 0;
  var end = 0;
  var offset = 0;
  var max=(page)?maximum-3:maximum;
  var fail = false;
  var count = 0;
  if(statement.length>max){
    for(var i=0;i<statement.length;i++){
      count++;
      if(count === max){
        count=0;
        if(split(statement.charAt(i))){
          // console.log("split");
          end=i;
          message.push(statement.substring(start,end));
          start = end+1;
        }else{
          // console.log("split trouble");
          fail=true;
          for(var j=0;j<max&&fail;j++){
            count++;
            if(split(statement.charAt(i-j))){
              fail=false;
              end=i-j;
              message.push(statement.substring(start,end));
              start = end+1;
              // console.log("split found");
            }
          }
          if(fail){
            // console.log("split fail");
            count=0;
            end=i;
            message.push(statement.substring(start,end));
            start = end+1;
          }
        }
      }else{
        if(i===statement.length-1 && count < max){
          end=i;
          message.push(statement.substring(start,end));
          // console.log("split tail");
        }
      }
    }
  }else{
    page=false;
    message.push(statement);
  }
  if(page){
    for(var i=0;i<message.length;i++){
      message[i]=message[i]+' '+(i+1)+'/'+message.length;
      if(message[i].length-1 >= maximum){
        return this.getMessage(statement,maximum-1,page);
      }
    }
  }
  console.log(message);
  return message;
}



var split = function(character){
  if(character === ' ') return true;
  if(character === '.') return true;
  if(character === '?') return true;
  if(character === ',') return true;
  if(character === '!') return true;
  if(character === ';') return true;
  if(character === ')') return true;
  if(character === '}') return true;
  return false;
}

this.sendMessageToRole(roles,this.getMessage(args[0],160,true),(args[1]!== undefined && args[1] === 'true')?true:false);
//sendMessageToPhoneNumber("3015144956",this.getMessage(args[0],160,true),(args[1]!== undefined && args[1] === 'true')?true:false);
