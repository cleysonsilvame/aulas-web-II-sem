//o arquivo que contem as declarações do tipo export

//variáveis
export let titulo = "Módulo ES6";

//objetos
export let users = {
    nome: "admin",
    nivel: 3,
    data: "27/10/2021"
}

//funções
export function exibirTitulo(){
    alert(titulo);
}
export function exibirDados(campo){
    campo.innerHTML += `Usuário: ${users.nome} , Data: ${users.data}`;
}
