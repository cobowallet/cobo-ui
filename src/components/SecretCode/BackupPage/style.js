import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { CBText, CBLabel, CBButton } from '../../Core';

const { width } = Dimensions.get('window');

export const BaseScrollView = styled.ScrollView`
  width: ${width};
  height: 100%;
`;

export const ScrollViewContent = styled.View`
  padding-horizontal: 16;
  align-items: stretch;
`;

export const HeaderContainer = styled.View`
  padding-top: 20;
`;

export const HeaderTitle = styled(CBLabel)`
  margin-bottom: 20;
  line-height: 33;
`;

export const HeaderDesc = styled(CBText)`
  line-height: 20;
`;

export const FinishButton = styled(CBButton)`
  margin-top: 20;
  background-color: ${props => props.theme.buttonBackgroundColor};
  margin-bottom: 20;
`;

const WordsContainer = styled.View`
  background-color: transparent;
`;

const WordsContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const WordsTouchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 3;
  padding-horizontal: 11;
  padding-vertical: 8;
  margin-bottom: 16;
  margin-right: 12;
`;

const WordsTitle = styled(CBText)`
  line-height: 15;
`;

const WordSelected = ({ words, onHigherOrderPress, style = {} }) => {
  return (
    <WordsContainer style={style}>
      <WordsContent>
        {words &&
          words.map((word, index) => {
            return (
              <WordsTouchable
                key={index.toString()}
                onPress={onHigherOrderPress(word, index)}
                underlayColor={'white'}
                activeOpacity={0.6}
              >
                <WordsTitle small bold color={'dark'}>
                  {word}
                </WordsTitle>
              </WordsTouchable>
            );
          })}
      </WordsContent>
    </WordsContainer>
  );
};

export const SelectedWord = styled(WordSelected)`
  margin-top: 20;
  border-radius: 4;
  background-color: rgba(0, 0, 0, 0.4);
  padding-horizontal: 16;
  padding-top: 16;
  min-height: 208;
`;

export const UnSelectedWord = styled(WordSelected)`
  margin-top: 20;
  margin-bottom: 20;
`;
