// Crie uma função para verificar se um valor é Truthy
verificarValor(20)
function verificarValor(valor){

  if(typeof valor === 'string'){
    return true
  }else{
    return false; 
  }
}
// function isTruthy(dado){
//  return !!dado;

//ou

//var oietruthy = isTruthy('oi'); 
//console.log(oietruthy)


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcMatematica(lado1, lado2, lado3, lado4){
  const calculo = lado1 + lado2 + lado3 + lado4 ;
  console.log(calculo);
}

//ou

//function perimetroQuadrado(lado){
  //return lado * 4
//}

calcMatematica(2, 2, 2, 2);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (){
  var nome = 'guga'
  var sobrenome = 'padilha'
  return`${nome} ${sobrenome}`
}
console.log(nomeCompleto())

//OU


//function nomeCompleto(nome, sobrenome) {
  // return ${nome}  ${sobrenome}
//}

// Crie uma função que verifica se um número é par
function numPar(par){
  if (par % 2 == 0){
    return('Esse número é par')
  }else{
    return('Esse número é impar')
  }
}

//ou


//function isEven(numero){
  //var modulo = numero % 2;
  //if(modulo ===0){
    //return true;
  //}else {
    //return false;
  //}
//}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function dados(string, num){
  if(typeof string !== 'number'){
    return('é boolean')
  }else if( typeof num !== 'string'){
    return('é um num')
  }else {
    return(' é uma string')
  }
}

//ou

//function (dado) {
 //return typeof dado;
//}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.


addEventListener('click', function() {
  console.log('guga padilha');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
