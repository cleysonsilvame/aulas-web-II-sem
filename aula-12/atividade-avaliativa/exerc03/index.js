"use strict";

window.addEventListener("load", () => {
  document.querySelector("button").addEventListener("click", mostrarDados);
});

function mostrarDados() {
  const rgm = document.querySelector("#rgm");
  const nome = document.querySelector("#nome");
  const dados = document.querySelector("#dados");

  if (rgm.value && nome.value) {
    dados.innerHTML = `<p>RGM: ${rgm.value}</p>`;
    dados.innerHTML += `<p>Nome: ${nome.value}</p>`;

    //requisitos da atividade
    dados.style.fontFamily = "Verdana";
    dados.style.backgroundColor = "yellow";
    dados.style.fontSize = "50pt";
    dados.style.textAlign = "center";
    dados.style.border = "10px solid red";
    dados.style.borderRadius = "30px";

    dados.style.visibility = "visible";
  } else {
    alert("Preencha todos os campos!");
  }
}
