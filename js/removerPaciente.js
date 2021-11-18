var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function (event) {
  var signo = prompt('Desja realmente excluir? Digite: EXCLUIR')
  if (signo.toLowerCase() == 'excluir') {
    event.target.parentNode.classList.add('fadeOut')

    // segura essa função e espera por 500 = milisegundos
    setTimeout(function () {
      //remove o pai do target, no caso, o TR
      event.target.parentNode.remove()
    }, 500)
  } else {
  }
})
