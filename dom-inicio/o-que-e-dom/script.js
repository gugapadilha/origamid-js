// Retorne o url da página atual utilizando o objeto window

const pag = window.location.href
console.log(pag)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const selecionar = document.querySelector('.ativo')
const h1Classes = selecionar.classList[2]
console.log(selecionar)

// Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 

const largura =  window.innerWidth;
console.log(largura)