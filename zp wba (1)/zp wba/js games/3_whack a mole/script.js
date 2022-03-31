//set interval, clear interval
// classlist add, remove
// removeEventlistener

const squares = document.querySelectorAll('.square')
const gameTimeEl = document.getElementById('time-left')
const scoreEl = document.getElementById('score')
const missEl = document.getElementById('miss')
const moleSpeedEl = document.getElementById('mole-speed')
const bestEl = document.getElementById('best')

const startBtn = document.getElementById('start-game')
let gameTime = 31
let score = 0
let best = 0
let miss = 0
let moleSpeed = 1
let mode = 1000
let moleSpeedId
let timeId

startBtn.addEventListener('click', startGame)

function updateTimeLeft() {
    console.log("updating time")
    gameTime--
    gameTimeEl.innerHTML = gameTime
    if (gameTime < 1) {
        stopGame()
    }
}//


let gameStarted = false

function startGame() {
    gameStarted = true

    resetNRender()

    moleSpeedId = setInterval(updateGame, mode);
    timeId = setInterval(updateTimeLeft, 1000)

    console.log("game started")
    startBtn.removeEventListener('click', startGame)
    startBtn.addEventListener('click', stopGame)
    startBtn.innerHTML = "STOP"
}

function stopGame() {
    gameStarted = false
    updateGame()
    clearInterval(moleSpeedId)
    clearInterval(timeId)
    squares.forEach(square => square.removeEventListener('click', squareCode))

    console.log("game stopped")
    startBtn.addEventListener('click', startGame)
    startBtn.removeEventListener('click', stopGame)
    startBtn.innerHTML = "START"

    if(score > best){
        best = score
        bestEl.innerHTML = best
    }

}

function resetNRender(){
    squares.forEach(square => square.addEventListener('click', squareCode))
    gameTime = 31
    score = 0
    miss = 0
    moleSpeed = 1
    mode = 1000

    moleSpeedEl.innerHTML = moleSpeed
    scoreEl.innerHTML = score
    missEl.innerHTML = miss
    updateTimeLeft()
}

function updateGame() {
    console.log("updating game")
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    if (gameStarted) {
        let randomSquare = squares[Math.floor(Math.random() * 9)]
        randomSquare.classList.add('mole')
    }
}

function squareCode() {
    if (this.classList.contains('mole')) {
        this.classList.remove('mole')
        score++
        mode -= 50
        moleSpeed++

        scoreEl.innerHTML = score
        moleSpeedEl.innerHTML = moleSpeed

        clearInterval(moleSpeedId)
        console.log("mode-" + mode)
        moleSpeedId = setInterval(updateGame, mode)
    } else {
        miss++
        missEl.innerHTML = miss
    }
}