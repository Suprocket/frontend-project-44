import readlineSync from "readline-sync";

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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
    const primeOrNot = (number) => {
      if (number < 2) return false;
      if (number === 4) return false;
      for (let i = 2; i < number / 2; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };

    if (primeOrNot(randomNumber) === true) {
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

export default isPrime;
