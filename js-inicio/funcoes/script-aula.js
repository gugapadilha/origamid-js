function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total); 


//PESO E ALTURA SAO OS PARÂMETROS
function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

  console.log(imc(80, 1.8))
//console.log(imc(80, 1.8)); // 80, 1.80 -> SAO OS ARGUMENTOS


function corFavorita(cor){
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  }else if (cor === 'verde'){
    return 'Eu gosto de mato';
  }else {
    return 'Eu nao gosto de cores';
  }
}

/*function mostraConsole() {
  console.log(' oi ')
}

addEventListener('click', mostraConsole);*/

addEventListener('click', function() {console.log('oi')}); 


//PESO E ALTURA 2
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2 (20, 1.40); // retorna o imc
//console.log(imc(80, 1.80)); // retorna o imc e undefined

function terceiraIdade2(idade){
  console.log(idade)
}

terceiraIdade2(90)


function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return (' Informe sua idade')
  }else if( idade >=60){
    return true;
  }else{
    return false;
  }
}

var totalPaises = 193;
function faltaVisitar(paisesVisitados){
  return `Falta visitar: ${totalPaises - paisesVisitados} paises`;
}

console.log(totalPaises);



//VARIAVEIS SO FUNCIONAM DENTRO DA FUNCOES ONDE FORAM CRIADAS, OU FORA DO ESCOPO

var profissao = 'Designer'
function dados(){
  var nome = 'Andre'
  var idade = 28;
  function outrosDados(){
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return`${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

console.log(dados()); //Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados();//retorna um erro POIS ESTA DEFINIDA FOTA DO ESCOPO