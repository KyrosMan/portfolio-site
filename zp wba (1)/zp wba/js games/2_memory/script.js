//learned
// objects in array
// shuffle array
//setAttribute
// callback without ()
// style.visibility


const cardArray = [
    {
        name: "ajman",
        img: 'images/ajman.jpg'
    },
    {
        name: "bruh",
        img: 'images/bruh.jpg'
    },
    {
        name: "crying-black-dude",
        img: 'images/crying-black-dude.png'
    },
    {
        name: "gru",
        img: 'images/gru.jpg'
    },
    {
        name: "mrincredible",
        img: 'images/mrincredible.jpg'
    },
    {
        name: "shrek",
        img: 'images/shrek.jpg'
    },
    {
        name: "ajman",
        img: 'images/ajman.jpg'
    },
    {
        name: "bruh",
        img: 'images/bruh.jpg'
    },
    {
        name: "crying-black-dude",
        img: 'images/crying-black-dude.png'
    },
    {
        name: "gru",
        img: 'images/gru.jpg'
    },
    {
        name: "mrincredible",
        img: 'images/mrincredible.jpg'
    },
    {
        name: "shrek",
        img: 'images/shrek.jpg'
    }
]

cardArray.sort(() => Math.random() - 0.5)

const turnsEl = document.getElementById('turns')
let turns = 0
const result = document.getElementById('result')
let score = 0
const grid = document.querySelector('#grid')
createBoard()
// sort: sort takes 2 values from array and if argument is - then a before b.

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', "images/blank.jpg")
        card.setAttribute("id", i)
        card.addEventListener("click", flipCard) // ()- calls straight away. without () its a callback
        grid.appendChild(card)
    }
}
// 41:22

let cardsOpened = 0
let image1, image2

function flipCard() {
    if (this.getAttribute('src') == "images/blank.jpg") {
        turns++
        turnsEl.innerHTML = turns
        let cardId = this.getAttribute("id") //this. = where called from
        this.setAttribute('src', cardArray[cardId].img)
        cardsOpened++
        console.log(cardsOpened)

        if (cardsOpened == 1) {
            image1 = this
            console.log(cardArray[image1.getAttribute('id')].name)
        } else if(cardsOpened == 2){
            image2 = this
            console.log(cardArray[image2.getAttribute('id')].name)
        }


        if (cardsOpened == 2) {
            //all blank
            // check if image is the same
            
            if (cardArray[image1.getAttribute('id')].name == cardArray[image2.getAttribute('id')].name) {
                score++
                console.log("ggman")
                result.innerHTML = score
                let imageToHide = [image1, image2]
                setTimeout(() => {
                    imageToHide[0].style.visibility = "hidden"
                    imageToHide[1].style.visibility = "hidden"

                }, 500);
            }
        }else if(cardsOpened == 3){
            image1.setAttribute('src', 'images/blank.jpg')
                image2.setAttribute('src', 'images/blank.jpg')
                cardsOpened = 1
                image1 = this
                console.log(cardArray[image1.getAttribute('id')].name)
        }


    }
}