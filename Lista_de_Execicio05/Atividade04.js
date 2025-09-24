let salario = 1000;
let anoContratacao = 1995;
let anoAtual = new Date().getFullYear();
let percentual = 0.0015;


salario += salario * percentual;


for (let ano = 1997; ano <= anoAtual; ano++) {
    percentual *= 2;
    salario += salario * percentual;
}

alert(`O salário atual do funcionário em ${anoAtual} é R$ ${salario.toFixed(2).replace('.', ',')}`);

