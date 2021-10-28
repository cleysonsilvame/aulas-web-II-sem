"use strict";
//atera o tamanho da fonte do texto
function alteraTamanho(){
    let tamanho = document.querySelector("#tam").value;
    document.querySelector("#texto").style.fontSize = tamanho+"pt";
}
document.querySelector("#btn1").onclick = alteraTamanho;

function mudaCor(cor){
    document.querySelector("#texto").style.color = cor;
}
document.querySelector("#btn2").addEventListener("click", function(){
    mudaCor("red");
});
document.querySelector("#btn3").onclick = function(){
    mudaCor("blue");
}

function mudaFundo(cor){
    document.querySelector("#texto").style.backgroundColor = cor;
}
document.querySelector("#btn4").onclick = function(){
    mudaFundo("black");
}
document.querySelector("#btn5").onclick = function(){
    mudaFundo("yellow");
}
function alteraTamanhoCaixa(){
    let largura = document.querySelector("#comp").value;
    document.querySelector("#texto").style.width = largura;
}
document.querySelector("#btn6").onclick = alteraTamanhoCaixa;
