#!/usr/bin/env node

import isPrime from "../src/games/brain-prime.js";

isPrime();

// import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

// const isPrime = () => {
//   let correctAnswers = 0;
//   const name = readlineSync.question('May I have your name?: ');

//   console.log(`Hello, ${name}`);
//   console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

//   while (correctAnswers < 3) {
//     const randomNumber = Math.floor(Math.random() * 100);

//     console.log(`Question: ${randomNumber}`);
//     const userAnswer = (readlineSync.question('Your answer: '));

//     const primeOrNot = (number) => {
//       if (number < 2) return false;
//       if (number === 4) return false;
//       for (let i = 2; i < number / 2; i += 1) {
//         if (number % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     };

//     if (
//       (primeOrNot(randomNumber) === true && userAnswer === 'yes')
//       || (primeOrNot(randomNumber) === false && userAnswer === 'no')
//     ) {
//       correctAnswers += 1;
//       console.log('Correct!');
//     } else if (primeOrNot(randomNumber) === false && userAnswer === 'yes') {
//       console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
//       break;
//     } else if (primeOrNot(randomNumber) === true && userAnswer === 'no') {
//       console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
//       break;
//     } else {
//       console.log(`${userAnswer} is wrong answer`);
//       break;
//     }
//   }
//   if (correctAnswers === 3) {
//     console.log(`Congratulations, ${name}!`);
//   } else {
//     console.log(`Let's try again, ${name}!`);
//   }
// };

// isPrime();
