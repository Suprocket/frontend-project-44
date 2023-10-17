import engine from '../index.js';
import { getRandom, getNOD } from '../modules.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

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
