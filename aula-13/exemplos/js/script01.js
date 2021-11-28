window.addEventListener("load", function(){ //evento de carregamento de página
    let btn = document.querySelector("#btn1");
    btn.addEventListener("click", function(){
        exibirConteudos();
    });
});

function exibirConteudos(){
    //acessando pelo nome da tag, podemos ter várias tags iguais
    //o correto neste caso é querySelectorAll
    let paragrafo = document.querySelector("p"); //captura somente o primeiro parágrafo
    console.log(paragrafo.innerHTML);
    
    //captura todos os parágrafos, vetor
    let paragrafos = document.querySelectorAll("p");
    for(let texto of paragrafos)
        console.log(texto.innerHTML);
    

    
    //acessando pela class, podemos ter várias tags com a mesma class
    let caixa = document.querySelector(".caixa"); //captura somente a primeira cx
    console.log(caixa.innerHTML);
    
    //captura todas as cxs, vetor
    let caixas = document.querySelectorAll(".caixa");
    for (let texto of caixas)
        console.log(texto.innerHTML);

    //acessando pelo id (único), retorna apenas um elemento
    let a = document.querySelector("#artigo");
    console.log(a.innerHTML);
    
}