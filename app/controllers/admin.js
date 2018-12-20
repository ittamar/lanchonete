
module.exports.home = function(aplication,req,res){ //Conecatando com o banco
  var connection = aplication.infra.connectionFactory();
  var lancheModel = new aplication.model.lancheModel(connection);
  lancheModel.getLanche(function(erro, resultado){
            res.render('lanchonete/index',{lanche:resultado});

});
}

module.exports.login = function(app, req, res){
  res.render('lanchonete/login');

}

module.exports.administrador = function(app, req, res){
//caso esta variavel não esteja na sessão o mesmo não acessa a pagina
     if (req.session.autorizado != undefined) {
       res.render("lanchonete/admin_lanchonete");
         }else {
             res.render('lanchonete/login');
           }
     }
module.exports.autenticar = function(app, req, res){
  var logar = req.body;
  var connection2 = app.infra.connectionFactory();
  //Conecatando ao banco
  var autenticar = new app.model.lancheModel(connection2);
  req.assert('nome','O nome está vazio').notEmpty();
  req.assert('senha','A senha está vazio').notEmpty();
  var erros = req.validationErrors();

  if(erros){
    //renderizando para tela de login
     res.render("lanchonete/login");
    //para a execução
    //  res.send("oioioi");
    return;
  }
  autenticar.getAutenticar(logar,function(err, resultado){
  if(resultado[0] != undefined){
      req.session.autorizado = true;
    }
     if (req.session.autorizado) {
         res.redirect("/admin_lanchonete");

     }else {
         res.redirect("/login");
       }

  });

}

module.exports.deslogar = function(aplication, req, res){
    // req.session = {};
    req.session.destroy(function (err) {
       return res.status(200).send();
      });
        res.redirect("/index");
      }
