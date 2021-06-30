// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);
//const copy = document.querySelector('.faq');

const faq = document.querySelector('faq');
const primeiroDt = faq.querySelector('dt');


// Selecione o primeiro DT da dl de Faq

const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD.remove); 

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;