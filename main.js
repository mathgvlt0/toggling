let boutton = document.querySelector("#btn")
let nn = document.querySelector("#btn1")
let n = document.querySelector("#btn2")
let nv = document.querySelector("#btn3")

function btn(){
    nn.style.backgroundColor="blue"
}

function btn2(){
    nv.style.backgroundColor="green"
}

function btn3(){
    n.style.backgroundColor="red"
}

nn.addEventListener('click', btn)
n.addEventListener('click', btn3)
nv.addEventListener('click', btn2)