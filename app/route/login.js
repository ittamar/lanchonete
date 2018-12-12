module.exports=function(app){
  app.get('/login',function(req,res){
  app.controllers.admin.login(app,req,res);
  });

};
