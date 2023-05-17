console.log=("exercício 03");
const nomedopaciente = prompt("qual o nome da(o) paciente?");
const pesodopaciente = prompt("qual o peso deste paciente?");
const alturadopaciente = prompt("qual é a altura deste paciente?");
const imcdopaciente = (pesodopaciente / alturadopaciente);
alert("o IMC de " + nomedopaciente + " é de " + imcdopaciente);
