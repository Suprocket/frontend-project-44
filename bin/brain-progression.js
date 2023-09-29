#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");

const playProgression = () => {
  let correctAnswers = 0;
  const name = readlineSync.question("May I have your name?: ");

  console.log(`Hello ${name}!`);
  console.log("What number is missing in the progression?");

  while (correctAnswers < 3) {
    let randomNumber = Math.floor(Math.random() * 100);
    let step = Math.floor(Math.random() * 10);
    let numsInArr = Math.floor(Math.random() * 10) + 5;
    let arrOfNumbers = [];

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < numsInArr; i += 1) {
      randomNumber += step;
      arrOfNumbers.push(randomNumber);
    }

    let addIndexForPoints = getRandomInt(0, arrOfNumbers.length - 1);

    let compAnswer = Number(arrOfNumbers.splice(addIndexForPoints, 1, "..."));

    const userAnswer = Number(
      readlineSync.question(`Question: ${arrOfNumbers}\n`)
    );

    if (userAnswer === compAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${compAnswer}.`
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

playProgression();
