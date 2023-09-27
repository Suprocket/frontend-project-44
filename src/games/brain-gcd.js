import readlineSync from "readline-sync";

const playNOD = () => {
  console.log("\nFind the greatest common divisor of given numbers.");

  let randomNumber1 = 1;
  let randomNumber2 = 1;

  const getQuestion = () => {
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);

    let randomString = `${randomNumber1} ${randomNumber2}`;
    console.log(`Question: ${randomNumber1} ${randomNumber2}\n`);
    return randomString;
  };

  const userAnswer = (answer) => {
    answer = Number(readlineSync.question(`Your answer: `));
    return answer;
  };

  const compAnswer = (answer) => {
    while ((randomNumber1 != 0) & (randomNumber2 != 0)) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 = randomNumber1 % randomNumber2;
      } else {
        randomNumber2 = randomNumber2 % randomNumber1;
      }
    }
    answer = randomNumber1 + randomNumber2;
    return answer;
  };

  return {
    getQuestion,
    userAnswer,
    compAnswer,
  };
};

export default playNOD;
