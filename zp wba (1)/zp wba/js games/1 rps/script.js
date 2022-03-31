const choices = ["rock", "paper" , "scissors"]
const possibilites = ["draw", "lose", "win"]
const userChoiceEl = document.getElementById("userChoice")
const pcChoice = document.getElementById("pcChoice")
const result = document.getElementById("result")
let victory = 0

function userChoice(user){
    
    let pc = Math.floor(Math.random() * 3)
    console.log(pc)

    if(user == pc){
        victory = 0
    }else if(user + 1 == pc){
        victory = 1
    }else if(user + 2 == pc){
        victory = 2
    }else if(user - 1 == pc){
        victory = 2
    }else if(user - 2 == pc){
        victory = 1
    }
    pcChoice.innerHTML = `Computer choice: ${choices[pc]}`
    userChoiceEl.innerHTML = `Your choice: ${choices[user]}`
    result.innerHTML = `Result: ${possibilites[victory]}`
}

