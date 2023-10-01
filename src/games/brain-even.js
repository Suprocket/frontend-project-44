import readlineSync from 'readline-sync';

const evenOrNot = () => {
  console.log('\nAnswer "yes" if the number is even, otherwise answer "no".\n');

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
    const isEven = randomNumber % 2 === 0;
    if (isEven) {
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

export default evenOrNot;
