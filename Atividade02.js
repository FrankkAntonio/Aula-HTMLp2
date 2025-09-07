let totaAulaSemestre = parseInt(prompt('Informe o total de aulas do semestre: '));
let falta_do_aluno = parseInt(prompt('Informe o total de faltas do aluno: '));

let nota1 = parseFloat(prompt('Informe a primeira nota: '));
let nota2 = parseFloat(prompt('Informe a segunda nota: '));

let frequencia = ((falta_do_aluno / totaAulaSemestre) * 100).toFixed(2);
let presenca = (100 - frequencia).toFixed(2); // para exibir percentual de presença

// Verificação da frequência
if (frequencia > 25) {
    console.log('O aluno foi REPROVADO por falta.');
} else {
    // Verificação da média
    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        console.log('O aluno foi APROVADO por média.');
    } else if (media >= 5) {
        console.log('O aluno está em RECUPERAÇÃO.');
        
        let recp = parseFloat(prompt('Informe a nota da recuperação: '));
        let novaMedia = (media + recp) / 2;

        if (novaMedia >= 5) {
            console.log('O aluno foi APROVADO após recuperação.');
        } else {
            console.log('O aluno foi REPROVADO após recuperação.');
        }

        // Exibe os dados ao final
        console.log('------Resultado do Aluno------');
        console.log('Número de aulas do semestre:', totaAulaSemestre);
        console.log('Número de faltas do aluno:', falta_do_aluno);
        console.log('Percentual de presença do aluno:', presenca + '%');
        console.log('Primeira nota:', nota1);
        console.log('Segunda nota:', nota2);
        console.log('Nota da recuperação:', recp);
        console.log('Média final após recuperação:', novaMedia.toFixed(2));

    } else {
        console.log('O aluno foi REPROVADO por nota.');
        
        // Exibe os dados ao final
        console.log('------Resultado do Aluno------');
        console.log('Número de aulas do semestre:', totaAulaSemestre);
        console.log('Número de faltas do aluno:', falta_do_aluno);
        console.log('Percentual de presença do aluno:', presenca + '%');
        console.log('Primeira nota:', nota1);
        console.log('Segunda nota:', nota2);
        console.log('Média:', media.toFixed(2));
    }
}
