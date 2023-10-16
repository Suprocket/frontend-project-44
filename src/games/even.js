import engine from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {

  const gameData = () => {
    const randomNumber = getRandom(0, 100);
    const gameQuestion = randomNumber;
    const isEven = randomNumber % 2 === 0;
    let compAnswer = '';

    if (isEven) {
      compAnswer = 'yes';
    } else {
      compAnswer = 'no';
    }
    return [gameQuestion, String(compAnswer)];
  }
  engine(gameRules, gameData);
};

export default playEven;
