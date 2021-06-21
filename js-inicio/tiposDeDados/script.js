// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total) //35

// Crie duas expressões que retornem NaN
var numero = 'o numero é 2';
var soma = 23 / numero;
console.log(soma);

var resp = 'sim 34'
var perg = ' nao 34'
var soma = resp * perg
console.log(soma)
// Somar a string '200' com o número 50 e retornar 250

var n1 = '200';
var n2 = 50;
var soma = +n1 + n2; //esse + é pra validar o n1 como numbero
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado

var x = 5;
console.log (x++)
console.log(x)

// Como dividir o peso por 2?
var numero = +'80' / 2; // faz a divisao primeiro e depois soma com a string
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso)