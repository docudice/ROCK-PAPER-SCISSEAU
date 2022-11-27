let scissors = "scissors"
let paper = "paper"
let rock = "rock"

let playerchoise
let machinchoise


let scissorsP = document.getElementById("scissorsJ").style
let paperP = document.getElementById("paperJ").style
let rockP = document.getElementById("rockJ").style

let scissorsM = document.getElementById("scissorsM").style
let paperM = document.getElementById("paperM").style
let rockM = document.getElementById("rockM").style

let choiseArea = document.getElementById("playeArea").style


let Annonce = document.getElementById("annonce")
let ReplayButton = document.getElementById("Again")

let scorePanel = document.getElementById("scorePanel")
let helpPanel = document.getElementById("RulePanel").style
let score = 0;

let Ppulse = document.getElementById("VictoryJ").style
let Mpulse = document.getElementById("VictoryM").style

function choiseWeapon(type) {
    playerchoise = type;
    machineWeapon()
}

function machineWeapon(){
    let tab = [scissors, paper, rock]
    let ret = Math.random()*tab.length | 0
    machinchoise = tab[ret]
    if(machinchoise != playerchoise){
        PreWar()
    }else{
        machineWeapon()
    }
}

function PreWar(){
    choiseArea.display = "none"
    if(playerchoise == scissors){
        scissorsP.display = "flex"
    }else if(playerchoise == paper){
        paperP.display = "flex"
    }else{
        rockP.display = "flex"
    }
       
    if(machinchoise == scissors){
        scissorsM.display = "flex"
    }else if(machinchoise == paper){
        paperM.display = "flex"
    }else{
        rockM.display = "flex"
    }
          
setTimeout(choiseWinner, 3000);
    
}

function choiseWinner(){
   if(playerchoise == scissors){
    if(machinchoise == rock){
        Annonce.innerHTML = ("YOU LOSE")
        Annonce.style.display = "flex"
        ReplayButton.style.display = "flex"
        Mpulse.display = "flex"
    }else{
        Annonce.innerHTML = ("YOU WIN")
        Annonce.style.display = "flex"
        ReplayButton.style.display = "flex"
        Ppulse.display = "flex"
        score += 1;
        scorePanel.innerHTML = score
    }
   }else if(playerchoise == paper){
    if(machinchoise == rock){
        Annonce.innerHTML = ("YOU WIN")
        Annonce.style.display = "flex"
        Ppulse.display = "flex"
        ReplayButton.style.display = "flex"
        score += 1;
        scorePanel.innerHTML = score
    }else{
        Annonce.innerHTML = ("YOU LOSE")
        Annonce.style.display = "flex"
        ReplayButton.style.display = "flex"
        Mpulse.display = "flex"
      
    }
   }else if(playerchoise == rock){

    if(machinchoise == scissors){
        Annonce.innerHTML = ("YOU WIN")
        Annonce.style.display = "flex"
        ReplayButton.style.display = "flex"
        Ppulse.display = "flex"
        score += 1;
        scorePanel.innerHTML = score
    }else{
        Annonce.innerHTML = ("YOU LOSE")
        Annonce.style.display = "flex"
        ReplayButton.style.display = "flex"
        Mpulse.display = "flex"
    }
   }
    
       
}

function restart(){
    choiseArea.display = "flex"
    scissorsP.display = "none"
    rockP.display = "none"
    paperP.display = "none"
    scissorsM.display = "none"
    rockM.display = "none"
    paperM.display = "none"
    Annonce.style.display ="none"
    ReplayButton.style.display = "none"
    Mpulse.display = "none"
    Ppulse.display = "none"

}
function openbtn() {
    helpPanel.display = "flex"
}
function closebtn(){
    helpPanel.display = "none"
}