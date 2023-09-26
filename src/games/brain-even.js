import readlineSync from "readline-sync";

const evenOrNot = () => {
  console.log('\nAnswer "yes" if the number is even, otherwise answer "no".\n');

  let randomNumber = 1;

  const getQuestion = () => {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    return randomNumber;
  };

  const userAnswer = (answer) => {
    answer = readlineSync.question(`Your answer: `);
    return answer;
  };

  const compAnswer = (answer) => {
    let isEven = randomNumber % 2 === 0;
    if (isEven) {
      return (answer = "yes");
    } else {
      return (answer = "no");
    }
  };

  return {
    getQuestion,
    userAnswer,
    compAnswer,
  };
};

export default evenOrNot;
