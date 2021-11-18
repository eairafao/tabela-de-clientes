var titulo = document.querySelector('.titulo')
titulo.textContent = 'Rafael Nutrição'

var pacientes = document.querySelectorAll('.paciente') //tr

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i] // ao invés de trocar todos que estão como paciente, mudei aqui para alterar tudo. (peguei da linha 4 e dentro da linha 6)

  var tdPeso = paciente.querySelector('.info-peso') //td
  var tdAltura = paciente.querySelector('.info-altura') // td
  var tdImc = paciente.querySelector('.info-imc') //td

  var peso = tdPeso.textContent
  var altura = tdAltura.textContent

  var pesoValido = validaPeso(peso) //true or false
  var alturaValida = validaAltura(altura) //true or false

  // exclamação para o contrario OPERADOR NOT
  if (!pesoValido) {
    console.log('PESO INVALIDO')
    pesoValido = false
    tdImc.textContent = 'Peso/Altura Inválido(a)'
    paciente.classList.add('pacienteInvalido') //adicionando uma classe no html que eu criei no css
  }

  // exclamação para o contrario OPERADOR NOT
  if (!alturaValida) {
    console.log('ALTURA INVALIDA')
    alturaValida = false
    tdImc.textContent = 'Peso/Altura Inválido(a)'
    paciente.classList.add('pacienteInvalido') //adicionando uma classe no html que eu criei no css
  }

  if (pesoValido == true && alturaValida == true) {
    var imc = calcularImc(peso, altura)
    tdImc.textContent = imc
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true
  } else {
    return false
  }
}

function calcularImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2) // toFixed = 2 casas decimais para evitar numeros quebrados
}
