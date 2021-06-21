var pessoa = {
  nome: 'guga',
  idade: 18,
}
console.log(pessoa.idade)


var quadrado = {
  lados: 4,
  area: function(lado){  //area é um MÉTODO (como se fosse uma funcao)
    return lado * lado;  //lado é a PRORPIEDADE
  },
  perimetro: function(lado){ //OPCIONAL
    //console.log(this.lados); //SO PRA MOSTRAR O NUMERO DE LADOS
    return this.lados * lado; //THIS se refere ao nome do Objeto, ao invés de escrevelo, usa-se o this.
  },
  cinco(){ //posso também não escrever a palavra function, apenas colocar o nome
    return 5; //funciona da mesma forma
  },
}
console.log(quadrado.area(5));  
console.log(quadrado.perimetro(5)); //OPCIONAL


var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() { //pegar a metade da altura do height que ja foi declarad dentro do objeto
    return this.height / 2; //O THIS É USADO PARA NAO PRECISAR COLOCAR O NOME DO OBJETO "MENU DNV
  }
}

menu.backgroundColor = '#000' // alterar a cor do background(USANDO O . PARA CHAMAR E O = PARA MUDAR)

menu.esconder = function() { //ACESSAR A PRORPIEDADE DE UM OBJETO USANDO O . 
  console.log('Escondi')
}

menu.color = 'blue';
var bg = menu.backgroundColor; //mostra a cor do backgroundColor


//ADICIONAR PROPRIEDADES E MÉTODOS
var area = {
  width: 800,
}

menu.height = 50;
menu.width = 300;
menu.position = 'fixed';

