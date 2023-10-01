#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const evenOrNot = () => {
  let correctAnswers = 0;
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = randomNumber % 2 === 0;
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \n`);
    if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (!isEven && userAnswer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else if (isEven && userAnswer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else {
      console.log(`${userAnswer} is wrong answer`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

evenOrNot();
