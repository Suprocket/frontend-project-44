import readlineSync from 'readline-sync';

let correctAnswers = 0;

const engine = (gameRules, gameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(gameRules);

  while (correctAnswers < 3) {
    const outOfData = gameData();
    console.log(`Question: ${outOfData[0]}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    console.log(outOfData[1]);

    if (userAnswer === outOfData[1]) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${outOfData[1]}'`);
      correctAnswers = 4;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }

  return [
    gameRules,
    gameData,
  ];
};

export default engine;
