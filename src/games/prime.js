import engine from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const gameData = () => {
    const randomNumber = getRandom(1, 100);
    const gameQuestion = randomNumber;
    const compAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [gameQuestion, String(compAnswer)];
  };
  engine(gameRules, gameData);
};

export default playPrime;
