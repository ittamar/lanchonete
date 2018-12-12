var listaMobile = document.querySelector(".lista-mobile");
var btSanduiche = document.querySelector("#bt-sanduiche");
//Adiciona uma classe que esconde o menu
btSanduiche.addEventListener("click",function(){
  listaMobile.classList.toggle("exibe-esconde-menu");
});
