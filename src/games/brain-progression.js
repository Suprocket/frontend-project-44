import readlineSync from "readline-sync";

const playProgression = () => {
  console.log("What number is missing in the progression?");

  let answerNum = 0;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getQuestion = () => {
    let arrOfNumbers = [];
    let randomNumber = Math.floor(Math.random() * 100);
    let step = Math.floor(Math.random() * 10);
    let numsInArr = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < numsInArr; i += 1) {
      randomNumber += step;
      arrOfNumbers.push(randomNumber);
    }
    let addIndexForPoints = getRandomInt(0, arrOfNumbers.length - 1);

    answerNum = Number(arrOfNumbers.splice(addIndexForPoints, 1, "..."));

    console.log(`Question: ${arrOfNumbers}\n`);
    return answerNum;
  };

  const userAnswer = (answer) => {
    answer = Number(readlineSync.question(`Your answer: `));
    return answer;
  };

  const compAnswer = (answer) => {
    answer = answerNum;
    return answer;
  };

  return {
    getQuestion,
    userAnswer,
    compAnswer,
  };
};

export default playProgression;
