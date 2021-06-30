// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(' .menu a');

itensMenu.forEach((item) =>{
  item.classList.add('ativo'); //nessa linha selecionar o que foi passado (item)
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) =>{ 
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo') //itens menu na posicao 0 continuar ativo
console.log(itensMenu)

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAttribute = img.hasAttribute('alt') //apenas a primeira img possui esse atributo -TRUE
  console.log(img, possuiAttribute)
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]'); // ^ significa começa com ...
link.setAttribute('href','https://github.com/gugapadilha ') //PRIMEIRO VALOR QUE PASSA É O QUE QUERO MODIFICAR, O SEGUNDO É O NOVO VALOR (GITHUB)

console.log(link)