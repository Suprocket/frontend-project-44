import readlineSync from 'readline-sync';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let randomNumber = 1;

  const getQuestion = () => {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    return randomNumber;
  };

  const userAnswer = (answer) => {
    let userans = answer;
    userans = readlineSync.question('Your answer: ');
    return userans;
  };

  const compAnswer = (answer) => {
    let compans = answer;
    const primeOrNot = (number) => {
      if (number < 2) return false;
      if (number === 4) return false;
      for (let i = 2; i < number / 2; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };

    if (primeOrNot(randomNumber) === true) {
      compans = 'yes';
    } else {
      compans = 'no';
    }
    return compans;
  };

  return {
    getQuestion,
    userAnswer,
    compAnswer,
  };
};

export default isPrime;
