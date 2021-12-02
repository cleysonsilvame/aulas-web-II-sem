"use strict";

const carros = [];

const atributos = [
  "numero",
  "tipo",
  "titulo",
  "descricao",
  "data_programa",
  "hora_programa",
  "link",
];

const atributosDoCarro = ["placa", "marca", "modelo"];
const atributosDoRegistro = [
  "data_entrada",
  "hora_entrada",
  "data_saida",
  "hora_saida",
  "valor",
];

$.ajax("dados/estacionamento.xml")
  .done(loadXML)
  .fail(() => alert("Ocorreu um erro no carregamento"));

function loadXML(xml) {
  $(xml).find("carro").each(salvaCarros);

  mostraCarros();
}

function salvaCarros() {
  const carro = $(this);

  const carroParsed = buscaCarros(carro);

  carroParsed.registros = [];

  carro.find("registro").each(function () {
    const registroCarro = $(this);
    const registroParsed = buscaRegistros(registroCarro);
    carroParsed.registros.push(registroParsed);
  });

  carros.push(carroParsed);
}

function buscaCarros(carro) {
  return atributosDoCarro.reduce((obj, atributo) => {
    obj[atributo] = carro.find(atributo).text();
    return obj;
  }, {});
}

function buscaRegistros(registroCarro) {
  return atributosDoRegistro.reduce((obj, atributo) => {
    obj[atributo] = registroCarro.find(atributo).text();
    return obj;
  }, {});
}

function mostraCarros() {
  let content = "";
  for (const carro of carros) {
    content += `<div>
    <p>Placa: ${carro.placa}</p>
    <p>Marca: ${carro.marca}</p>
    <p>Modelo: ${carro.modelo}</p>`;

    for (const registro of carro.registros) {
      content += `
        <p>Data entrada: ${registro.data_entrada}</p>
        <p>Hora: ${registro.hora_entrada}</p>
        <p>Data saída: ${registro.data_saida}</p>
        <p>Hora saída: ${registro.hora_saida}</p>
        <p>Valor: ${registro.valor}</p>`;
    }
    content += `</div>`;
  }

  $("main").html(content);
}
