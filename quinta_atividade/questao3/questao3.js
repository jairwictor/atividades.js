
let num = []
let num_menor = 1000000;
let num_maior = 0;
let soma = 0;

for (let i = 0; i < 6; i++){
    let numero = parseFloat(prompt("Digite um número: "))
    num.push(numero)
}

for (i of num){
    if (i > num_maior){
        num_maior = i
    } else if(i < num_menor){
        num_menor = i
    }
}

for (i of num){
    soma += i
}


console.log("Maior número: " + num_maior)
console.log("Menor número: " + num_menor)
console.log("A soma dos números: " + soma)