#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const calcGame = () => {
  let correctAnswers = 0;
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  while (correctAnswers < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const arrOfOperations = ['+', '-', '*'];
    const randomNumOfOperation = Math.floor(
      Math.random() * arrOfOperations.length,
    );
    const randomOperation = arrOfOperations[randomNumOfOperation];
    let correctAnswer = 0;

    switch (randomOperation) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        console.log('Error in switch/case of randomOperation');
        break;
    }

    console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`,
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

calcGame();
