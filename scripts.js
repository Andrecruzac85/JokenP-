const veggetaChoice = document.querySelector('.veggetaChoice')
const audioBoo = document.querySelector('audio-boo')
const boo = document.querySelector('.boo')
const audioGoku = document.getElementById("audio-goku");
const audioVeggeta = document.getElementById("audio-veggeta");
const humanScore = document.querySelector('.scoreGoku')
const machineScore = document.querySelector('.scoreVeggeta')
const result = document.querySelector('.result')
let humanScoreNumber = 0
let machineScoreNumber = 0
const playhuman = (humanChoice) => {
    const machineChoice = playMachine(); // executa a função e pega o valor
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
    // mostra visualmente a escolha da máquina
    if (machine === 'pedra') {
        veggetaChoice.innerHTML = 'Veggeta escolheu &#x270A';
    } else if (machine === 'papel') {
        veggetaChoice.innerHTML = 'Veggeta escolheu &#x1F590';
    } else if (machine === 'tesoura') {
        veggetaChoice.innerHTML = 'Veggeta escolheu &#x270C';
    }

    if ((humanScoreNumber === 5) || (machineScoreNumber === 5)) {
        audioBoo.play();
        boo.src = "./assets/majin boo.gif";
        boo.style.display = "block";
        gameOver = true;

    }

}
