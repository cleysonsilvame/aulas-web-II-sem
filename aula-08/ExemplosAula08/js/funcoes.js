//arquivo externo js
"use strict";
function soma(a, b){ //assinatura do método
    //função sem retorno
    console.log(`Soma = ${a+b}`);
}
//função com retorno
function subtracao(a, b){
    return (a-b);
}
function somasub(a,b){
    return (soma(a,b));
}
function divisao(a,b){
    if(b!=0){
        return (a/b);
    }else{
        return 0;
    }
}