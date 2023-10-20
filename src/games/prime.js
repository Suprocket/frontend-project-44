import engine from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
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
