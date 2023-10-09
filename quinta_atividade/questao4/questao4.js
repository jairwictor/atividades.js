function calcular_salarioAtual(salario_inicial, anos_trabalhados) {
    var salario_atual = salario_inicial;
    var percentual_deAumento = 0.015;

    for (var ano = 1; ano <= anos_trabalhados; ano++) {
        salario_atual += salario_atual * percentua_delAumento;
        percentual_deAumento *= 2;
    }
    return salario_atual;
}

var salario_inicial = parseFloat(prompt("Digite o salário inicial do funcionário: "));
var anos_trabalhados = 2023 - 1995;
var salario_final = calcularSalarioAtual(salario_inicial, anos_trabalhados);

console.log("O salário atual do funcionário R$ "+ salario_final);