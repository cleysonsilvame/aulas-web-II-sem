"use strict";

function calcular() {
  let total = $("#total").val();

  const input = $('[name="pagamento"]:checked').val();

  total -= (total * parseFloat(input)) / 100;

  $("#valorAPagar").val(total);
}

$("#calcular").click(calcular);
