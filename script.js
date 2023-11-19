
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true
document.getElementById("telaSprint1");
document.getElementById("telaSprint2");
document.getElementById("body")
document.getElementById('sprint')


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


}
function telona2(){

    body.style.display = "none"
    telaSprint1.style.display = "none"
    telaSprint2.style.display = "inherit"


}
function voltarPagInicial() {
    body.style.display = "inherit"
    telaSprint1.style.display = "none"
    telaSprint2.style.display = "none"
    window.location.href = '#sprint'
}

function voltarPagina() {
    body.style.display = "inherit"
    telaSprint1.style.display = "none"
    telaSprint2.style.display = "none"
    window.location.href = '#sprint'
}