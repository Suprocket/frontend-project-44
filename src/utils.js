// func of randomNumbers Generator

const getRandom = (number) => {
  let num = number;
  num = Math.floor(Math.random() * 100);
  return num;
};

export default getRandom;
