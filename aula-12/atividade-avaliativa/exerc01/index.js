"use strict";

window.addEventListener("load", () => {
  document
    .querySelector("button:nth-child(1)")
    .addEventListener("click", cadastrarPessoa);
  document
    .querySelector("button:nth-child(2)")
    .addEventListener("click", calcular);
});

let pessoas = [];

function cadastrarPessoa() {
  const idade = document.querySelector("#idade");
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");

  if (idade.value && peso.value && altura.value) {
    const pessoa = {
      idade: Number(idade.value),
      peso: Number(peso.value),
      altura: Number(altura.value),
    };

    pessoas.push(pessoa);
    alert("Pessoa cadastrada com sucesso!");

    idade.value = "";
    peso.value = "";
    altura.value = "";
  } else {
    alert("Preencha todos os campos!");
  }
}

function calcularPessoasEspeciais() {
  const pessoasFiltradas = pessoas.filter(
    pessoa => pessoa.peso >= 90 && pessoa.altura > 1.5
  );

  document.querySelector("section:nth-child(2)").style.visibility = "visible";
  const resultado = document.querySelector(
    "section:nth-child(2) > small strong"
  );

  resultado.innerHTML = pessoasFiltradas.length;
}

function calcularTabela() {
  const thead = document.querySelector("section:nth-child(2) > table > thead");
  const tbody = document.querySelector("section:nth-child(2) > table > tbody");
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const cabecalho = document.createElement("tr");
  cabecalho.innerHTML = `
    <th>Idade</th>
    <th>Peso</th>
    <th>Altura</th>
  `;
  thead.appendChild(cabecalho);

  pessoas.forEach(pessoa => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${pessoa.idade}</td>
      <td>${pessoa.peso}</td>
      <td>${pessoa.altura}</td>
    `;
    tbody.appendChild(linha);
  });
}

function calcular() {
  if (pessoas.length) {
    calcularPessoasEspeciais();
    calcularTabela();
  } else {
    alert("Não há pessoas cadastradas!");
  }
  pessoas = [];
}
