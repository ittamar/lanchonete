//retorna uma rota rota
module.exports=function(app){
  app.get('/criar_cardapio',function(req,res){
        //mapeamento do controller
        app.controllers.criarCardapio.criarCardapio(app,req,res);
  });
};
