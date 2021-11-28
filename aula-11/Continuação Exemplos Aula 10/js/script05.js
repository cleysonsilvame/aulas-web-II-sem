"use strict";
//importa os arquivo que contem as declarações definidas como export
import {titulo, users, exibirTitulo, exibirDados} from './dados.js';

let campo = document.querySelector("#saida");

//usando variáveis, objetos e funçõed importadas do arquivo dados.js
alert(titulo);
exibirTitulo();
console.log(users);
exibirDados(campo);