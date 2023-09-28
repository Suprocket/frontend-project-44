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

    for (let i = 0; i < numsInArr; i += 1) {
      randomNumber += step;
      arrOfNumbers.push(randomNumber);
      console.log(arrOfNumbers);
    }

    const userAnswer = Number(
      readlineSync.question(`Question: ${arrOfNumbers}\n`)
    );

    // while ((randomNumber1 != 0) & (randomNumber2 != 0)) {
    //   if (randomNumber1 > randomNumber2) {
    //     randomNumber1 = randomNumber1 % randomNumber2;
    //   } else {
    //     randomNumber2 = randomNumber2 % randomNumber1;
    //   }
    // }

    // const compAnswer = randomNumber1 + randomNumber2;
    // if (userAnswer === compAnswer) {
    //   console.log("Correct!");
    //   correctAnswers += 1;
    // } else {
    //   console.log(
    //     `'${userAnswer}' is wrong answer ;(. Correct answer was ${compAnswer}.`
    //   );
    //   break;
    // }
  }
  //   if (correctAnswers === 3) {
  //     console.log(`Congratulations, ${name}`);
  //   } else {
  //     console.log(`Let's try again, ${name}`);
  //   }
};

playProgression();
