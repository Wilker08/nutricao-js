var botaoAdicionar  = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // captura as informações do formulario para criar um novo paciente
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientesDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacientesDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function calculaImc( peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // cria td sem metodo para isso
    //var nomeTd = document.createElement("td");
    //nomeTd.classList.add("info-nome");
    //nomeTd.textContent = nome;

    //criando um td com metodo
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
 
    // adicionando os td's como filhos de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}