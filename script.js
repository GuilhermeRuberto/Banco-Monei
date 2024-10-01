const teclado = require('prompt-sync')({sigint:true});


//--------------------------------variaveis globais
const contas = [];
var verificacao = 0;
var apt=0;




//------------------------------classe conta bancaria
class CB{
    
    constructor(tit,cpf,saldo,numC){

        this.tit= tit;
        this.cpf = cpf;
        this.saldo = saldo;
        this.numC = numC;
    }
    
    depositar(valor){
        
        this.saldo = this.saldo + valor

    }


    sacar(valor){

        this.saldo = this.saldo - valor
        
    }


    consultar(){
        
        console.log("O valor do seu saldo é ")
        console.log(this.saldo)

    }

}



//------------------------------Começo das funcoes 
function newCB(tit,cpf){

    i=0

    while(contas[i]!=null){
            i++
        }
    numC = geradorNumCB();
    contas[i] = new CB(tit,cpf,0,numC);

}

function listCB(){

    for(i=0;i<contas.length;i++){
        console.log(contas[i])
    };

}

function buscaCB(busca){


    
    
    for(i=0;i<contas.length;i++){

        if(contas[i].cpf==busca){


            console.log("Achamos sua conta")

           return apt = i
        }
        
    }

    console.log("Verifique se você digitou o CPF certo ou conta INEXISTENTE")
    apt = 0
}

function acessoCB(apt){

    let ver = 0

    do{

        console.log(" ")
        console.log('---------------------------Bem Vindo(a) '+ contas[apt].tit +'----------------------')
        console.log(" ")
        console.log('---------------------------O seu saldo é de R$: '+ contas[apt].saldo +'-------------------------')
        console.log("---------------------------(1) = Depositar-------------------------------")
        console.log("---------------------------(2) = Sacar-----------------------------------")
        console.log("---------------------------(3) = Transferir------------------------------")
        console.log("---------------------------(0) = sair do conta---------------------------")
        ver=parseInt(teclado())
    
        switch(ver){
    
            case 1:
                
                console.log("Certo vamos fazer um depósito na sua conta!")
                console.log("Informe o valor a ser depositado :")
                
                contas[apt].depositar(parseFloat(teclado()))
                console.log("Depósito bem sucedido")
                break;
    
            case 2:

                console.log("Certo vamos fazer um saque na sua conta!")
                console.log("Informe o valor a ser sacado :")
                
                let validador = parseFloat(teclado())

                if(validador>contas[i].saldo){
                    console.log("Você NÃO tem saldo o SUFICIENTE para sacar!!")
                }
                else(
                    contas[i].sacar(validador)
                    
                )
                
                break;
    
            case 3:
                


                break;
    
            
        }
    
        
        
    
    }while(ver!==0);

}

function geradorNumCB() {
    return parseInt(Math.random() * (99999 - 00000));
  }


console.log("██████╗  █████╗ ███╗   ██╗ ██████╗ ██████╗     ███╗   ███╗ ██████╗ ███╗   ██╗███████╗██╗")
console.log("██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔═══██╗    ████╗ ████║██╔═══██╗████╗  ██║██╔════╝██║")
console.log("██████╔╝███████║██╔██╗ ██║██║     ██║   ██║    ██╔████╔██║██║   ██║██╔██╗ ██║█████╗  ██║")
console.log("██╔══██╗██╔══██║██║╚██╗██║██║     ██║   ██║    ██║╚██╔╝██║██║   ██║██║╚██╗██║██╔══╝  ██║")
console.log("██████╔╝██║  ██║██║ ╚████║╚██████╗╚██████╔╝    ██║ ╚═╝ ██║╚██████╔╝██║ ╚████║███████╗██║")
console.log("╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝     ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝")
console.log("-------------------------Olá seje(a) bem vindo ao Banco Monei---------------------------")

//Criacao de algumas contas apenas para teste 
newCB("juca",12345)
newCB("marcio",11412415)
newCB("julio",17567568)
newCB("manoella",54321)
newCB("marcos",5464564857)
newCB("juca",15465428)
  


do{

    
    console.log(" ")
    console.log("-----------------------------Escolha uma das opções abaixo----------------------------")
    console.log(" ")
    console.log("-----------------------------(1) = Acessar sua conta----------------------------------")
    console.log("-----------------------------(2) = Criar uma conta nova-------------------------------")
    console.log("-----------------------------(3) = Excluir sua conta----------------------------------")
    console.log("-----------------------------(4) = Consultar contas de nossos clientes----------------")
    console.log("-----------------------------(0) = sair do programa-----------------------------------")
    verificacao=parseInt(teclado())

    switch(verificacao){

        case 1:

            console.log("Certo então vamos ACESSAR sua conta!")
            console.log(" ")
            console.log("Digite seu CPF para acessar sua conta:")
            console.log("exemplo( 0000000000 ):")
            
            let cpfJ = parseInt(teclado())

            buscaCB(cpfJ)
            acessoCB(apt)


            break;

        case 2:

            console.log("Certo então vamos CRIAR sua conta!")

            console.log("Digite seu nome:")
            
            let nomeV = teclado()

            console.log("Digite seu CPF:")
            console.log("exemplo( 0000000000 ):")
            let cpfV = parseInt(teclado())

            newCB(nomeV,cpfV)

            break;

        case 3:
            
            break;

        case 4:
        
            listCB();

            break;
            
    }

    
    

}while(verificacao!==0);





                                                                                             
                                                                                             


                                                                                            
    
                                                         
                                                         



