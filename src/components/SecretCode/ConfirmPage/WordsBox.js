import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CBButton from '../../Core/CBButton/index';
import { ButtonColors } from '../../../theme/CBColor';

const WordButton = styled(CBButton)`
  height: 50;
  background-color: ${props => (props.selected ? ButtonColors.white : 'transparent')};
  padding-top: 10;
  padding-bottom: q0;
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

const Word = ({ word, selected, onItemPress }) => (
  <WordButton
    text={word}
    onPress={onItemPress}
    textStyle={{ color: selected ? '#5170EB' : 'white' }}
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
