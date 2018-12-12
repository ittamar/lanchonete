//classe javascript
function Lanches(connection){
  this._connection = connection;
}
//SELECIONAR LANCHES EXISTENTES
Lanches.prototype.getLanche=function(callback){
    this._connection.query('select * from Tab_lanche',callback);
};

Lanches.prototype.getAutenticar = function(user,callback){
  var sql = ("select * from Tab_dono_lanchonete where nome = ?");
  this._connection.query(sql,[user.nome],callback);

};

//Export a classe Lanches
module.exports = function(){
  return Lanches;
}
