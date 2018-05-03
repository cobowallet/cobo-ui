import React from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import { Indicator } from '../../icons';

export const Container = styled.View`
  width: 100%;
  align-items: stretch;
`;

const InputView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16;
`;

const PasswordInput = styled.TextInput`
  height: 50;
  flex: 1;
  font-size: 15;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: ${props => props.theme.line};
`;

const PasswordHintText = styled.Text`
  margin-top: 6;
  font-size: 12;
  color: ${props => props.color};
`;

export const renderPasswordInputContent = ({
  onChangeText,
  value,
  placeholder,
  passwordPrompt,
  passwordPromptColor,
  isComplete,
  onSubmitEditing,
}) => {
  return (
    <Container>
      <InputView>
        <PasswordInput
          secureTextEntry
          onChangeText={onChangeText}
          value={value}
          onSubmitEditing={onSubmitEditing || Keyboard.dismiss}
          placeholder={placeholder}
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
        />
        {isComplete && <Indicator style={{ marginLeft: 10 }} />}
      </InputView>
      {passwordPrompt.length > 0 && (
        <PasswordHintText color={passwordPromptColor}>{passwordPrompt}</PasswordHintText>
      )}
    </Container>
  );
};
