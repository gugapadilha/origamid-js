/*const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); //A PRIMEIRA É A QUE QUER SUBSTITUIR, A SEGUNDA É O QUE VAI NOLUGAR
*/

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if (menu.classList.contains('azul')){
  menu.classList.add('possui - azul')
}else {
  menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho'

console.log(menu.className)


const animais = document.querySelector('.animais');

console.log(animais.attributes[0]);

//GETATTRIBUTE E SETATTRIBUTE
const img = document.querySelector('img');

const srcImg = img.getAttribute('alt')

img.setAttribute('alt', 'é uma raposa')


const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt)

console.log(srcImg);


const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only
