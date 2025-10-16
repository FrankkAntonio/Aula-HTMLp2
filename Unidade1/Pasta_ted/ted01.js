function calcularTotal() {
    let preco = parseFloat(prompt('Digite o valor do produto: '));
    let qt = parseInt(prompt('Informe a quantidade: '));

    if (isNaN(preco) || preco <= 0 || isNaN(qt) || qt <= 0) {
        console.log('Valores inválidos');
        return null;
    }

    let valorTotal = preco * qt;

    console.log('Preço unitário: R$', preco.toFixed(2));
    console.log('Quantidade: ', qt);
    console.log('Total da compra: R$', valorTotal.toFixed(2));

    return valorTotal;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.90; 
    } else {
        return valorTotal;
    }
}

function exibirResumo(valorTotal, valorComDesconto) {
    console.log('Resumo da compra:');
    console.log('Valor sem desconto: R$', valorTotal.toFixed(2));
    console.log('Valor com desconto: R$', valorComDesconto.toFixed(2));
}


let valorTotal = calcularTotal();

if (valorTotal !== null) {
    let valorFinal = aplicarDesconto(valorTotal);
    exibirResumo(valorTotal, valorFinal);
}
