$("#btn").click(function() {
    $("#ex1").html("<mark><strong>Função html do JQuery</strong></mark>");
});

$("#btn2").click(function() {
    $("#ex1").text("<mark>Função text do JQuery</mark>");
});

$("#btn3").click(function() {
    $("#ex1").append("<br><strong>Função append do JQuery</strong><br>");
});

$("#btn4").click(function() {
    $("#ex1").prepend("Função prepend do JQuery<br>");
});

$("#btn5").click(function() {
    $("#ex1").empty();
});

$("#btn6").click(function() {
    $("#ex1").remove();
});