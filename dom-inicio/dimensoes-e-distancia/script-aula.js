/*const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
*/

const listaAnimais = document.querySelector('.animais-lista')
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop; //distancia entre elemento e o topo da pagina
console.log(animaisTop)
//listaAnimais.clientHeight -> 720
//listaAnimais.scrollHeight / . 2256 POIS PEGA O TAMANHO TODO DAS FOTOS, MESMO COM O SCROLL

const primeiroH2 = document.querySelector('h2');
const h2left = primeiroH2.offsetLeft

const h2rect = primeiroH2.getBoundingClientRect(); //pega todas as medidas
console.log(h2rect.top)

if(h2rect.top < 0){
  console.log('passou do elemento')
}

console.log(
  window.innerWidth, //pega o tamanho da largura da pagina
  window.outerWidth, //pega a janela inteira, mesmo com o console 
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset, //distancia total do scroll na horizontal
)

const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
  console.log('Tela menor que 600px')
}else {
  console.log('Tela maior que 600px')
}

console.log(small)