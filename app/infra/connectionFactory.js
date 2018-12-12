var mysql = require('mysql');
/*
function Conectar(){

}
Conectar.prototype.getConection = function(){
  return  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'lanchonete'
  });
}*/

function createConnection(){
  return  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'lanchonete'
  });
}

//Exportando a classe
module.exports = function(){
  return createConnection;
}
