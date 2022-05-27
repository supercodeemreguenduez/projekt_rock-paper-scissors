var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function computerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function win(userInput, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors. You Win!`;
    }
    else if (userInput === 'p' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock. You Win!`;
    }
    else if (userInput === 's' && compChoice === 'p') {
        result_p.innerHTML = `Computer chosed Paper. You Win!`;
    }
    document.getElementById(userInput).classList.add('win');
    setTimeout(function () { document.getElementById(userInput).classList.remove('win'); }, 350);
}

function Draw(userInput, compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'r') {
        result_p.innerHTML = `Comp chosed Rock. It's a Tie.`;
    }
    else if (userInput === 'p' && compChoice === 'p') {
        result_p.innerHTML = `Comp chosed Paper. It's a Tie.`;
    }
    else if (userInput === 's' && compChoice === 's') {
        result_p.innerHTML = `Comp chosed scissor. It's a Tie`;
    }
    document.getElementById(userInput).classList.add('tie');
    setTimeout(function () { document.getElementById(userInput).classList.remove('draw'); }, 350);
}

function Lose(userInput, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'p') {
        result_p.innerHTML = "Computer chosed Paper. You Lost!";
    }
    else if (userInput === 'p' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors. You Lost!`;
    }
    else if (userInput === 's' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock. You Lost!`;
    }
    document.getElementById(userInput).classList.add('lose');
    setTimeout(function () { document.getElementById(userInput).classList.remove('lose'); }, 350);

}

function game(userInput) {
    const compChoice = computerChoice();
    const UserChoice = userInput + compChoice;
    if (UserChoice === "rs" || UserChoice === "pr" || UserChoice === "sp") {
        win(userInput, compChoice);
        console.log("Win");
    }
    else if (UserChoice === "rp" || UserChoice === "ps" || UserChoice === "sr") {
        Lose(userInput, compChoice);
        console.log("Lose");
    }
    else if (UserChoice === "rr" || UserChoice === "pp" || UserChoice === "ss") {
        Draw(userInput, compChoice);
        console.log("Tie");
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();