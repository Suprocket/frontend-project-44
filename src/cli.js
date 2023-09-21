import readlineSync from "readline-sync";

const getYourName = () => {
  const name = readlineSync.question("Hey! What's your name?: ");
  console.log(`Hello ${name}`);
};

export default getYourName;
