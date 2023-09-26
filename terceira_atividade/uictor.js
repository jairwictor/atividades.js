let alturamale = []
let alturafemale = []
let male = []
let female = []

for(let i = 0; i < 3; i++){
    let genero = prompt('Você é do gênero Feminino ou Masculino? (F OU M)')
    if(genero == 'M'){
        let altura = parseFloat(prompt('Qual a sua altura: '))
        male.push(genero)
        alturamale.push(altura)
    }else if (genero == 'F'){
        let altura = parseFloat(prompt('Qual a sua altura: '))
        female.push(genero)
        alturafemale.push(altura)
    }else{
        console.log('Informação incorreta')
    }

}

let maior = 0
for(i of alturafemale){
    if(i > maior){
        maior = i
    }
}
for(i of alturamale){
    if(i > maior){
        maior = i
    }
}

let menor = 0;
for(i of alturafemale){
    if(menor == 0){
        menor = i
    }else if(i > menor){
        menor = i
    }
}
let soma = alturamale.reduce((total, numero) => total + num, 0)
let media = soma / alturamale.length


console.log("A maior altura é: ", maior)
console.log("A menor altura é: ", menor)
console.log("A media da altura masculina é: ", media)
console.log("A quantidade de mulheres foi de: ", female.length)

