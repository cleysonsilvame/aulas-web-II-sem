"use strict";

const titulos = [
  "Código",
  "Descrição",
  "Gravidade",
  "Pontos na carteira",
  "Valor R$",
];

detran.forEach(mostrarMultas);

function mostrarMultas(multas) {
  let content = "<div>";

  Object.keys(multas).forEach((atributo, index) => {
    content += `
      <p>${titulos[index]} = ${multas[atributo]}</p>
    `;
  });

  content += "</div>";

  $("main").append(content);
}
