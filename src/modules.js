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

const evenOrNot = (number) => number % 2 === 0? 'yes': 'no';

export { getRandom, primeOrNot, evenOrNot };
