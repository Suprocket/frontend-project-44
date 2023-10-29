import engine from '../index.js';
import getRandom from '../utils.js';

const gameInfo = 'What number is missing in the progression?';

const generateProgression = (item, step, length) => {
  const arrOfNumbers = [];

  for (let i = 0; i < length; i += 1) {
    arrOfNumbers.push(item + i * step);
  }

  return arrOfNumbers;
};

const playProgression = () => {
  const gameData = () => {
    const randomNumber = getRandom(1, 100);
    const arrStep = getRandom(1, 10);
    const arrLength = getRandom(5, 10);
    const progression = generateProgression(randomNumber, arrStep, arrLength);
    const addIndexForPoints = getRandom(0, progression.length - 1);
    const compAnswer = String(progression.splice(addIndexForPoints, 1, '..'));
    const gameQuestion = progression.join(' ');

    return [gameQuestion, compAnswer];
  };
  engine(gameInfo, gameData);
};

export default playProgression;
