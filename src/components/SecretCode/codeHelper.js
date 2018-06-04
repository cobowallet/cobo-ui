import { clone, range } from 'ramda';
import englishWordList from 'bip39/wordlists/english.json';
import chineseSimplifiedWordList from 'bip39/wordlists/chinese_simplified.json';
import chineseTraditionalWordList from 'bip39/wordlists/chinese_traditional.json';

const wordlists = {
  EN: englishWordList,
  chinese_simplified: chineseSimplifiedWordList,
  chinese_traditional: chineseTraditionalWordList,
};

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
  return range(0, questionNumber).map(eachIndex => shuffledNewList[eachIndex]);
};

const EXPECT_LENGTH = 4;
export const getNoiseWord = (word, language = 'EN') => {
  const result = [];
  while (result.length !== EXPECT_LENGTH) {
    const pickedWord = wordlists[language][Math.floor(Math.random() * wordlists[language].length)];
    if (pickedWord !== word) {
      result.push(pickedWord);
    }
  }

  return result;
};

export const generateQuestionWordsAndNoise = (secretWords, questionNumber) => {
  return pickQuestionWords(secretWords, questionNumber).map(each => ({
    ...each,
    ...{ noiseWithAnswer: shuffle([...getNoiseWord(each), each.value]) },
  }));
};
