let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));

    
    if (isNaN(numero)) {
        alert("Você digitou um valor inválido. Tente novamente.");
        i--;
        continue;
    }

    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(`Quantidade de números pares: ${pares}\nQuantidade de números ímpares: ${impares}`);
