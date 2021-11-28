"use strict";
let campo = document.querySelector("#menu");
for (let opc of opcoes){
    campo.innerHTML += opc.id + " - " + opc.nome + "<br>";
}