const userChoiceEl = document.getElementById("userChoice")
const pcChoice = document.getElementById("pcChoice")
const result = document.getElementById("result")

const possibleChoices = document.querySelectorAll('button')

let userChoice

console.log()

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceEl.innerHTML = "Your choice: " + userChoice
    generatePCChoice()
}))

function generatePCChoice(){
    let randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)
    let choices = ["wock", "papr", "sizers"]
    let computerChoice = choices[randomNumber]
    pcChoice.innerHTML = "PC choice: " + computerChoice
}

function getResult(){
    //ajman
}