/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
    {
      name: "Arianna Andrade",
      firstTest: 5,
      secondTest: 6,
    },
    {
      name: "Chloe Chacon",
      firstTest: 9,
      secondTest: 8,
    },
    {
      name: "Raissa Rabelo",
      firstTest: 9,
      secondTest: 9,
    },
    {
      name: "Ryan Miles",
      firstTest: 8,
      secondTest: 10,
    },
    {
      name: "Noah Fernandes",
      firstTest: 7,
      secondTest: 3,
    }
  ]
  
  function media(firstTest, secondTest, studentName) {
    const media = ((firstTest + secondTest) / 2).toFixed(2);
    const result = (firstTest + secondTest) / 2 >= 7;
    if (result) {
      return `A média do aluno(a) ${studentName} é: ${media}.\n Parabéns ${studentName}! Você foi aprovado no concurso!`
    }
  
    return `A média do aluno(a) ${studentName} é: ${media}.\n Nao foi dessa vez ${studentName}! Tente novamente!`
  }
  
  students.map((student) => {
    alert(media(student.firstTest, student.secondTest, student.name));
  });
