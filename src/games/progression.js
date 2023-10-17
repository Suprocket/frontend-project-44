import engine from '../index.js';
import getRandom from '../modules.js';

const gameRules = 'What number is missing in the progression?';

const playProgression = () => {
  const gameData = () => {
    let randomNumber = getRandom(1, 100);
    const arrOfNumbers = [];
    const step = getRandom(1, 10);
    const numsInArr = getRandom(5, 10);
    for (let i = 0; i < numsInArr; i += 1) {
      randomNumber += step;
      arrOfNumbers.push(randomNumber);
    }
    const addIndexForPoints = getRandom(0, arrOfNumbers.length - 1);
    const compAnswer = String(arrOfNumbers.splice(addIndexForPoints, 1, '..'));
    const gameQuestion = arrOfNumbers.join(' ');
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};

export default playProgression;
