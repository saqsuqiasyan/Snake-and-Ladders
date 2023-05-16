let diceBtn = document.querySelector(".diceBtn")
let diceValue = document.querySelector(".diceValue")
let diceImg = document.querySelector(".diceImg")
let diceImages = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]


function btnDisable(state = false){
    diceBtn.disabled = state
}
function rollTheDice(){
    btnDisable(true)
    let inter = setInterval(()=>{
        let diceNumber = Math.floor(Math.random()*6+1)
        diceImg.src=diceImages[diceNumber-1]
        diceValue.innerHTML=diceNumber
    },100)
    setTimeout(()=>{
        clearInterval(inter)
        doStep()
    },1000)
}
diceBtn.addEventListener('click', rollTheDice)

const winArea = 25
let step = 1
let stepCount = 0

function doStep(){
    stepCount = step+Number(diceValue.innerHTML)
    let inter = setInterval(()=>{
        heroReplace(step, step+1)
        if(step == 25){
            alertWin()
            clearInterval(inter)
        }
        else if(step == stepCount){
            clearInterval(inter)
            chackTheBoost()
        }
    },500)
}

function heroReplace(placeA, placeB){
    let div1 = document.querySelector(`.square${placeA}`)
    let div2 = document.querySelector(`.square${placeB}`)
    let hero = document.querySelector(".hero")
    div1.removeChild(hero)
    div2.appendChild(hero)
    step = placeB
}

function switchFunk(placeA, placeB){
    setTimeout(()=>{
        heroReplace(placeA, placeB)
        btnDisable()
    },500)
}

function chackTheBoost(){
    switch(step){
        case 3:{
            switchFunk(3,11)
        }
        case 6:{
            switchFunk(6,17)
        }
        case 9:{
            switchFunk(9,18)
        }
        case 10:{
            switchFunk(10,12)
        }
        case 14:{
            switchFunk(14,4)
        }
        case 19:{
            switchFunk(19,8)
        }
        case 22:{
            switchFunk(22,20)
        }
        case 24:{
            switchFunk(24,16)
        }
        default:{
            btnDisable()
        }
    }
}

function playAgain(){
    heroReplace(25,1)
    btnDisable()
}

function alertWin(){
    setTimeout(()=>{
        alert("You are win yohoooooo")
        playAgain()
    },500)
}