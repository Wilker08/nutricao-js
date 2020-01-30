var tituloDoIndex = document.querySelector("h1");
tituloDoIndex.textContent = "Aparecida Nutricionista";

tituloDoIndex.addEventListener("click", function(){
    console.log("olha só posso chamar uma função anonima");
});

tituloDoIndex.addEventListener("click", mostraMensagem);
function mostraMensagem(){
    console.log("Ola, eu fui clicado :D");
}

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    console.log(pacientes[i]);
    var paciente = pacientes[i];

    var tdPeso =  paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // validacao
    var pesoEhValido = true;
    var alturaEhValido = true;

    if(peso <= 0 || peso >= 300){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0.0 || altura >= 3.00){
        console.log("Altura inválido");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValido){
        var imc = peso / (altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 =>>>> 25
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar  = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
});


console.log(tdImc.textContent);

//console.log(paciente.textContent);
//console.log(peso);
//console.log(altura);