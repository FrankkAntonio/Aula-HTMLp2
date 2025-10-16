let N = parseInt(prompt("Quantos números você deseja inserir?"));

if (isNaN(N) || N <= 0) {
    alert("Por favor, insira um número válido maior que zero.");
} else {
    let soma = 0;
    let menor = null;
    let maior = null;

    for (let i = 0; i < N; i++) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

        if (isNaN(numero)) {
            alert("Valor inválido! Tente novamente.");
            i--;
            continue;
        }

        soma += numero;

        
        if (menor === null || numero < menor) {
            menor = numero;
        }

        if (maior === null || numero > maior) {
            maior = numero;
        }
    }

    alert(`Menor valor: ${menor}\nMaior valor: ${maior}\nA soma de todos os valores são: ${soma}`);
}
