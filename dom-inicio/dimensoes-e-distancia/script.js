// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img')

const animaisTop = firstImg.offsetTop
console.log(animaisTop)

// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const imagens = document.querySelectorAll('img');
  let soma = 0
  imagens.forEach((img) =>{
    soma += img.offsetWidth
  });
  console.log(soma);
};

window.onloadeddata = function(){ //onload so ocorre quando tudo foi carregado
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const link = document.querySelectorAll('a');

link.forEach((link )=> {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'Possui acessibilidade')
  }else {
    console.log(link, 'Não possui boa acessibilidade')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width: 720px)');
const browserMenu = document.querySelector('.menu')
if (browser.matches){
  browserMenu.classList.add('menu-mobile')
}