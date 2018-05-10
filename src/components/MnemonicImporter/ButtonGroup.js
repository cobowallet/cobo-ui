import React from 'react';
import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  width: 100%;
  height: 56;
  flex-direction: row;
  align-items: center;
  background-color: #f7f8ff;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  color: #8f95aa;
  font-size: 15;
  margin-left: 12;
`;

export const DivideLine = styled.View`
  height: 30;
  width: ${props => props.divideLineWidth || 4};
  background-color: ${props => props.divideLineColor || '#FFFFFF'};
  border-radius: 2;
  opacity: 0.8;
`;

const ButtonGroup = ({
  GroupStyle,
  onLeftPress,
  onRightPress,
  leftButton,
  rightButton,
  leftButtonText,
  rightButtonText,
  leftButtonStyle,
  rightButtonStyle,
  rightButtonDisable,
  leftButtonDisable,
  divideLineWidth,
  divideLineColor,
}) => {
  return (
    <ButtonContainer style={GroupStyle}>
      <Button onPress={onLeftPress} disabled={leftButtonDisable}>
        {leftButton ? (
          leftButton
        ) : (
          <ButtonText style={leftButtonStyle}>{leftButtonText}</ButtonText>
        )}
      </Button>
      <DivideLine divideLineWidth={divideLineWidth} divideLineColor={divideLineColor} />
      <Button onPress={onRightPress} disabled={rightButtonDisable}>
        {rightButton ? (
          rightButton
        ) : (
          <ButtonText style={rightButtonStyle}>{rightButtonText}</ButtonText>
        )}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonGroup;
