"use strict";

const atributos = [
  "numero",
  "tipo",
  "titulo",
  "descricao",
  "data_programa",
  "hora_programa",
  "link",
];

const titulos = [
  "Número",
  "Tipo",
  "Título",
  "Data da programação",
  "Data da programação",
  "Horário da programação",
  "Link",
];

function createHeader() {
  let table = `
  <table>
    <thead>
      <tr>`;

  titulos.forEach(titulo => {
    table += `<th class="cabecalho">${titulo}</th>`;
  });

  table += `
      </tr>
    </thead>
    <tbody></tbody>
  </table>`;

  $("#results").append(table);
}

function createRow(index, element) {
  const imparOuPar = index % 2 === 0 ? "linhas_p" : "linhas_i";

  let content = `<tr>`;
  atributos.forEach(atributo => {
    content += `<td class="${imparOuPar}">
      ${$(element).find(atributo).text()}
    </td>`;
  });

  content += `</tr>`;

  $("tbody").append(content);
}

function loadXML(xml) {
  createHeader();
  $(xml).find("canal").each(createRow);
}

$.ajax("../arquivos-complementares/exercicio1.xml")
  .done(loadXML)
  .fail(() => alert("Ocorreu um erro no carregamento"));
