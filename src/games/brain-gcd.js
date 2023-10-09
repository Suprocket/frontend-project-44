import engine from "../index.js";

const playNOD = () => {
  const gameRules = 'What is the result of the expression?';

  let randomNumber1 = 1;
  let randomNumber2 = 1;

  const gameQuestion = () => {
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);

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

  engine(gameRules, gameQuestion(), compAnswer());
};

export default playNOD;
