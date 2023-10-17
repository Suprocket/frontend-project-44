import engine from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 4) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const gameData = () => {
    const randomNumber = getRandom(1, 100);
    const gameQuestion = randomNumber;
    const compAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};

export default playPrime;
