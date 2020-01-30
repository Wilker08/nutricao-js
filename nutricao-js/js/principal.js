var tituloDoIndex = document.querySelector("h1");
tituloDoIndex.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso =  paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 =>>>> 25

tdImc.textContent = imc;

console.log(tdImc.textContent);

//console.log(paciente.textContent);
//console.log(peso);
//console.log(altura);