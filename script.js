const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#p');
const computerScore = document.querySelector('#c');
const reset = document.querySelector('.rst');
const results = document.querySelector('.Result');
let pScore = 0;
let cScore = 0;

function computerPlay(){
    let play = ['Rock' , 'Paper', 'Scissors'];
    return play[Math.floor(Math.random() * play.length)]
}

function lockButtons(){
    buttons.forEach(buton => {
        buton.disabled = true
    })
}
function enableButtons(){
    buttons.forEach(elem => {
        elem.disabled = false
    })
}

function play(choice){
    let player = choice;
    let computer = computerPlay();
    let result = ""

    if((player == 'Rock' && computer == 'Scissors') ||
       (player == 'Paper' && computer == 'Rock') || 
       (player == 'Scissors' && computer == 'Paper')){
        pScore += 1;
        result = (player + " beats " + computer + "! You Win!");
        if (pScore == 5) {
            result = "You Won the game! Press the RESET button to play again!"
            lockButtons()
        }
       }
    else if (player == computer){
        result = ("It\'s a tie! You both played " + player + "!");
    }
    else {
        result = (computer + " beats " + player + "! You Lose!");
        cScore += 1

        if (cScore == 5){
            result = "Computer Won the game! Press the RESET button to play again!"
            lockButtons()
        }
    }

    playerScore.innerHTML = pScore
    computerScore.innerHTML = cScore
    results.innerHTML = result

    return
}

function resetScore(){
    pScore = 0
    cScore = 0
    result = "First to 5 wins!"
    playerScore.innerHTML = pScore
    computerScore.innerHTML = cScore
    results.innerHTML = result
    enableButtons()
}
buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        play(btn.value)
    })
})

reset.addEventListener('click', function() {
    resetScore()
})
