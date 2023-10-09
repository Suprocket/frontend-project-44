import readlineSync from 'readline-sync';

let correctAnswers = 0;

const engine = (gameRules, gameQuestion, compAnswer) => {
    
    console.log('Welcome to the Brain Games!\n');

    const name = readlineSync.question('May I have your name?:\n ');
    console.log(`\nHello, ${name}\n`);

    console.log(gameRules);

    while (correctAnswers < 3){
        console.log(`Question: ${gameQuestion}`);
        const userAnswer = (readlineSync.question('Your answer: '));
        
        const isCorrect = (userAnswer, compAnswer) => {
            if (userAnswer === compAnswer){
                correctAnswers += 1;
                console.log('Correct!');
            }else{
                console.log(`'${userAnswer}' is wrong answer. Correct answer was '${compAnswer}'`);
                correctAnswers = 4;
            }
        }

        isCorrect(userAnswer, compAnswer);
    }

    if (correctAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log(`Let's try again, ${name}.`);
      }

    return [
        gameRules,
        gameQuestion,
        compAnswer
    ]
} 

export default engine;

// import { getYourName, runTheGame, welcome } from './logic.js';

// welcome();

// getYourName();
// runTheGame();

        // Вынести модуль рандомного числа за функции
        // Запустить автотесты
        // Запустить https://codeclimate.com/.
        // Отдать на проверку