import { clone } from 'ramda';
import { wordlists } from 'bip39';

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

const EXPECT_LENGTH = 5;
export const getNoiseWord = (word, language = 'EN') => {
  const result = [];
  while (result.length !== EXPECT_LENGTH - 1) {
    const pickedWord = wordlists[language][Math.floor(Math.random() * wordlists[language].length)];
    if (pickedWord !== word) {
      result.push(pickedWord);
    }
  }
  result.push(word);
  return shuffle(result);
};

export const generateQuestionWordsAndNoise = (secretWords, questionNumber) => {
  return pickQuestionWords(secretWords, questionNumber).map(each => ({
    ...each,
    ...{ noiseWithAnswer: shuffle([...getNoiseWord(each), each.value]) },
  }));
};
