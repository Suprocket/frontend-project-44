import readlineSync from "readline-sync";

const evenOrNot = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumber = Math.floor(Math.random() * 100);
  const isEven = randomNumber % 2 === 0;

  const userAnswer = (answer) => {
    answer = readlineSync.question(`Question: ${randomNumber}\n`);
    return answer;
  };

  const compAnswer = (answer) => {
    if (isEven) {
      return (answer = "yes");
    } else {
      return (answer = "no");
    }
  };

  return {
    userAnswer,
    compAnswer,
  };
};

export default evenOrNot;
