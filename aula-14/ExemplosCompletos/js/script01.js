// JavaScript Document
"use strict";
let xhrDoc;
let xhr;

function criaObjetoXHR(){
    //verificar se o navegador suporta o objeto XMLHttpRequest
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest(); //instancia o objeto xhr responsável pelas solicitações HTTP
    }else{
        alert("A solicitação HTTP não poderá ser efetuada");
    }
}

function carregaXML(){	
    let url = "xml/menu.xml"; //caminho do arquivo xml
    xhr.open('GET', url, true); //abertura do arquivo indicado na url
    //verifica o estado do objeto (0, 1, 2, 3 ou 4)
    xhr.onreadystatechange = processaRetorno;
    //define o tipo de retorno da leitura
    xhr.responseType = 'document';
    //habilita o armazenamento/leitura de informações (por exemplo, cookies)
    xhr.withCredentials = true;
    xhr.send(null);
}

function processaRetorno(){
	if(xhr.readyState == 4){ //DONE
        if(xhr.status == 200){ //OK
            xhrDoc = xhr.response;
            exibirMenu();
        }
    }
}

function exibirMenu() {
    //carregar os filhos do elemento pai (menu - elemento raiz) com o nome opcao
    //como existe mais do que uma tag com esse nome, o retorno será um vetor
    let valores = xhrDoc.querySelectorAll("opcao");
    alert("Qtde de elementos: " + valores.length);
    let conteudo = "";
    let vatributo;
    let vdado;
    for(let i = 0; i < valores.length; i++){
        vatributo = valores[i].getAttribute("id");
        vdado = valores[i].childNodes[0].nodeValue;
        conteudo += vatributo + " - " + vdado + "<br>";
    }
    document.querySelector("#menu").innerHTML = conteudo;
}
//chamadas das funções
criaObjetoXHR();
carregaXML();

