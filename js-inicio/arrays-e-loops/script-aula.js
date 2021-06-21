//ARRAY
/*var videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames.pop() //remove o ultimo intem da lista
videoGames.push('3DS') //adiciona um item no final do array
videoGames.length
*/
//FOR LOOP
for(var numero = 0; numero < 3; numero++){
  console.log(numero)
}

//WHILE LOOP
var i = 0;
while (i < 3) {
  console.log(i);
  i++;
  // i = i + 5
}
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++){ 
  console.log(videoGames[item])
  if(videoGames[item] === 'PS4'){
    break; //quebra o loop
  }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function(ARNOLDSWARZENEGGER, index){ //posso usar qualquer nome, é um valor especial
  console.log(ARNOLDSWARZENEGGER, index )            // no console
});
