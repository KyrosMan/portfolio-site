const grid = document.querySelector('.grid')
const blocks = []
const colors = ["green", "yellow", "red", "blue"]

class Block {
    constructor(xAxis, yAxis, width = 105, height = 25) {
        this.topLeft = [xAxis * width, yAxis * height]
    }
}

generateLevel(3)


// add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
let userLeft = 260

document.addEventListener('keydown', moveUser)

//add ball
const ballStart = [501, 50]
let ballPosition = ballStart
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
ball.style.left = ballPosition[0] + "px"
ball.style.bottom = ballPosition[1] + "px"

let timerId = setInterval(moveBall, 100)
let xDirection = 2
let yDirection = 2

function moveBall(){
    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
    chechForCollisions()
}

function chechForCollisions(){
    // wall
    if(ballPosition[0] >= 610){
        changeDirection()
    }else if(ballPosition[1] >= 200){
        changeDirection()
    }else if(ballPosition[1] <= 5){
        changeDirection()
    }else if(ballPosition[0] <= 300){
        changeDirection()
    }
}

function changeDirection(){
    if(xDirection === 2 && yDirection === 2){
        xDirection = -2
        return
    }else if(xDirection === -2 && yDirection === 2){
        yDirection = -2
        return
    }else if(xDirection === -2 && yDirection === -2){
        xDirection = 2
        return
    }else if(xDirection === 2 && yDirection === -2){
        yDirection = 2
        return
    }
}

// moving
function moveUser(e) {
    switch (e.key) {
        case "a":
            if(userLeft > 10) userLeft -= 8
            break;
        case "d":
            if(userLeft < 520) userLeft += 8
            break;
    }
    user.style.left = userLeft + "px"
}

function generateLevel(blockRows) {
    //generates blocks into blocks array
    for (let x = 0; x < blockRows; x++) {
        for (let y = 0; y < 6; y++) {
            blocks.push(new Block(y, x))
        }
    }

    // adds all blocks onto the map
    for (let i = 0; i < blocks.length; i++) {
        const blockEl = document.createElement('div')
        blockEl.classList.add('block')
        grid.appendChild(blockEl)

        blockEl.style.left = blocks[i].topLeft[0] + "px"
        blockEl.style.top = blocks[i].topLeft[1] + "px"
        blockEl.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
}



