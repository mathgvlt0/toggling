let btt = document.querySelector("#button")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")

function boutton1(){
    btn1.style.backgroundColor = "blue"
    btn1.style.color = "white" 
    btn2.style.backgroundColor = "white"
    btn2.style.color ="black"
    btn3.style.backgroundColor = "white"
    btn3.style.color ="black"
}

function boutton2(){
    btn2.style.backgroundColor = "blue"
    btn2.style.color = "white" 
    btn1.style.backgroundColor = "white"
    btn1.style.color ="black"
    btn3.style.backgroundColor = "white"
    btn3.style.color ="black"
    
  }

  function boutton3(){
    btn3.style.backgroundColor = "blue"
    btn3.style.color = "white" 
    btn1.style.backgroundColor = "white"
    btn1.style.color ="black"
    btn2.style.backgroundColor = "white"
    btn2.style.color ="black"
  }

btn1.addEventListener('click', boutton1)
btn2.addEventListener('click', boutton2)
btn3.addEventListener('click', boutton3)