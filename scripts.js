const audioGoku = document.getElementById("audio-goku");
const audioVegeta = document.getElementById("audio-vegeta");
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
        
        audioVegeta.play();

    }


}