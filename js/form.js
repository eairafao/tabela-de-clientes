var botaoAdicionar = document.querySelector('#adicionarPaciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault() //previne o procedimento padrão do evento/botao

  // Puxando o form do HTML para trabalhar nele
  var form = document.querySelector('#formAdiciona')
  var paciente = obtemPacienteDoFormulario(form)

  var erros = validaPaciente(paciente)
  console.log(erros)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }

  adicionaPacienteNaTabela(paciente)

  form.reset()
  var mensagensErro = document.querySelector('#mensagensDeErro')
  mensagensErro.innerHTML = ''
})

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente)
  // Adicionando o paciente na tabela
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr) //adicionar um filho
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagensDeErro')
  ul.innerHTML = ''

  erros.forEach(function (erro) {
    // para cada item do meu array, faça uma coisa (function)
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}

//Extraindo informações do paciente do form
function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value)
  }
  return paciente
}

//Cria a <tr> e a <td> do paciente
function montaTr(paciente) {
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  var nomeTd = montaTd(paciente.nome, 'info-nome')
  var pesoTd = montaTd(paciente.peso, 'info-peso')
  var alturaTd = montaTd(paciente.altura, 'info-altura')
  var gorduraTd = montaTd(paciente.gordura, 'info-gordura')
  var imcTd = montaTd(paciente.imc, 'info-imc')

  pacienteTr.appendChild(nomeTd) //adicionar um filho
  pacienteTr.appendChild(pesoTd) //adicionar um filho
  pacienteTr.appendChild(alturaTd) //adicionar um filho
  pacienteTr.appendChild(gorduraTd) //adicionar um filho
  pacienteTr.appendChild(imcTd) //adicionar um filho

  return pacienteTr
}

function montaTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {
  var erros = []

  if (paciente.nome.length == 0) {
    erros.push('O Nome não pode ser em branco')
  }

  if (paciente.peso.length == 0) {
    erros.push('O Peso não pode ser em branco')
  }

  if (paciente.gordura.length == 0) {
    erros.push('A Gordura não pode ser em branco')
  }

  if (paciente.altura.length == 0) {
    erros.push('A Altura não pode ser em branco')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('O peso é inválido!')
  }
  if (!validaAltura(paciente.altura)) {
    erros.push('A altura é inválida!')
  }

  return erros
}
