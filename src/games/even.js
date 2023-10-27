import engine from '../index.js';
import getRandom from '../utils.js';

const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playEven = () => {
  const gameData = () => {
    const randomNumber = getRandom(0, 100);
    const gameQuestion = randomNumber;
    const compAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameInfo, gameData);
};
export default playEven;
