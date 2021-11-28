"use strict";
let url = "xml/menu.xml";
$.ajax(url)
  .done(xml => {
    $(xml)
      .find("opcao")
      .each((_, element) => {
        let vatributo = $(element).attr("id");
        let vdado = $(element).text();
        $("#menu").append(vatributo + " - " + vdado + "<br>");
      });
  })
  .fail(() => alert("Ocorreu um erro no carregamento"));
