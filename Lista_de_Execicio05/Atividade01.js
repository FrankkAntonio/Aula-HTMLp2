let paisA = 80000;
let paisB = 200000;

const taxaCrecimentoA = 0.03;
const taxaCrecimentoB = 0.015;

let anos = 0;

while (paisA < paisB){
    paisA += paisA * taxaCrecimentoA;
    paisB += paisB * taxaCrecimentoB;
    anos++;
}

console.log(`Será preciso de ${anos} anos para a população do país A passar a do país B.`);
