import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const ButtonContainer = styled.View`
  flex-direction: row;
`;

const Button = styled(TouchableOpacity)`
  height: 23;
  justify-content: center;
  align-items: center;
  border-radius: 3;
  border-width: 1;
  border-color: #ffa344;
  padding-horizontal: 6;
`;

const Text = styled.Text`
  font-size: 10;
  color: #ffa344;
`;

export default function BackupHd({ text, onPress }) {
  return (
    <ButtonContainer>
      <Button onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    </ButtonContainer>
  );
}

BackupHd.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
