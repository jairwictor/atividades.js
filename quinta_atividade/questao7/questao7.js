// 7) Considere a seguinte lista:

// var alunos = [
// { nome: “Maria Joaquinha”, notas: [8,7.5,9], curso: “Sistemas para Internet”},
// { nome: “João Ricardo”, notas: [8,8.5,5], curso: “Direito”},
// { nome: “José Henrique”, notas: [4,10,7], curso: “Administração”},
// { nome: “Pedro da Silva”, notas: [6,7.6,7.5], curso: “Sistemas para Internet”},
// { nome: “Silvana Morais”, notas: [6,7.5,9.5], curso: “Sistemas de Informação”},
// { nome: “Patricia Castro”, notas: [1,9,10], curso: “Arquitetura”},
// { nome: “Joana Ribeiro”, notas: [8,9,9], curso: “Contabilidade”},
// { nome: “Rafael Rocha”, notas: [4,4,9], curso: “Sistemas para Internet”},
// { nome: “Gustavo Henrique”, notas: [8,7.5,5], curso: “Sistemas para Internet”}
// ];

function imprimir_alunosAprovados(alunos) {
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      var notas = aluno.notas;
      var soma = 0;
  
      for (var j = 0; j < notas.length; j++) {
        soma += notas[j];
      }
  
      var media = soma / notas.length;
  
      if (media >= 7) {
        console.log("Nome: " + aluno.nome);
        console.log("Média: " + media.toFixed(2));
        console.log("Curso: " + aluno.curso);
      }
    }
  }

  var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
  ];

  imprimir_alunosAprovados(alunos);