import engine from '../index.js';
import { getRandom, getNOD } from '../modules.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getNOD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  let total = 0;
  while (number1 && number2) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    total = number1 + number2;
  }
  return total;
};

const playGCD = () => {
  const gameData = () => {
    const randomNumber1 = getRandom(0, 100);
    const randomNumber2 = getRandom(0, 100);
    const gameQuestion = `${randomNumber1} ${randomNumber2}`;
    const compAnswer = getNOD(randomNumber1, randomNumber2);
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};

export default playGCD;
