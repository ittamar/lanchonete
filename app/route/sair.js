module.exports = function(app){
  //Rota para sair
    app.get('/sair',function(req,res){
          //mapeamento do controller
          app.controllers.admin.deslogar(app, req,res);
    });

}
