const form = window.document.getElementById('formulario')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('aha')

    var a = document.getElementById('campA')
    var b = document.getElementById('campB')
    var conf = document.getElementById('confirmacao')

    if(a.value > b.value){
        conf.innerHTML = 'Formulário Invalido'
        conf.style.backgroundColor = 'red'
        a.style.border = '2px solid red'
    }else if(b.value > a.value){
        conf.innerHTML = 'Formulário Valido'
        conf.style.backgroundColor = 'green'
        
        a.style.border = '2px solid black'
        b.style.border = '2px solid black'


        a.value = ' '
        b.value = ' '
    }else{
        conf.innerHTML = 'Tente Novamente'
        conf.style.background = 'yellow'
        conf.style.color = 'black'
    }
})