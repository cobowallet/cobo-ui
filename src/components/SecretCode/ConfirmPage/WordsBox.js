import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { withTheme } from 'styled-components';
import CBButton from '../../Core/CBButton/index';
import { ButtonColors } from '../../../theme/CBColor';

const WordButton = styled(CBButton)`
  height: 50;
  background-color: ${props => (props.selected ? ButtonColors.pureWhite : 'transparent')};
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 20;
  padding-left: 20;
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 0;
  margin-bottom: 10;
  border-radius: 10;
  border-width: 1;
  border-color: ${ButtonColors.white};
`;

const Word = ({ word, selected, onItemPress, theme }) => (
  <WordButton
    text={word}
    onPress={onItemPress}
    textStyle={{ color: selected ? ButtonColors.blue : ButtonColors.pureWhite }}
    selected={selected}
  />
);

const Words = ({ words, selectedWord, onItemPress }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {words.map((each, index) => (
        <Word
          selected={each === selectedWord}
          word={each}
          onItemPress={() => onItemPress(each)}
          key={index}
        />
      ))}
    </View>
  );
};

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedWord: PropTypes.string.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default Words;
