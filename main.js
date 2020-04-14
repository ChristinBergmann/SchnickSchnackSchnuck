//_________Schnick Schnack Schnuck Spiel_________//

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
    } else {
        console.log("You can only choose between: rock, paper or scissors !");
    }
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === "bomb") {
        return "You secretly won !!!"
    }
    if (userChoice === computerChoice) {
        return "It´s a tie !"
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "You lost.. the computer did win !"
        } else {
            return "You won !!!"
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "You lost.. the computer did win !"
        } else {
            return "You won !!!"
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "You lost.. the computer did win !"
        } else {
            return "You won !!!"
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();