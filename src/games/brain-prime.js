import engine from '../index.js';
import getRandom from '../utils.js';

const isPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  let randomNumber = 1;

  const gameQuestion = () => {
    randomNumber = getRandom();
    return randomNumber;
  };

  const compAnswer = (answer) => {
    let compans = answer;
    const primeOrNot = (number) => {
      if (number < 2) return false;
      if (number === 4) return false;
      for (let i = 2; i < number / 2; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };

    if (primeOrNot(randomNumber) === true) {
      compans = 'yes';
    } else {
      compans = 'no';
    }
    return compans;
  };

  engine(gameRules, gameQuestion, compAnswer);
};

export default isPrime;
