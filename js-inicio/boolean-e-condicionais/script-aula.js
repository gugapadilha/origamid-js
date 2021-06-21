var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log('É verdadeiro');
} else if (possuiDoutorado){
  console.log('Possui doutorado');
}else {
  console.log(' Não possui nada');
}

var nome = '10kg' / 10; //se nao passar nada ele automaticamente ja retorna false 

if (nome) {
  console.log(nome)
} else {
  console.log(" nome inválido")
}

// Falsy
/*if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

TODO RESTO É TRUTHY
*/

// Truthy
/*if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy
*/

if ((5 - 10) && (5 + 5)){
  console.log('Verdadeiro')
}else {
  console.log('Falso')
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2)



var corFavorita = 'Verde';

switch(corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.')
    break
  case 'Amarelo':
    console.log('Olhe para o sol')
    break
  case 'Verde':
    console.log('Olhe para a natureza')
    break
  default:
    console.log('Feche os olhos.')
}
