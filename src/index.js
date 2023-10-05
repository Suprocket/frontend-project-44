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
                return;
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
        gameAnswer
    ]
} 

export default engine;

// import { getYourName, runTheGame, welcome } from './logic.js';

// welcome();

// getYourName();
// runTheGame();

// Правильно ли реализован isCorrect, и как передавать туда compAnswer.
        // Проверить на Переписать bin/brain...
        // Проверить на games/brain.. функциональность.
        // Переписать остальные, проверить все снова
        // Запустить автотесты
        // Запустить https://codeclimate.com/.
        // Отдать на проверку