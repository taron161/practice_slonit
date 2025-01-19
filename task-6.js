// Игра "Угадай число"
const MAX_INT = 100;
const MIN_INT = 1;

let currentStep = MAX_INT;
let isBigger;
let isFind = false;
let minCheck = MIN_INT;
let maxCheck = MAX_INT;

const generateRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const randomInt = generateRandomInt(MIN_INT, MAX_INT);

const showRandomInt = () => console.log(`Компьютер 1 загадал число ${randomInt}\n`);

const playComp2 = () => {
  if (currentStep === MAX_INT) {
    currentStep = Math.floor(currentStep / 2);    
  } else if (isBigger) {
    currentStep = Math.floor(currentStep + ((maxCheck - minCheck) / 2));
  } else {
    currentStep = Math.floor(currentStep - ((maxCheck - minCheck) / 2));
  }
  console.log(`Компьютер 2: Пробую число ${currentStep}.`);
}

const playComp1 = () => {
  if (isFind) {
    console.log('Компьютер 1: Угадал!');
    return;
  }

  if (isBigger) {
    console.log('Компьютер 1: Больше.');
  } else {
    console.log('Компьютер 1: Меньше.');
  }
};

const checkStep = () => {
  isFind = currentStep === randomInt;
  isBigger = currentStep < randomInt;

  if (isBigger) {
    minCheck = currentStep;
  } else {
    maxCheck = currentStep;
  }
}

const playGame = () => {
  while (!isFind) {
    playComp2();
    checkStep();
    playComp1();
  }
}

showRandomInt();
playGame();
