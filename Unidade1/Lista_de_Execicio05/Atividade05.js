function calcularAreaEPerimetro() {
 
    let entrada = prompt("Informe o raio do círculo:");

    let raio = parseFloat(entrada);


    if (isNaN(raio) || raio <= 0) {
        console.log("Raio inválido. Por favor, informe um número maior que zero.");
        return;
    }


    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

  
    console.log(`Raio informado: ${raio}`);
    console.log(`Área do círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

calcularAreaEPerimetro();
