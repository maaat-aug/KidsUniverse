
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true
document.getElementById("telaSprint1");
document.getElementById("telaSprint2");
document.getElementById("body")
document.getElementById('sprint')
document.getElementById('sprint1')


setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 2){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

function telona(){

    body.style.display = "none"
    telaSprint1.style.display = "inherit"
    telaSprint2.style.display = "none"
    window.location.href = '#sprint1'


}
function telona2(){

    body.style.display = "none"
    telaSprint1.style.display = "none"
    telaSprint2.style.display = "inherit"
    window.location.href = '#sprint2'


}
function voltarPagInicial() {
    body.style.display = "inherit"
    telaSprint1.style.display = "none"
    telaSprint2.style.display = "none"
    window.location.href = '#sprint'


}