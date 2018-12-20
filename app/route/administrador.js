//retorna uma rota rota
module.exports=function(app){
  app.post('/entra',function(req,res){
    app.controllers.admin.autenticar(app, req,res);
  });


  app.get('/admin_lanchonete',function(req,res){
      //mapeamento do controller
    app.controllers.admin.administrador(app, req,res);
    /*if(req.session.autorizado==undefined){
    }*/

  });

  
};
