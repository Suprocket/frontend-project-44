import readlineSync from "readline-sync";

const calcGame = () => {
  console.log("What is the result of the expression?");

  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const arrOfOperations = ["+", "-", "/", "*"];
  const randomNumOfOperation = Math.floor(
    Math.random() * arrOfOperations.length
  );
  const randomOperation = arrOfOperations[randomNumOfOperation];

  const userAnswer = (answer) => {
    answer = Number(
      readlineSync.question(
        `Question: ${randomNumber1} ${randomOperation} ${randomNumber2} \n`
      )
    );
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
    userAnswer,
    compAnswer,
  };
};

export default calcGame;
