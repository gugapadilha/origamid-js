// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copa = [1929, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var ganhou = 0; ganhou < copa.length; ganhou++) {
  console.log(`O brasil ganhou a copa de ${copa[ganhou]}`); 
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++){
  console.log(frutas[i])
  if(frutas[i] === "Pera"){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover ela da array.

//var ultimaFruta = frutas.pop() Dessa forma ele remove do array de cima
var ultimaFruta = frutas[frutas.length - 1] //ou frutas[4]