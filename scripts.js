const win = document.querySelector('.win')
const veggetaChoice = document.querySelector('.veggetaChoice')
const audioBoo = document.getElementById("audio-boo");
const boo = document.querySelector('.boo')
const audioGoku = document.getElementById("audio-goku");
const audioVeggeta = document.getElementById("audio-veggeta");
const humanScore = document.querySelector('.scoreGoku')
const machineScore = document.querySelector('.scoreVeggeta')
const result = document.querySelector('.result')
let humanScoreNumber = 0
let machineScoreNumber = 0
const bgMusic = document.getElementById("bg-music");
const restartBtn = document.querySelector('.restart-btn');

document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Erro ao tentar tocar música:", e));
    }
}, { once: true });

const playhuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Empatou'
    }
    else if ((human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Goku Venceu'
        audioGoku.play();

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Veggeta venceu'
        audioVeggeta.play();

    }

    if (machine === 'pedra') {
        veggetaChoice.innerHTML = 'Veggeta escolheu &#x270A';
    } else if (machine === 'papel') {
        veggetaChoice.innerHTML = 'Veggeta escolheu &#x1F590';
    } else if (machine === 'tesoura') {
        veggetaChoice.innerHTML = 'Veggeta escolheu &#x270C';
    }

    if (humanScoreNumber === 5) {
        win.innerHTML = 'YOU WIN'

        win.style.display = 'block';
        audioBoo.play();
        boo.src = "./assets/majin boo.gif";
        boo.style.display = "block";
        boo.style.opacity = "1";
        restartBtn.style.display = "block";
        bgMusic.pause();
        bgMusic.currentTime = 0; 
        gameOver = true;
    }
    if (machineScoreNumber === 5) {
        win.innerHTML = 'YOU LOSE'
        win.style.display = 'block';
        audioBoo.play();
        boo.src = "./assets/majin boo.gif";
        boo.style.display = "block";
        boo.style.opacity = "1";
        restartBtn.style.display = "block";
        bgMusic.pause();
        bgMusic.currentTime = 0; 
        gameOver = true;
    }
}


function restartGame() {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    humanScore.innerHTML = humanScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = '';
    veggetaChoice.innerHTML = '';
    boo.style.display = 'none';
    restartBtn.style.display = 'none';
    win.style.display = 'none';
    gameOver = false;
}



