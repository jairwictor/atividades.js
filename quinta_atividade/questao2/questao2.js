var num = []
var num_par = []
var num_impar = []

for (var i = 0; i < 10; i++){
    var numero = parseFloat(prompt("Digite um número: "))
    num.push(numero)
}

for (i of num){
    if (i % 2 == 0){
        num_par.push(i)
    } else {
        num_impar.push(i)
    }
}

alert("Quantidade de números pares: "+num_par.length + " Quantidade de números impares: "+num_impar.length )