import { clone } from 'ramda';

export const shuffle = array => {
  const newArray = clone(array);
  let m = newArray.length;
  let t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = newArray[m];
    newArray[m] = newArray[i];
    newArray[i] = t;
  }
  return newArray;
};

export const transformSecretCodeFormat = secretCode =>
  secretCode.map((eachCode, index) => ({ value: eachCode, index: index + 1 }));

export const pickQuestionWords = (secretCode, questionNumber) => {
  const shuffledNewList = shuffle(secretCode);
  return [...Array(questionNumber).keys()].map(eachIndex => shuffledNewList[eachIndex]);
};

export const getNoiseWord = word => {
  return ['grass', 'belt', 'hello', 'word', 'hi'];
};

export const generateQuestionWordsAndNoise = (secretWords, questionNumber) => {
  return pickQuestionWords(secretWords, questionNumber).map(each => ({
    ...each,
    ...{ noiseWithAnswer: shuffle([...getNoiseWord(each), each.value]) },
  }));
};
