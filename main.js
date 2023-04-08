let teclas = document.querySelectorAll('.tecla')
let sons = document.querySelectorAll('.tecla_som')

teclas.forEach((tecla,i)=>{
    tecla.addEventListener('click', () => {sons[i].play()})
})