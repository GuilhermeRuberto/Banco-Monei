//--------------------------------variaveis globais
const contas = [];
var verificacao = 0;
var apt = 0;
var aptV = false;
var acesso = 0;


//------------------------------classe conta bancaria
class CB {
  constructor(tit, cpf, saldo, numC) {
    this.tit = tit;
    this.cpf = cpf;
    this.saldo = saldo;
    this.numC = numC;
  }

  depositar(valor) {
    this.saldo = this.saldo + valor;
  }

  sacar(valor) {
    this.saldo = this.saldo - valor;
  }

  consultar() {
    console.log("O valor do seu saldo é ");
    console.log(this.saldo);
  }
}

//------------------------------Começo das funcoes

//Função para criação da classe do cliente
function newCB(tit, cpf) {
  numC = geradorNumCB();
  contas.push(new CB(tit, cpf, 0, numC));
}

//Função para busca de contas que retorna conta encontrada e o indice para o acesso
function buscaCB(busca) {
  for (i = 0; i < contas.length; i++) {
    if (contas[i].cpf == busca) {
      apt = i;
      aptV = true
      return;
    }
  }

  console.log("Verifique se você digitou o CPF certo ou conta INEXISTENTE");
  apt = 0;
  aptV = false;
}

//Função acesso para poder acessar e executar acoes na conta
function acessoCB(apt) {

  window.location.href = "acesso.html";
  
}

function transferir() {
    
}

function geradorNumCB() {
  return parseInt(Math.random() * (99999 - 00000));
}

// Criar contas bancárias quando a página é carregada
window.onload = function() {
  newCB("juca", 12345);
  newCB("marcio", 11412415);
  newCB("julio", 123);
  newCB("manoela", 54321);
  newCB("marcos", 5464564857);
  newCB("juca", 15465428);
};




document.getElementById("sign").addEventListener("click", function () {

  let campo = document.getElementById("cpf");
  let valor = campo.value;

  buscaCB(valor);
  
  if (aptV) {
    acesso = apt;
    acessoCB(apt);
    
    alert("TESTE")
  }
});


