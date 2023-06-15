/*
  Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

  O símbolo ( representa "maior que". Por exemplo:
  [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
  (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

  Entrada
  O arquivo de entrada contém um número com ponto flutuante qualquer.

  Saída
  A saída deve ser uma mensagem conforme exemplo abaixo.
*/

var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var resultado;
var entrada = parseFloat( lines.shift() );

if( entrada >= 0 && entrada <= 25 ) {
  resultado = '[0,25]';
} else if( entrada > 25 && entrada <= 50 ) {
  resultado = '(25,50]';
} else if( entrada > 50 && entrada <= 75 ) {
  resultado = '(50,75]';
} else if( entrada > 75 && entrada <= 100 ) {
  resultado = '(75,100]';
} else {
  console.log(`Fora de intervalo`);
  process.exit();
}

console.log(`Intervalo ${resultado}`);