var nome = 'guga'
console.log(typeof nome) //o tipo do nome é uma string por natureza
var idade = 28;
console.log(typeof idade)
var simbolo = Symbol();
console.log(typeof simbolo)


var nome = 'guga';
var sobrenome = 'padilha';
var fullName = nome + " " +  sobrenome;

console.log(fullName)


var gols = 1000;
var frase1 = 'Romario fez ' + gols + 'gols na sua carreira'
console.log( typeof frase1) //se tiver string e na mesma frase boolean, ele retorna String 


var gols = 1000;
var frase2 = `Romário fez ${gols} gols`
console.log(frase2)



var melhor = 'best';
var frase = "Esse é o \"melhor\" jogo"; //  \"mellhor\"  -> ta ignorando a atribuição 'best';
console.log(frase)

/*NO JS É POSSÍVEL USAR ASPAS DUPLAS "" DENTRO DE ASPAS SIMPLES'' SE QUISER, OU VICE VERSA. */

