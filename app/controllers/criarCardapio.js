module.exports.criarCardapio = function(aplication,req,res){
  //conecatr com o banco
//  var connection = aplication.infra.connectionFactory();
  //var conectandoBancoLanchonete = new aplication.model.lancheModel(connection);
  if (req.session.autorizado != undefined) {
    res.render("lanchonete/criar_cardapio");
      }else {
          res.render('lanchonete/login');
        }

}
