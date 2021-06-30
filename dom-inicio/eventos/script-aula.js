//PROPRIEDADE DO EVENT
const img = document.querySelector('img');

function callback(event){
  console.log(event)
}
//CALLBACK 
img.addEventListener('click', callback) //passar só a funcao ''callback''

//img.addEventListener('click', () =>{ //ao inves do function() uso o arrowfunction ''=>'' 
//});

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(){
  //console.log(event.currentTarget)
  console.log(event.target) //mostra exatamente o ponto que estou clicando
  console.log(event.type) //evento de clicar, 'click'
}

//EVENT PREVENT DEFAULT
animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
event.preventDefault() //previnir que um link externo, por exemplo, não deixar que o link seja ativado
//console.log(event)
console.log(this);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
  console.log(event.type, event)
}

//pode-se adicionar varios eventos ao mesmo elemento
//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent)

function handleKeyBoard(event){
  if(event.key == 'f'){
    document.body.classList.togle('fullscreen')
  }
}

const imgs = document.querySelectorAll('img');

function handleImg(event){
  console.log(event.target.getAttribute('src'));
};

imgs.forEach((img) =>{
  img.addEventListener('click', handleImg);
});