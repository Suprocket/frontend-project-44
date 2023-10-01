import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('What is the result of the expression?\n');

  let randomNumber1 = 1;
  let randomNumber2 = 1;
  let randomOperation = '';

  const getQuestion = () => {
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);

    const arrOfOperations = ['+', '-', '/', '*'];
    const randomNumOfOperation = Math.floor(
      Math.random() * arrOfOperations.length,
    );

    randomOperation = arrOfOperations[randomNumOfOperation];
    const randomString = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    console.log(`Question: ${randomString}`);
    return randomString;
  };

  const userAnswer = (answer) => {
    let userans = answer;
    userans = Number(readlineSync.question('Your answer: '));
    return userans;
  };

  const compAnswer = (answer) => {
    let funcAns = answer;

    switch (randomOperation) {
      case '+':
        funcAns = randomNumber1 + randomNumber2;
        break;
      case '-':
        funcAns = randomNumber1 - randomNumber2;
        break;
      case '*':
        funcAns = randomNumber1 * randomNumber2;
        break;
      case '/':
        funcAns = Math.floor(randomNumber1 / randomNumber2);
        break;
      default:
        console.log('Error in switch/case of randomOperation');
        break;
    }
    return funcAns;
  };
  return {
    getQuestion,
    userAnswer,
    compAnswer,
  };
};

export default calcGame;
