let userScore = 0;
let computerScore = 0;

const choices = ['stone', 'paper', 'scissors'];
const emojis = {
    stone: '🪨',
    paper: '📄',
    scissors: '✂️'
};

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }

    if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    }

    return 'computer';
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Update display
    document.getElementById('userChoice').textContent = emojis[userChoice] + ' ' + userChoice;
    document.getElementById('computerChoice').textContent = emojis[computerChoice] + ' ' + computerChoice;

    // Determine result message
    let resultMessage = '';
    if (result === 'draw') {
        resultMessage = "It's a Draw! 🤝";
    } else if (result === 'user') {
        resultMessage = 'You Win! 🎉';
        userScore++;
    } else {
        resultMessage = 'Computer Wins! 🤖';
        computerScore++;
    }

    // Update result message
    document.getElementById('result').textContent = resultMessage;

    // Update scores
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('userScore').textContent = '0';
    document.getElementById('computerScore').textContent = '0';
    document.getElementById('result').textContent = 'Make Your Move!';
    document.getElementById('userChoice').textContent = '-';
    document.getElementById('computerChoice').textContent = '-';
}