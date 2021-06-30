// Retorne no console todas as imagens do site

const imgSite = document.querySelectorAll('img')
console.log(imgSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
 // ^ SIGNIFICA QUE COMEÇA COM
const internoLink = document.querySelectorAll('[href^="#"]');  
console.log(internoLink)

// Selecione o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector('.animais-descricao h2')
console.log(firstH2)

// Selecione o último p do site

const lastP = document.querySelectorAll('p')
console.log(lastP[lastP.length -1]) //O -1 foi por causa o .lenght pega um p extra