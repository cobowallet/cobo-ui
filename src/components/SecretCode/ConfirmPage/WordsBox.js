import React from 'react';
import { View, Text } from 'react-native';
import CBButton from '../../Core/CBButton/index';

const Word = ({ word, selected, onPress }) => (
  <CBButton
    text={word}
    onPress={onPress}
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

const Words = ({ words, selectedWord }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {words.map(each => <Word selected={each === selectedWord} word={each} />)}
    </View>
  );
};
export default Words;
