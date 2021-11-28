"use strict";
function carregaJSON(url){	
    criaObjetoXHR(); //função definida dentro de xhr.js
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    xhr.send(null);
    xhr.onload = function(){
        exibir(xhr.response);
    }
}

function exibir(json){
   let campo = document.querySelector("#menu");
   let resul = json.opcoes; //resul = vetor
   for(let opc of resul){
       campo.innerHTML += opc.id + " - " + opc.nome + "<br>";
   }
}
carregaJSON("dados/dados.json");

