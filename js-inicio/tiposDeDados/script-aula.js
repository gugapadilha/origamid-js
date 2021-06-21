var idade = 2e5; //quantidade de numero depois do e = 5 ZEROS
console.log(idade);

var divisao = 200 / 5
var modulo = 4217492 % 3;
console.log(modulo)


var testeNan = 'isso é 100' / 2;
console.log(isNaN(testeNan)); //retorna True, pois é realmente um Nan (string e numero dentro da string - NAN)
                              // DIVISAO / E MULTIPLICACAO * COM STRING RETORNA NULL ao mostrar na tela

var testeNan2 = '100' / 2;
console.log(isNaN(testeNan2)) //retorna False, pois é um numero dentro de uma string, logo, é um NUMERO



var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; // se colocar ( ) ele priozira a conta. 
console.log(soma1);                         // multiplicacao e divisao depois soma e subtracao



var x = 5;
console.log(x++);
console.log(x); //aqui sim mostrará o 6