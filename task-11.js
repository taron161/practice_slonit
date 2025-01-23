// task 1
const validateText = (text) => {
  if (text.length < 1) {
    return;
  }
  return text[0].toUpperCase() + text.slice(1);  
};

//  task 2
const cutText = (text, size) => {
  if (text.length <= size) {
    return text;
  }

  let str = text.slice(0, size);
  const ending = '...';
  const separator = ' (,.!?:;)/';

  for (let i = size; i < text.length; i++) {
    if (separator.includes(text[i])) {
      break;
    }
    str += text[i];
  }

  return str + ending;
}

// task 3
const hasSubstr = (text1, text2) => {
  return text1.includes(text2) || text2.includes(text1);
};
