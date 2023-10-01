import readlineSync from 'readline-sync';
import calcGame from './games/brain-calc.js';
import evenOrNot from './games/brain-even.js';
import playNOD from './games/brain-gcd.js';
import playProgression from './games/brain-progression.js';
import isPrime from './games/brain-prime.js';

let name = '';

const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const getYourName = () => {
  name = readlineSync.question('May I have your name?:\n ');
  console.log(`\nHello ${name}\n`);
  return name;
};

const gameLogic = (currentGame) => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    currentGame.getQuestion();
    const userAns = currentGame.userAnswer();
    const compAns = currentGame.compAnswer();
    if (userAns === compAns) {
      correctAnswers += 1;
      console.log('Correct!\n');
    } else {
      console.log(
        `'${userAns}' is wrong answer. Correct answer was '${compAns}'\n`,
      );
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!\n`);
  } else {
    console.log(`Let's try again, ${name}.\n`);
  }
};

const runTheGame = () => {
  const game = readlineSync.question('What game do you want to play?\n ');
  switch (game) {
    case 'brain-calc':
      gameLogic(calcGame());
      break;
    case 'brain-even':
      gameLogic(evenOrNot());
      break;
    case 'brain-gcd':
      gameLogic(playNOD());
      break;
    case 'brain-progression':
      gameLogic(playProgression());
      break;
    case 'brain-prime':
      gameLogic(isPrime());
      break;
    default:
      console.log(
        "I don't know this game. Type me 'brain-calc','brain-even','brain-gcd','brain-progression' and try again.",
      );
      break;
  }
};

export {
  getYourName, runTheGame, gameLogic, welcome,
};
