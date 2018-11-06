import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { CBModal, CBText } from '../Core';

export const { width, height } = Dimensions.get('window');
export const BORDER_RADIUS = 12;
export const MAX_WIDTH = 0.9 * width;
export const MAX_HEIGHT = 0.8 * height;

export const BoxModal = styled(CBModal)`
  width: ${MAX_WIDTH};
  max-height: ${MAX_HEIGHT};
  padding-bottom: 0;
  background-color: white;
  align-items: center;
  flex-direction: column;
  border-radius: ${props => props.borderRadius || BORDER_RADIUS};
  padding-top: 16;
`;

export const TitleText = styled(CBText)`
  padding-horizontal: 16;
  line-height: 28;
  color: ${props => props.theme.titleColor};
`;

export const MessageContent = styled.ScrollView`
  width: 100%;
  padding-horizontal: 16;
  margin-top: 12;
`;

export const MessageText = styled(CBText)`
  line-height: 22;
  color: ${props => props.theme.messageColor};
`;

export const ButtonsContainer = styled.View`
  margin-top: 20;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  height: 56;
  border-top-color: ${props => props.theme.buttonsContainerBorderColor};
  border-top-width: 1;
  width: 100%;
  background-color: ${props => props.theme.buttonsContainerColor};
  border-bottom-left-radius: ${props => props.borderRadius || BORDER_RADIUS};
  border-bottom-right-radius: ${props => props.borderRadius || BORDER_RADIUS};
`;

const Touchable = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

const LineContainer = styled.View`
  justify-content: center;
`;

const Line = styled.View`
  background-color: ${props => props.theme.lineColor};
  height: ${props => props.theme.lineHeight};
  width: ${props => props.theme.lineWidth};
  border-radius: ${props => props.theme.lineBorderRadius};
`;

export const renderBottomButtons = buttons => {
  if (buttons && buttons.length > 0) {
    return buttons.map((item, index) => {
      const { titleBold, titleColor, title, onPress, canPress } = item;
      const dividerLine = (
        <LineContainer key={(index + buttons.length).toString()}>
          <Line />
        </LineContainer>
      );
      const button = (
        <Touchable onPress={onPress} disabled={!canPress} key={index.toString()}>
          <CBText color={titleColor} bold={titleBold}>
            {title}
          </CBText>
        </Touchable>
      );
      return index === 0 ? button : [dividerLine, button];
    });
  }
  return null;
};
