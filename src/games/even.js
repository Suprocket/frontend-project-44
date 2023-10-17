import engine from '../index.js';
import { getRandom, isEven } from '../modules.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {
  const gameData = () => {
    const randomNumber = getRandom(0, 100);
    const gameQuestion = randomNumber;
    const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
    const compAnswer = isEven(randomNumber);
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};
export default playEven;
