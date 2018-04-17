import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';
import WordsBox from './WordsBox';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 200;
`;

const getBody = (words, page, selectedWord) => (
  <Container>
    <Text style={{ fontSize: 40, color: 'white' }}>{`#${page}`}</Text>
    <WordsBox words={words} />
  </Container>
);

const generateBtn = (title, onPress) => (
  <CBButton
    style={{
      marginTop: 20,
      marginBottom: 40,
      backgroundColor: 'white',
    }}
    textColor={'#5170EB'}
    text={title}
    onPress={onPress}
  />
);

const confirmPage = page => ({ locale, words, selectedWord }) => {
  const confirmPageSetting = lang[locale].confirmPage;
  return (
    <SecretCodePanel
      header={confirmPageSetting.header}
      descriptions={confirmPageSetting.descriptions}
      body={getBody(words, page, selectedWord)}
      button={generateBtn(confirmPageSetting[`button${page}`], () => {})}
    />
  );
};

export const ConfirmPageOne = confirmPage(1);
export const ConfirmPageTwo = confirmPage(2);
