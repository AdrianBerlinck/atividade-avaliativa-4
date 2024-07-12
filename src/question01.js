/*Questão 01
Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse
texto ou palavra tem. Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.*/

import leia from "readline-sync"

var pvra = leia.question("INFORME UM TEXTO OU PALAVRA: ")
pvra = pvra.toLowerCase()
var cont = 0;
for(var i = 0 ; i < pvra.length ; i++){
if (pvra[i] == "a" || pvra[i] == "e" || pvra[i] == "i" || pvra[i] == "o" || pvra[i] == "u" ){
cont++
}
}
console.log("ESSE TEXTO/PALAVRA POSSUI: " + cont + " VOGAIS.");
