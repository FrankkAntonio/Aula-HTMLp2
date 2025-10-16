function calcularMontante() {
    
    let capital = parseFloat(prompt("Digite o capital inicial investido (ex: 1000):"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %, ex: 1.5):"));
    let tempo = parseInt(prompt("Digite o tempo do investimento em meses (ex: 12):"));


    if (isNaN(capital) || capital <= 0 || isNaN(taxa) || taxa < 0 || isNaN(tempo) || tempo <= 0) {
        alert("Algum valor é inválido. Por favor, insira números válidos.");
        return;
    }

    
    let taxaDecimal = taxa / 100;

    
    let montante = capital * Math.pow((1 + taxaDecimal), tempo);

    
    alert(
        `Capital investido: R$ ${capital.toFixed(2)}\n` +
        `Taxa de juros: ${taxa.toFixed(2)}% ao mês\n` +
        `Tempo: ${tempo} meses\n` +
        `Montante final: R$ ${montante.toFixed(2)}`
    );
}


calcularMontante();
