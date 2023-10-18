import engine from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'What is the result of the expression?';

const calculation = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const playCalc = () => {
  const gameData = () => {
    const randomNumber1 = getRandom(0, 100);
    const randomNumber2 = getRandom(0, 100);
    const arrOfOperations = ['+', '-', '*'];

    const numOfOperation = getRandom(0, arrOfOperations.length - 1);
    const randomOperation = arrOfOperations[numOfOperation];
    const gameQuestion = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    const compAnswer = calculation(randomNumber1, randomOperation, randomNumber2);
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};
export default playCalc;
