"use strict";
//definindo objetos
let pessoa1 = {
    //atributos
    //atributo:valor
    nome: "Fulano de Tal",
    altura: 1.8,
    idade: 20
}

let pessoa2 = {
    //atributos
    nome: "Ciclano de Tal",
    altura: 1.65,
    idade: 32
}

let imovel1 ={
    tipo: "Casa",
    metragem: 100
}

//instanciando objetos
let p1 = new Pessoa("Silvio Santos", 1.6, 88);

//vetor de objetos
let lista = [pessoa1, pessoa2];
let campo = document.querySelector("#rel_pessoas");

//percorrer o vetor de objetos e mostrar os valores dos atributos
for (let dados of lista){
    campo.innerHTML += `<h2>Nome: ${dados.nome} </h2><h2> Idade: ${dados.idade} </h2><h2> Altura: ${dados.altura} </h2>`;
}

//mostrando o objeto instanciado
campo.innerHTML += `<br>Nome: ${p1.nome}  <br>Altura: ${p1.altura} <br> Idade: ${p1.idade}`
