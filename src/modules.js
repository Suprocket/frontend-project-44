// func of randomNumbers Generator

const getRandom = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

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

const evenOrNot = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getNOD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  let total = 0;
  while (number1 && number2) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    total = number1 + number2;
  }
  return total;
};

export {
  getRandom, primeOrNot, evenOrNot, getNOD,
};
