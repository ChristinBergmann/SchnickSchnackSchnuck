//_________Schnick Schnack Schnuck Spiel_________//

const getUserChoice = userInput => {
    userInput = document.getElementById("user").value.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
    } else {
        let errorMessage = document.createElement("p")
        errorMessage.innerHTML = "You can only choose between: rock, paper or scissors !";

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
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();


    if (userChoice) {
        document.getElementById("answerBox")
        answerBox.innerHTML = "";

        let answerUser = document.createElement("h3")
        let answerComputer = document.createElement("h3")
        let resultWinner = document.createElement("h2")

        answerUser.innerHTML = "You threw: " + userChoice;
        answerComputer.innerHTML = "The computer threw: " + computerChoice;
        resultWinner.innerHTML = determineWinner(userChoice, computerChoice);


        answerBox.appendChild(answerUser)
        answerBox.appendChild(answerComputer)
        answerBox.appendChild(resultWinner)

        console.log("You threw: " + userChoice);
        console.log("The computer threw: " + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));

        document.getElementById("answerBox").style.visibility = "visible";

    } else {

        document.getElementById("answerBox").style.visibility = "hidden";
    }
}
playGame();