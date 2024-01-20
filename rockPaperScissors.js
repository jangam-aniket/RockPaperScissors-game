let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".select");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// generate computer turns randomly
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomInx = Math.floor(Math.random() * 3);
  return options[randomInx];
};

// draw game
const drawGame = () => {
  console.log("Game was draw!");
  msg.innerText = "Ohh Game was draw.. Play again!";
  msg.style.backgroundColor = "brown";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("User won the game!");
    msg.innerText = `User Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Computer won the game!");
    msg.innerText = `Computer Won! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "blue";
  }
};
// computer clicked & game begins
const playGame = (userChoice) => {
  console.log("Users choice is", userChoice);

  const compChoice = genCompChoice();
  console.log("Computer choice is", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = "true";
    if (userChoice === "rock") {
      // scissors or paper
      userWin = compChoice === "paper" ? false : true;
      //   computer selects paper then user lost and if scissors selected then user will be won
    } else if (userChoice === "paper") {
      // rock or scissors
      userWin = compChoice === "scissors" ? false : true;
      //   computer selects scissors then user lost and if rock selected then user will be won
    } else {
      // rock or paper
      userWin = compChoice === "rock" ? false : true;
      //   computer selects rock then user lost and if paper selected then user will be won
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// user clicked
choices.forEach((select) => {
  console.log(select);
  select.addEventListener("click", () => {
    const userChoice = select.getAttribute("id");
    // console.log(userChoice, " was selected");
    playGame(userChoice);
  });
});
