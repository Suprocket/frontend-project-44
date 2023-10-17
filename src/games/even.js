import engine from '../index.js';
import { getRandom, evenOrNot } from '../modules.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {
  const gameData = () => {
    const randomNumber = getRandom(0, 100);
    const gameQuestion = randomNumber;

    const compAnswer = evenOrNot(randomNumber);
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};
export default playEven;
