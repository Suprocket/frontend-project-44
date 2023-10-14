import engine from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'What is the result of the expression?';

const playCalc = () => {

  const gameQuestion = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();

    const arrOfOperations = ['+', '-', '*'];
    const randomNumOfOperation = Math.floor(
      Math.random() * arrOfOperations.length,
    );

    const randomOperation = arrOfOperations[randomNumOfOperation];
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

export default playCalc;
