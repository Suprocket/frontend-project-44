import readlineSync from 'readline-sync';

const completeRounds = 3;

const engine = (gameInfo, gameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(gameInfo);

  for (let correctAnswers = 0; correctAnswers < completeRounds; correctAnswers += 1) {
    const [gameQuestion, compAnswer] = gameData();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (userAnswer !== compAnswer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${compAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
