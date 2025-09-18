let numeros = [10, 20 , 30, 40];
numeros.push(50);

let cores = new Array('Vermelho', 'Azul', 'Verde');

numeros[0] = 5;
cores[cores.length] = 'Branco'

numeros.splice(3, 0, 5)

console.log(numeros, cores)
console.log(numeros.length)


for (let i in numeros){
    console.log(numeros[i], i);
}

for(let item of cores) {
    console.log(item);
}