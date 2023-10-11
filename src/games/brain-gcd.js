import engine from '../index.js';
import getRandom from '../utils.js';

const playGCD = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  let randomNumber1 = 1;
  let randomNumber2 = 1;

  const gameQuestion = () => {
    randomNumber1 = getRandom();
    randomNumber2 = getRandom();

    const randomString = `${randomNumber1} ${randomNumber2}`;
    return randomString;
  };

  const compAnswer = (answer) => {
    let compans = answer;
    while ((randomNumber1 !== 0) && (randomNumber2 !== 0)) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 %= randomNumber2;
      } else {
        randomNumber2 %= randomNumber1;
      }
    }
    compans = randomNumber1 + randomNumber2;
    return String(compans);
  };

  engine(gameRules, gameQuestion, compAnswer);
};

export default playGCD;
