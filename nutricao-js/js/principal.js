var tituloDoIndex = document.querySelector("h1");
tituloDoIndex.textContent = "Aparecida Nutricionista";

tituloDoIndex.addEventListener("click", mostraMensagem);
function mostraMensagem(){
    console.log("Ola, eu fui clicado :D");
}

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    console.log(pacientes[i]);
    var paciente = pacientes[i];

    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;

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
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // captura as informações do formulario para criar um novo paciente
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // cria tr
    var pacienteTr = document.createElement("tr");

    // cria td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // adicionando os dados capturados do form-adiciona
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // adicionando os td's como filhos de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

console.log(tdImc.textContent);

//console.log(paciente.textContent);
//console.log(peso);
//console.log(altura);