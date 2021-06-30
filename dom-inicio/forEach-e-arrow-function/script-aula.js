
//forEach
//const imgss = document.querySelectorAll('img');
//console.log(imgs)

//imgs.forEach(function(item, index, array){
  //console.log(array/*i++*/)
//});

/* forEach é um método de array, alguns objetos array-like possuem este método,
coso nçao possua, o ideal é transforma-los em um array.*/

//parametros do ForEach
//const imgs = document.querySelectorAll('img');

//imgs.forEach(function(valorAtual, index, array){
  //console.log(item); // o item atual no loop
  //console.log(index); // o número do index
  //console.log(array); // a Array completa
//});

//forEach e array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item, index, array){
  //console.log(item, index, array)
});


//arrow function - encurtar a sintaxe( usar => após os argumentos)

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) =>{  //substitui a function
  console.log(item, index);
});

const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});


//versao normal
let i = 0;
imgs.forEach(function(){
  console.log(i++);
});

//versao curta
imgs.forEach(() => console.log(i++));
