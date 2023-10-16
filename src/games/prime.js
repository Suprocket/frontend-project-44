import engine from '../index.js';
import {getRandom, primeOrNot} from '../modules.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrime = () => {

  const gameData = () => {
    const randomNumber = getRandom(1, 100);
    const gameQuestion = randomNumber;
    const compAnswer = primeOrNot(randomNumber) === true ? 'yes' : 'no';
    return [gameQuestion, String(compAnswer)];
  }
  engine(gameRules, gameData);
};

export default playPrime;