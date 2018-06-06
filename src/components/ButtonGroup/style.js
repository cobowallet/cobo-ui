import React from 'react';
import styled from 'styled-components/native';
import { CBText } from '../Core';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.containerColor};
  height: 54;
  align-items: center;
`;

const Line = styled.View`
  background-color: ${props => props.theme.lineColor};
  height: 30;
  width: 4;
  border-radius: 2;
`;

const ButtonText = styled(CBText)`
  margin-left: 12;
  margin-bottom: -2;
  color: ${props =>
    props.canPress ? props.theme.buttonTextColor : props.theme.buttonDisableTextColor};
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -2;
`;

export function renderButtons(buttons) {
  return buttons.map((item, index) => {
    const { renderImage, title, onPress, canPress } = item;
    const dividerLine = <Line key={(index + buttons.length).toString()} />;
    const button = (
      <Touchable key={index.toString()} onPress={onPress} disabled={!canPress}>
        {renderImage && renderImage()}
        <ButtonText canPress={canPress}>{title}</ButtonText>
      </Touchable>
    );
    return index === 0 ? button : [dividerLine, button];
  });
}
