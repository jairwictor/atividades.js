var notas = []

for (var i = 0; i < 3; i++){
   var nota = parseFloat(prompt(" Digite a nota do aluno:"))
   notas.push(nota)
}

var resultado = 0
for(i of notas){
   resultado +=i
}

var media = resultado / notas.length

if( media <=4 ){
   alert(media + "= O aluno está reprovado!")
}
else if( media > 4 && media < 7 ){
    alert(media + "= O aluno está na recuperação!")
    var recuperacao = parseFloat(prompt("Insira a nota da recuperação do aluno:"))
    var result_recup = (recuperacao + media) / 2
  if(result_recup >= 5){
    alert( result_recup + "= O aluno está aprovado!")
  }else{
    alert(result_recup + "= O aluno está reprovado!")
  }

}
else if(media >= 7){
    alert(media + "= O aluno está aprovado!")
}