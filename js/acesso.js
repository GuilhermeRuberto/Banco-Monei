
//Função alteraLabel
function alteraLabel() {
    document.getElementById("iconLabel").innerHTML =contas[acesso].tit;
    document.getElementById("saldo").innerHTML =("contas[acesso].saldo");
  }
   // Criar contas bancárias quando a página é carregada
window.onload = function() {
    console.log(contas[acesso].tit);
    alteraLabel();
    alert("CU");
  }; 


