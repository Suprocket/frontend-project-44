console.log("What is the result of the expression?");

const calcGame = () => {
  while (correctAnswers < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const arrOfOperations = ["+", "-", "/", "*"];
    const randomNumOfOperation = Math.floor(
      Math.random() * arrOfOperations.length
    );
    const randomOperation = arrOfOperations[randomNumOfOperation];
    let correctAnswer = 0;

    switch (randomOperation) {
      case "+":
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case "-":
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case "*":
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      case "/":
        correctAnswer = Math.floor(randomNumber1 / randomNumber2);
        break;
      default:
        console.log("Error in switch/case of randomOperation");
        break;
    }

    const userAnswer = Number(
      readlineSync.question(
        `Question: ${randomNumber1} ${randomOperation} ${randomNumber2} \n`
      )
    );
    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log("Correct!");
    } else {
      console.log(typeof correctAnswer);
      console.log(typeof userAnswer);
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`
      );
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default calcGame;
