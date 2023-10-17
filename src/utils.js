// func of randomNumbers Generator

const getRandom = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

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
  getRandom, getNOD,
};
