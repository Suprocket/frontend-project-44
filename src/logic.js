import readlineSync from "readline-sync";
import calcGame from "./games/brain-calc.js";
import evenOrNot from "./games/brain-even.js";

let name = "";

const welcome = () => {
  console.log("Welcome to the Brain Games!");
};

const getYourName = () => {
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello ${name}`);
  return name;
};

const runTheGame = () => {
  const game = readlineSync.question("What game do you want to play? ");
  switch (game) {
    case "brain-calc":
      gameLogic(calcGame());
      break;
    case "brain-even":
      gameLogic(evenOrNot());
      break;
    default:
      console.log(
        "I don't know this game. Type me 'brain-calc' or 'brain-even' and try again."
      );
      break;
  }
};

const gameLogic = (currentGame) => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const userAns = currentGame.userAnswer();
    const compAns = currentGame.compAnswer();
    if (userAns === compAns) {
      correctAnswers += 1;
      console.log("Correct!");
    } else {
      console.log(
        `'${userAns}' is wrong answer. Correct answer was '${compAns}'`
      );
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}.`);
  }
};

export { getYourName, runTheGame, gameLogic, welcome };
