import engine from '../index.js';
import getRandom from '../utils.js';

const gameInfo = 'Find the greatest common divisor of given numbers.';

const getNOD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getNOD(num2, num1 % num2);
};

const playGCD = () => {
  const gameData = () => {
    const randomNumber1 = getRandom(0, 100);
    const randomNumber2 = getRandom(0, 100);
    const gameQuestion = `${randomNumber1} ${randomNumber2}`;
    const compAnswer = getNOD(randomNumber1, randomNumber2);
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameInfo, gameData);
};

export default playGCD;
