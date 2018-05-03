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
`;

const PasswordInput = styled.TextInput`
  padding-top: 15;
  padding-bottom: 15;
  flex: 1;
  font-size: 15;
  border-bottom-width: 1;
  border-bottom-color: ${props => props.theme.line};
`;

const PasswordHintText = styled.Text`
  margin-top: 15;
  font-size: 12;
  color: ${props => props.color};
`;

export const renderPasswordInputContent = ({
  onChangeText,
  defaultVale,
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
          defaultValue={defaultVale}
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
