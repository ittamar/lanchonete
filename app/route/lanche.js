
//retorna uma rota rota
module.exports=function(app){
  app.get('/index',function(req,res){
        //mapeamento do controller
         app.controllers.admin.home(app,req,res);
  });
};
