var express = require('express');
//var consign = require('consign');
var load = require('express-load');
var bodyParser = require('body-parser');
/*importando o modulo do xpress session*/
var expressSession = require('express-session');
var validator = require('express-validator');


//função responsavel por embrulhar, definida como wrapper
module.exports = function(){
  var app = express();
  app.set('views','./app/views');
  app.set('view engine','ejs');
   app.use('/bootstrap',express.static('node_modules/bootstrap/dist/css'));
   app.use(express.static('./app/public'));
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(validator());
   //confuhura o middleware express-session
   app.use(expressSession({
     secret: 'cook',
     resave:true,
     saveUninitialized: false
   }));


  load('route',{cwd:'app'})
   .then('infra')
   .then('model')//obs aqui
    .then('controllers')//obs aqui
   .into(app);

    return app;
}
