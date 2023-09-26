import readlineSync from "readline-sync";

const calcGame = () => {
  console.log("What is the result of the expression?\n");

  let randomNumber1 = 1;
  let randomNumber2 = 1;
  let randomOperation = "";

  const getQuestion = () => {
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);

    const arrOfOperations = ["+", "-", "/", "*"];
    let randomNumOfOperation = Math.floor(
      Math.random() * arrOfOperations.length
    );

    randomOperation = arrOfOperations[randomNumOfOperation];
    let randomString = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    console.log(`Question: ${randomString}`);
    return randomString;
  };

  const userAnswer = (answer) => {
    answer = Number(readlineSync.question(`Your answer: `));
    return answer;
  };

  const compAnswer = (answer) => {
    switch (randomOperation) {
      case "+":
        return (answer = randomNumber1 + randomNumber2);
      case "-":
        return (answer = randomNumber1 - randomNumber2);
      case "*":
        return (answer = randomNumber1 * randomNumber2);
      case "/":
        return (answer = Math.floor(randomNumber1 / randomNumber2));
      default:
        console.log("Error in switch/case of randomOperation");
        break;
    }
  };
  return {
    getQuestion,
    userAnswer,
    compAnswer,
  };
};

export default calcGame;
