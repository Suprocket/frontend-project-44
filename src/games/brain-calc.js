import engine from '../index.js';
import getRandom from '../utils.js';

const calcGame = () => {
  const gameRules = 'What is the result of the expression?';

  let randomNumber1 = 1;
  let randomNumber2 = 1;
  let randomOperation = '';

  const gameQuestion = () => {
    randomNumber1 = getRandom();
    randomNumber2 = getRandom();

    const arrOfOperations = ['+', '-', '*'];
    const randomNumOfOperation = Math.floor(
      Math.random() * arrOfOperations.length,
    );

    randomOperation = arrOfOperations[randomNumOfOperation];
    const randomString = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    return randomString;
  };

  const compAnswer = (answer) => {
    let funcAns = answer;

    switch (randomOperation) {
      case '+':
        funcAns = randomNumber1 + randomNumber2;
        break;
      case '-':
        funcAns = randomNumber1 - randomNumber2;
        break;
      case '*':
        funcAns = randomNumber1 * randomNumber2;
        break;
      default:
        console.log('Error in switch/case of randomOperation');
        break;
    }
    return String(funcAns);
  };

  engine(gameRules, gameQuestion, compAnswer);
};

export default calcGame;
