let raio = parseFloat(prompt("Digite o raio do círculo:"));

function calcularCirculo() {


  
  if (isNaN(raio) || raio <= 0) {
    alert("Por favor, insira um raio válido e maior que zero.");
    return;
  }


  let area = Math.PI * Math.pow(raio, 2);
  let perimetro = 2 * Math.PI * raio;

  
  alert("Área do círculo: " + area.toFixed(2) + "\nPerímetro do círculo: " + perimetro.toFixed(2));
}


calcularCirculo();
