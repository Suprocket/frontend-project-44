#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const calcGame = () => {
  let correctAnswers = 0;
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello ${name}`);
  console.log('What is the result of the expression?');

  while (correctAnswers < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const arrOfOperations = ['+','-','/','*'];
    const randomNumOfOperation = Math.floor(Math.random() * arrOfOperations.length);
    const randomOperation =  arrOfOperations[randomNumOfOperation];

    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2} \n`);
    if (userAnswer === Number(`${randomNumber1} ${randomOperation} ${randomNumber2}`)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
        const correctAnswer = Number(`${randomNumber1} ${randomOperation} ${randomNumber2}`);
        console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`);
        break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

evenOrNot();