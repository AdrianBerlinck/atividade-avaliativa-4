/*Questão 03
Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário 
a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. 
Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit.
No final o algoritmo deve informar a temperatura na unidade de medida escolhida.*/

import leia from "readline-sync"

var temperatura = leia.questionFloat("INFORME A TEMPERATURA: ");

console.log("INFORME A UNIDADE DE MEDIDA:");
var unidades = ["Celsius", "Kelvin", "Fahrenheit"];
var un_medida = leia.keyInSelect(unidades, "Escolha a unidade de medida:") + 1;

console.log("INFORME A UNIDADE A SER CONVERTIDA:");
var un_conversao = leia.keyInSelect(unidades, "Escolha a unidade de conversão:") + 1;

var convert = 0;

if (un_medida === 1 && un_conversao === 2) {
    convert = temperatura + 273.15;
} else if (un_medida === 1 && un_conversao === 3) {
    convert = (temperatura * 9 / 5) + 32;
} else if (un_medida === 2 && un_conversao === 1) {
    convert = temperatura - 273.15;
} else if (un_medida === 2 && un_conversao === 3) {
    convert = (temperatura - 273.15) * 9 / 5 + 32;
} else if (un_medida === 3 && un_conversao === 1) {
    convert = (temperatura - 32) * 5 / 9;
} else if (un_medida === 3 && un_conversao === 2) {
    convert = (temperatura - 32) * 5 / 9 + 273.15;
} else {
    console.log("VOCÊ NÃO PODE CONVERTER PARA A MESMA UNIDADE DE MEDIDA!");
}
console.log("A TEMPERATURA CONVERTIDA É: " + convert.toFixed(2));