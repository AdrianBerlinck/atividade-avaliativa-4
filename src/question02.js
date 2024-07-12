/*Questão 02
Escreva um algoritmo para verificar se palavra é um palíndromo. Uma palavra palíndromo é uma palavra que é igual,
lendo ela de trás para frente. Novamente, lembrando que uma string é um vetor de caracteres.*/

import leia from "readline-sync"

var palavra = leia.question("INFORME UM TEXTO OU PALAVRA: ");
palavra = palavra.toLowerCase();
palavra =  palavra.replaceAll(" ", "")

var verificacao = ""

for(var i = 0 ; i < palavra.length ; i++){
    verificacao += palavra[i]
}
verificacao = verificacao.split("").reverse().join("");

if(verificacao == palavra){
    console.log("ESSA PALAVRA E UM PALINDROMO.");
}else{
    console.log("ESSA PALAVRA NAO E UM PALINDROMO.");
}
console.log(palavra);
console.log(verificacao);

