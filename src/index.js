import getYourName from "./cli";
import readlineSync from "readline-sync";
import calcGame from "games/brain-calc.js";
import evenOrNot from "games/brain-even.js";

const runTheGame = () => {
  const game = readlineSync.question("What game do you want to play? ");
  switch (game) {
    case "brain-calc":
      calcGame();
      break;
    case "brain-even":
      evenOrNot();
      break;
    default:
      console.log(
        "I don't know this game. Type me 'brain-calc' or 'brain-even' and try again."
      );
  }
};

getYourName();
runTheGame();
