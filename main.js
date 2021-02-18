//_________Schnick Schnack Schnuck Spiel_________//

const getUserChoice = (userInput) => {
  userInput = document.getElementById("user").value.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    alert("You can only choose between: rock, paper or scissors !");
  }
};

function handleKeyPress(e) {
  let playButton = document.getElementById("play-Btn");

  e = e || window.event;
  if (e.keyCode === 13) {
    playButton.click();
    return false;
  }
}

let playerInput;
playerInput = document.getElementById("user").value.toLowerCase();
playerInput.onkeypress = handleKeyPress;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Error!";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "You secretly win !!!";
  }
  if (userChoice === computerChoice) {
    return "It´s a tie !";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Oh oh.. YOU LOST.. damn, the computer wins !";
    } else {
      return "Yipie Yayay... you lucky one, you WIN !!!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Oh oh.. YOU LOST.. the computer wins !";
    } else {
      return "Yipie Yayay... you lucky one, you WIN !!!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Oh oh.. YOU LOST.. the computer wins !";
    } else {
      return "Yipie Yayay... you lucky one, you WIN !!!";
    }
  }
}

const playGame = () => {
  registerSW();

  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  if (userChoice) {
    document.getElementById("answerBox");
    answerBox.innerHTML = "";

    let answerUser = document.createElement("h3");
    let answerComputer = document.createElement("h3");
    let resultWinner = document.createElement("h2");

    answerUser.innerHTML = "You threw: " + userChoice.toUpperCase();
    answerComputer.innerHTML =
      "The computer threw: " + computerChoice.toUpperCase();
    resultWinner.innerHTML = determineWinner(userChoice, computerChoice);

    answerBox.appendChild(answerUser);
    answerBox.appendChild(answerComputer);
    answerBox.appendChild(resultWinner);

    document.getElementById("answerBox").style.visibility = "visible";
  } else {
    document.getElementById("answerBox").style.visibility = "hidden";
  }
  document.getElementById("user").value = "";
};

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("sw.js", {
        scope: ".",
      });
    } catch (e) {
      console.log("SW registration failed");
    }
  }
}
