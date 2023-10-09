// func of randomNumbers Generator

const getRandom = (number) => {
    number = Math.floor(Math.random() * 100);
    return number;
}

export default getRandom;