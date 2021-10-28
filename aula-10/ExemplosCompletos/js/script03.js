"use strict";
function sorteia(){
    //Math.round = arredonda o número
    //Math.random = gera números alteatórios de 0 a 1
    let aleatorio = Math.round(Math.random()*60);
    document.querySelector("#numero").innerHTML = aleatorio;
}
let intervalo = setInterval(sorteia, 500); //chama a função informada após o tempo estabelecido (500) - intervalo de execução da função informada

//função para parar a chamada do sorteia
function stopIntervalo(){
    clearInterval(intervalo);
}
setTimeout(stopIntervalo, 3000);
//setTimeout executa a função informada após passar o tempo estabelecido (3000)