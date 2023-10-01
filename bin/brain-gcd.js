#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const playNOD = () => {
  let correctAnswers = 0;
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');

  while (correctAnswers < 3) {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);
    const userAnswer = Number(
      readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\n`),
    );

    while ((randomNumber1 !== 0) && (randomNumber2 !== 0)) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 %= randomNumber2;
      } else {
        randomNumber2 %= randomNumber1;
      }
    }
    const compAnswer = randomNumber1 + randomNumber2;
    if (userAnswer === compAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${compAnswer}.`,
      );
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

playNOD();
