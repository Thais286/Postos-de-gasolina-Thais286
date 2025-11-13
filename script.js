function comparar() {
    // Pega os nomes dos postos
    let nome1 = document.getElementById("nomePosto1").value.trim() || "Posto 1";
    let nome2 = document.getElementById("nomePosto2").value.trim() || "Posto 2";
    let nome3 = document.getElementById("nomePosto3").value.trim() || "Posto 3";

    // Pega os preços
    let p1 = parseFloat(document.getElementById("posto1").value);
    let p2 = parseFloat(document.getElementById("posto2").value);
    let p3 = parseFloat(document.getElementById("posto3").value);

    // Verifica se os preços são válidos
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os preços corretamente.";
        return;
    }

    // Encontra o menor preço
    let menor = Math.min(p1, p2, p3);

    // Qual o nome do posto que tem o menor preço
    let nomeMenor = "";
    if (menor === p1) nomeMenor = nome1;
    else if (menor === p2) nomeMenor = nome2;
    else nomeMenor = nome3;

    // Exibe o resultado com nome e preço
    document.getElementById("resultado").innerHTML = 
        `O menor preço é do <strong>${nomeMenor}</strong>: R$ ${menor.toFixed(2)}`;
}