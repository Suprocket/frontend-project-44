import engine from '../index.js';
import {getRandom, primeOrNot} from '../modules.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const playGCD = () => {
  const gameData = () => {
    let randomNumber1 = getRandom(0, 100);
    let randomNumber2 = getRandom(0, 100);
    const gameQuestion = `${randomNumber1} ${randomNumber2}`;
    let compAnswer = '';
    while ((randomNumber1 !== 0) && (randomNumber2 !== 0)) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 %= randomNumber2;
      } else {
        randomNumber2 %= randomNumber1;
      }
    }
    compAnswer = randomNumber1 + randomNumber2;
    return [gameQuestion, String(compAnswer)];
  }
  engine(gameRules, gameData);
};
export default playGCD;