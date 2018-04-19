import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CBButton from '../../Core/CBButton/index';

const Word = ({ word, selected, onItemPress }) => (
  <CBButton
    text={word}
    onPress={onItemPress}
    textStyle={{ color: selected ? '#5170EB' : 'white' }}
    style={{
      height: 50,
      backgroundColor: selected ? 'white' : 'transparent',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 0,
      marginRight: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
    }}
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
