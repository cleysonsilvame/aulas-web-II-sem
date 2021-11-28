$("#btn1").click(function(){          
  //alteração de css pelo jquery
  $("#texto").css("color","red");
  $("#texto").css("width", "300px");
  $("#texto").css({"background-color":"yellow","font-size":"16pt", "font-family":"Tahoma"});
});

$("#opc1").click(function(){
    $("#texto").slideToggle("fast");
});