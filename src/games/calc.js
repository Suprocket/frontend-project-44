import engine from '../index.js';
import { getRandom } from '../modules.js';

const gameRules = 'What is the result of the expression?';

const playCalc = () => {
  const gameData = () => {
    const randomNumber1 = getRandom(0, 100);
    const randomNumber2 = getRandom(0, 100);
    const arrOfOperations = ['+', '-', '*'];

    const numOfOperation = getRandom(0, arrOfOperations.length - 1);
    const randomOperation = arrOfOperations[numOfOperation];
    const gameQuestion = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    let compAnswer = '';

    switch (randomOperation) {
      case '+':
        compAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        compAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        compAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        console.log('Error in switch/case of randomOperation');
        break;
    }
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};
export default playCalc;
