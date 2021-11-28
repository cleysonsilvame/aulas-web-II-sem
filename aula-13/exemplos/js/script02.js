$( //equeivalente a window.addEventListener("load", ....
    function(){
        let btn = $("#btn1");
        btn.click(function(){
            exibirConteudos();
        });
    }
);

function exibirConteudos(){
    //acessando elementos pelo nome da tag, podemos ter várias, retorna todas
    let paragrafos = $("p");
    console.log("Primeiro: "+ paragrafos[0].innerHTML);
    for(let texto of paragrafos)
        console.log(texto.innerHTML);

    //acessando pela class, podemos ter várias tags com o mesmo class
    let caixas = $(".caixa");
    for(let texto of caixas)
        console.log(texto.innerHTML);

    //acessando pelo ID, temos somente um id por elemento
    let a = $("#artigo");
    console.log(a.html());
        
}