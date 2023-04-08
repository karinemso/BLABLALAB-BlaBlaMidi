bladobtn = document.querySelector('.tecla_do')
blarebtn = document.querySelector('.tecla_re')
blamibtn = document.querySelector('.tecla_mi')
blafabtn= document.querySelector('.tecla_fa')
blasolbtn = document.querySelector('.tecla_sol')
blalabtn = document.querySelector('.tecla_la')
blasibtn = document.querySelector('.tecla_si')
blado = document.querySelector('#som_tecla_do')
blare = document.querySelector('#som_tecla_re')
blami = document.querySelector('#som_tecla_mi')
blafa= document.querySelector('#som_tecla_fa')
blasol = document.querySelector('#som_tecla_sol')
blala = document.querySelector('#som_tecla_la')
blasi = document.querySelector('#som_tecla_si')


teclas = [bladobtn,blarebtn,blamibtn,blafabtn,blasolbtn,blalabtn,blasibtn]

sons = [blado,blare,blami,blafa,blasol,blala,blasi]

function reproduza(i){
    console.log(i)
}
teclas.map((tecla,i)=>{
    index = i
    tecla.addEventListener('click', () => {sons[teclas.indexOf(tecla)].play()})
})


