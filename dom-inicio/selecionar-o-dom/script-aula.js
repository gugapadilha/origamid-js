const animais = document.getElementById('animais');
console.log(animais);

//Quando usa o CLASSNAME, nao se coloca o .
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]); 


const primeiraLI = document.querySelector('li');
console.log(primeiraLI);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

//o QuerySelector retorna apenas o primeiro item, E NAO A LISTA TOTAL.
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno.href);

//p selecionar toda a lista usa-se o QuerySelectorAll.
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]); //selecionar o segundo elemento da lista

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');//adicionou outro item na section, HTML ATUALIZOU PRA 4, a NODELIST se manteve em 3

console.log(gridSectionHTML[0])
console.log(gridSectionNode[0])

//Só posso usar o forEach com o NODE. - percorrer os itens-
gridSectionNode.forEach(function(item, index){
  console.log(item.las);
});

const arrayGrid = Array.from(gridSectionHTML); //transforma em um array

//agora o HTML pode usar o forEach
arrayGrid.forEach(function(item){
  console.log(item)
});