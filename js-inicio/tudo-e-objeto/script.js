// nomeie 3 propriedades ou métodos de strings

var teste = 'nomes'

var nomeMaiusculo = teste.toUpperCase()
var nomeMinusculo = teste.toLowerCase()
var nomeNormal = teste.toString()

//OU

var palavra = 'guga';
palavra.fixed
palavra.substring
palavra.normalize

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn =  document.querySelector('.btn');

btn.addEventListener('click', function(){
  console.log('Clicou')
})
console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
