// Логгер
const createLogger = () => {
  const messages = [];
  return {
    log: (message) => {
      messages.push(message);
    },
    getLogs: () => {
      return messages;
    }
  };
};

const logger = createLogger();
console.log(logger.getLogs());
logger.log('foo');
console.log(logger.getLogs());
logger.log('bar');
console.log(logger.getLogs());
logger.log('baz');
console.log(logger.getLogs());

// Генератор случайных чисел из диапазона
const createRandomGenerator = (min, max) => {
  return () => {
    return Math.floor(Math.random() * (max - min) + min);
  };
};

const rnd = createRandomGenerator(0, 100);
console.log(rnd());
console.log(rnd());
console.log(rnd());
console.log(rnd());
