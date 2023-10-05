import engine from "../index.js";

const evenOrNot = () => {

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  let randomNumber = 1;

  const gameQuestion = () => {
    randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
  };

  const compAnswer = (answer) => {
    let compans = answer;
    const isEven = randomNumber % 2 === 0;
    if (isEven) {
      compans = 'yes';
    } else {
      compans = 'no';
    }
    return compans;
  };

  engine(gameRules, gameQuestion, compAnswer);
};

export default evenOrNot;
