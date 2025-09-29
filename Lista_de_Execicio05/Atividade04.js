
let entrada = prompt("Informe o salário inicial do funcionário (deixe em branco para usar R$ 1000,00):");


let salarioInicial = entrada ? parseFloat(entrada) : 1000;

let salario = salarioInicial;
let percentual = 0.0015; 


for (let ano = 1996; ano <= 2025; ano++) {
    salario += salario * percentual;
    percentual *= 2; 
}

console.log("Salário em 2025: R$ " + salario.toFixed(2));
