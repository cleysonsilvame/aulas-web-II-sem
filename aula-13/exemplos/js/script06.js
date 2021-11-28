$(function(){
    $("#bt").click(function(){
        mostraDados();
    })
});  
    
function mostraDados(){
  let nome, email, sexo, estadoc;
  nome = $("#txtnome").val();
  email = $("#txtemail").val();
  sexo = $("input:radio[name=s]:checked").val();
  estadoc = $("input:radio[name=estado]:checked").val();
  $("#res").html(`Nome: ${nome}
                <br>E-mail: ${email}
                <br>Sexo: ${sexo}
                <br>Estado Civil: ${estadoc}`);
}