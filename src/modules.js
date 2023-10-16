// func of randomNumbers Generator

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
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
export {getRandom, primeOrNot};