function inserirNome (){
    let nomeUsuário = prompt ("Qual é o seu nome");
    let elemento = document . querySelector ("#nome-usuario");
    elemento.textContent = nomeUsuário
}