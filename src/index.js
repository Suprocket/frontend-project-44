import readlineSync from 'readline-sync';

let correctAnswers = 0;

const engine = (gameRules, gameQuestion, compAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(gameRules);

  while (correctAnswers < 3) {
    console.log(`Question: ${gameQuestion()}`);
    const userAnswer = (readlineSync.question('Your answer: '));

    if (userAnswer === compAnswer()) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${compAnswer()}'`);

      // Костыль ниже!!

      correctAnswers = 4;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}.`);
  }

  return [
    gameRules,
    gameQuestion,
    compAnswer,
  ];
};

export default engine;

// Запустить автотесты
// Запустить https://codeclimate.com/.
// Отдать на проверку
