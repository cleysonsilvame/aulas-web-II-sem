"use strict";
let nro = []; //vetor global = todos métodos terão acesso a este vetor

function insereInicio(num){
    //unshift = insere o valor de num no inicio do vetor
    nro.unshift(num);
    document.querySelector("#valor").value = ""; //limpa o campo do formulário
    document.querySelector("#valor").focus(); //dá o foco ao elemento do formulário
    alert("Número armazenado com sucesso");
}

function mostrar(){
    document.querySelector("#texto").innerHTML = nro;
}

//eventos dos botões
//querySelector("#nome") = acesso o elemento com o id nome
let btnInicio = document.querySelector("#inicio");
btnInicio.addEventListener("click", function(){
    let n = Number(document.querySelector("#valor").value);
    //chama a função InsereInicio e passo a informação de n
    insereInicio(n);
});
let btnMostrar = document.querySelector("#mostrar");
btnMostrar.addEventListener("click", mostrar);
