"use strict";

window.addEventListener("load", () => {
  document
    .querySelector("form button")
    .addEventListener("click", mostrarResultado);
});

function somaImpar(vetorDeNumeros) {
  const soma = vetorDeNumeros
    .filter(numero => numero % 2 !== 0)
    .reduce((acc, numero) => acc + numero, 0);

  return soma;
}

function geraNumeros() {
  const numero = () => Math.floor(Math.random() * 100);
  return Array.from({ length: 10 }, numero);
}

function somaPar(vetorDeNumeros) {
  const soma = vetorDeNumeros
    .filter(numero => numero % 2 === 0)
    .reduce((acc, numero) => acc + numero, 0);

  return soma;
}

function montaTabela(vetorDeNumeros, tagResultado) {
  const thead = tagResultado.querySelector("table thead tr");
  const tbody = tagResultado.querySelector("table tbody tr");
  thead.innerHTML = ""
  tbody.innerHTML = ""

  vetorDeNumeros.forEach((numero, index) => {
    thead.innerHTML += `<th>${index + 1}</th>`;
    tbody.innerHTML += `<td>${numero}</td>`;
  });
}

function mostrarResultado() {
  const tagResultado = document.querySelector("section:last-child");
  const resultadoPar = tagResultado.querySelector("p:nth-child(1) small strong");
  const resultadoImpar = tagResultado.querySelector("p:nth-child(2) small strong");


  const vetorDeNumeros = geraNumeros();

  resultadoPar.innerHTML = somaPar(vetorDeNumeros);
  resultadoImpar.innerHTML = somaImpar(vetorDeNumeros);
  montaTabela(vetorDeNumeros, tagResultado);

  tagResultado.style.visibility = "visible";
}
