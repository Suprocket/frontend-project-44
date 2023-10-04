#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const playProgression = () => {
  let correctAnswers = 0;
  function getRandomInt(min, max) {
    let minimal = min;
    let maximum = max;
    minimal = Math.ceil(minimal);
    maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimal + 1)) + minimal;
  }

  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  while (correctAnswers < 3) {
    let randomNumber = Math.floor(Math.random() * 100);
    const step = Math.floor(Math.random() * 10);
    const numsInArr = Math.floor(Math.random() * 10) + 5;
    const arrOfNumbers = [];

    for (let i = 0; i < numsInArr; i += 1) {
      randomNumber += step;
      arrOfNumbers.push(randomNumber);
    }

    const addIndexForPoints = getRandomInt(0, arrOfNumbers.length - 1);

    const compAnswer = Number(arrOfNumbers.splice(addIndexForPoints, 1, '...'));

    console.log(`Question: ${arrOfNumbers.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

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
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

playProgression();
