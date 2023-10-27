import readlineSync from 'readline-sync';

let correctAnswers = 0;

const engine = (gameInfo, gameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(gameInfo);

  const completeRounds = 3;

  while (correctAnswers < completeRounds) {
    const outOfData = gameData();
    console.log(`Question: ${outOfData[0]}`);
    const userAnswer = (readlineSync.question('Your answer: '));

    if (userAnswer === outOfData[1]) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${outOfData[1]}'`);
      break;
    }
  }
  const resultInfo = correctAnswers === 3 ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(resultInfo);
};

export default engine;
