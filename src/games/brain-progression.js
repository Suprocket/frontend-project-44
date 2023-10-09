import engine from "../index.js";

const playProgression = () => {
  const gameRules = 'What number is missing in the progression?';

  let answerNum = 0;

  function getRandomInt(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  const gameQuestion = () => {
    const arrOfNumbers = [];
    let randomNumber = Math.floor(Math.random() * 100);
    const step = Math.floor(Math.random() * 10);
    const numsInArr = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < numsInArr; i += 1) {
      randomNumber += step;
      arrOfNumbers.push(randomNumber);
    }
    const addIndexForPoints = getRandomInt(0, arrOfNumbers.length - 1);

    answerNum = Number(arrOfNumbers.splice(addIndexForPoints, 1, '...'));

    console.log(`Question: ${arrOfNumbers}\n`);
    return arrOfNumbers;
  };

  const compAnswer = (answer) => {
    let compans = answer;
    compans = answerNum;
    return String(compans);
  };
  engine(gameRules, gameQuestion(), compAnswer());

};

export default playProgression;
