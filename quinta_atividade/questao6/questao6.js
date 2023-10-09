function calcular_montante() {
    var capital = parseFloat(prompt("Digite o capital inicial:"));
    var taxa_deJuros = parseFloat(prompt("Digite a taxa de juros (em percentual):"));
    var meses = parseInt(prompt("Digite o tempo do investimento em meses (usando apenas os números):"));
  
    taxa_deJuros = taxa_deJuros / 100;
  
    var montante = capital * Math.pow((1 + taxa_deJuros), meses);
  
    montante = montante.toFixed(2);
  
    console.log("O montante após " + meses + " meses será de R$ " + montante);
  }
  

  calcular_montante();