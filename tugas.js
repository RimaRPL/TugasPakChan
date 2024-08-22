let scoreA = 0;
let scoreB = 0;
let setA = 0;
let setB = 0;
const maxScore = 30;

function addPoint(team) {
    if (team === 'A') {
        if (scoreA < maxScore) scoreA++;
    } else {
        if (scoreB < maxScore) scoreB++;
    }

    updateScore();
    checkWinner();
}

function subtractPoint(team) {
    if (team === 'A') {
        if (scoreA > 0) scoreA--;
    } else {
        if (scoreB > 0) scoreB--;
    }

    updateScore();
}

function resetGame() {
    scoreA = 0;
    scoreB = 0;
    updateScore();
    document.getElementById('result').innerText = '';
    enableButtons();
}

function updateScore() {
    document.getElementById('scoreA').innerText = scoreA;
    document.getElementById('scoreB').innerText = scoreB;
    document.getElementById('setA').innerText = setA;
    document.getElementById('setB').innerText = setB;
}

function checkWinner() {
    if (scoreA >= 20 && scoreB >= 20) {  // Check for deuce
        if (Math.abs(scoreA - scoreB) >= 2) {
            declareSetWinner(scoreA > scoreB ? 'A' : 'B');
        }
    } else if (scoreA >= 21 || scoreB >= 21) {  // Normal win condition
        declareSetWinner(scoreA > scoreB ? 'A' : 'B');
    }

    if (scoreA >= maxScore || scoreB >= maxScore) {  // Max score limit
        declareSetWinner(scoreA > scoreB ? 'A' : 'B');
    }
}

function declareSetWinner(winner) {
    if (winner === 'A') {
        setA++;
    } else {
        setB++;
    }
    document.getElementById('result').innerText = 'Team ' + winner + ' wins the set!';
    resetGame();
    checkMatchWinner();
}

function checkMatchWinner() {
    if (setA === 2) {
        document.getElementById('result').innerText = 'Team A wins the match!';
        disableButtons();
    } else if (setB === 2) {
        document.getElementById('result').innerText = 'Team B wins the match!';
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = false;
    });
}
