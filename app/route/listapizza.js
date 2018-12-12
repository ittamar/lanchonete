//Rota para exibe os sabores da pizza
module.exports=function(app){
  app.get('/sabores-pizza',function (req,res) {
    app.controllers.sabores.pizza(app,req,res);
  });
}
