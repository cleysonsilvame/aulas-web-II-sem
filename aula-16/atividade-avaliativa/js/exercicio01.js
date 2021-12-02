"use strict";

let dados = [];
const inputs = [
  $("#numeroDeSerie"),
  $("#nomeDoCliente"),
  $("#dataDoAluguel"),
  $("#valorDoAluguel"),
];

const mostrarDados = () => {
  let html = "";
  html += "<table>";

  dados.forEach((dado, index) => {
    if (index > 0) {
      html += `
        <tr>
          <th></th>
          <td></td>
        </tr>
    `;
    }
    html += `
        <tr>
          <th>Número de série</th>
          <td>${dado[0]}</td>
        <tr>
        <tr>
          <th>Nome do cliente</th>
          <td>${dado[1]}</td>
        </tr>
        <tr>
          <th>Data do aluguel</th>
          <td>${dado[2]}</td>
        </tr>
        <tr>
          <th>Valor do aluguel</th>
          <td>R$ ${dado[3]}</td>
        </tr>
        `;
  });

  html += "</table>";

  $("main").html(html);
};

$("#exibir").click(() => {
  const dado = inputs.map(input => input.val());
  dados.push(dado);

  mostrarDados();
});

$("#limpar").click(() => {
  dados = [];

  inputs.forEach(input => input.val(""));

  $("main").html("");
});
