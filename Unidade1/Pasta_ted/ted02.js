let nomes = ['Ana', 'João', 'Carlos', 'José', 'Maria']
console.log(nomes[2]);

nomes.push('Patrick')
nomes.unshift('Henrique')
nomes.pop();
console.log('Lista de nomes: ')
for (let nome of nomes) {
    console.log(nome);
}

let numeros = [2, 4, 6, 8];

let valorDobrado = numeros.map(valor => {
    return valor * 2;
});

console.log(valorDobrado);
