"use strict";
let url = "xml/menu.xml";
$.ajax(url)
    .done(function(xml){ //abertura do arquivo xml com sucesso
        $(xml).find("opcao").each(
            function(){
                let vatributo = $(this).attr("id");  //obtem atributo
                let vdado = $(this).text();  //obtem valor
                $("#menu").append(vatributo + " - " + vdado + "<br>");
            }
        );
    })
    .fail(function(){ //falha na abertura do arquivo xml
        alert("Ocorreu um erro no carregamento");
    })