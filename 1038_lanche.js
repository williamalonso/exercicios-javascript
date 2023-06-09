/*
  Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

  codigo  | especificação   | preço
  1       | Cachorro Quente | R$ 4.00
  2       | X-Salada        | R$ 4.50
  3       | X-Bacon         | R$ 5.00
  4       | Torrada simples | R$ 2.00
  5       | Refrigerante    | R$ 1.50

  Entrada
  O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

  Saída
  O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

  Exemplo de Entrada	  Exemplo de Saída
    3 2                 Total: R$ 10.00
    4 3                 Total: R$ 6.00
    2 3                 Total: R$ 13.50
*/

var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(' ');

var total;
var code = lines.shift();
var qtd = lines.shift();

if( code == 1 ) {
  total = 4*qtd;
} else if( code == 2 ) {
  total = 4.5*qtd;
} else if( code == 3 ) {
  total = 5*qtd;
} else if( code == 4 ) {
  total = 2*qtd;
} else if( code == 5 ) {
  total = 1.5*qtd;
}

console.log(`Total: R$ ${total.toFixed(2)}`);