"use strict";
function alteraTitulo(){
    let area = document.querySelector("#tit");
    let texto = document.querySelector("#titulo").value;
    area.innerHTML = texto;
    area.style.color = "red";
    area.style.fontSize = "30pt";
    area.style.fontWeight = "900";
}
document.querySelector("#button").addEventListener("click", alteraTitulo);

function criaTabela(){
    let linhas = Number(document.querySelector("#linha").value);
    let colunas = Number(document.querySelector("#coluna").value);
    let conteudo = "";
    conteudo += "<table border='1'>"; //inicia a tabela
    for(let i = 0; i < linhas; i++){
        if (i % 2 == 0) //verifica se a linha é par
            conteudo += "<tr class='cor1'>"; //cria a linha da tabela
        else
            conteudo += "<tr class='cor2'>"; //cria a linha da tabela
        for (let j=0; j < colunas; j++){
            conteudo += "<td>"+ i + "-" + j + "</td>"; //cria a coluna
        }
        conteudo += "</tr>"; //fecha a linha da tabela
    }
    conteudo += "</table>";//conteudo = conteudo + "</table>";
    document.querySelector("#tab").innerHTML = conteudo;
}
document.querySelector("#button2").onclick = criaTabela;