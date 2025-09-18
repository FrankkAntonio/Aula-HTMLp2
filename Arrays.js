let matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]

];

console.log(matriz[2][0])

let listaNomes = ['fabio', 'joão', 'Pedro', 'Carlos'];
for (i in listaNomes) {
    listaNomes[i] = listaNomes[i] + ' da silva'
    
}
for (i in listaNomes){
    console.log(listaNomes[i])
}
let novoArray = listaNomes.map( (nomeElemento, indeceElemento) => {

    return nomeElemento + ' da silva'    
})

for (let i of novoArray){
    console.log(i)
}