var botaoBuscar = document.querySelector('#buscarPacientes')

botaoBuscar.addEventListener('click', function () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

  xhr.addEventListener('load', function () {
    if (xhr.status == 200) {
      var resposta = xhr.responseText
      var pacientes = JSON.parse(resposta)

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente)
      })
    } else {
      alert(`Erro ${xhr.responseText} Pagina de requisição não encontrada`)
    }
  })
  xhr.send()
})
