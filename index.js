let player = {
    name: "Warid",
    chips: "200"
}
cards = []
sum = 0
message = ""
let isAlive = false
let hasBlackJack = false
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}

function startGame(){
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    // Logic for Rendering Message
    if(sum < 21){
        message = "Do you want to draw a new card"
    } else if ( sum === 21) {
        message = "You have got black jack"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message

    // Logic for rendering Cards
    cardsEl.textContent = "Cards: "
    for(let i=0; i< cards.length; i++){
        cardsEl.textContent +=  cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

}

function getNewCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}