bladobtn = document.querySelector('.tecla_do')
blarebtn = document.querySelector('.tecla_re')
blamibtn = document.querySelector('.tecla_mi')
blafabtn= document.querySelector('.tecla_fa')
blasolbtn = document.querySelector('.tecla_sol')
blalabtn = document.querySelector('.tecla_la')
blasibtn = document.querySelector('.tecla_si')
blado2btn = document.querySelector('.tecla_do2')
blado = document.querySelector('#som_tecla_do')
blare = document.querySelector('#som_tecla_re')
blami = document.querySelector('#som_tecla_mi')
blafa= document.querySelector('#som_tecla_fa')
blasol = document.querySelector('#som_tecla_sol')
blala = document.querySelector('#som_tecla_la')
blasi = document.querySelector('#som_tecla_si')
blado2 = document.querySelector('#som_tecla_do2')

teclas = [bladobtn,blarebtn,blamibtn,blafabtn,blasolbtn,blalabtn,blasibtn, blado2btn]

sons = [blado,blare,blami,blafa,blasol,blala,blasi, blado2]

function reproduza(i){
    console.log(i)
}
teclas.map((tecla,i)=>{
    index = i
    tecla.addEventListener('click', () => {sons[teclas.indexOf(tecla)].play()})
})


