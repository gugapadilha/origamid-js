function mostrarCarro() {
  var carro = 'Fusca'; //só roda se esta var estiver fora do escopo.
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//se NAO declarar uma variavel e apenas colocar um valor, ela fica solta e pode ser usada em todo codigo

function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca


if(true) {
  let mes = 'Dezembro'
  console.log(mes);
}

//console.log(mes) SÓ FUNCIONARIA SE EU USASSE O "VAR", pois VAR vaza o bloco

if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined


{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
//console.log(ano); // erro ano is not defined


for(let i = 0; i < 10; i++){
  console.log(`numero ${i}`)
}

const semana = 'sexta'
//semana = 'quinta' VAI DAR ERRO, POIS JA DECLAREI UM VALOR PARA SEMANA


data = {
  ano: 2018,
  mes: 'dezembro',
}

data.ano = 2019;
data.dia = 25;
//data = 'isso' DA ERRO, POIS NAO POSSO MUDAR UMA PROPRIEDADE, ex: de uma string colocar boolean


let ano;
ano = 2018;
ano++;
console.log(ano); //2019


let ano = 2020; // erro, redeclarou a variável
