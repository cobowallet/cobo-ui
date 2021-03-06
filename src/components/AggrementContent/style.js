import React from 'react';
import styled from 'styled-components/native';
import { CircleCheck } from '../../icons';
import { CBText, CBButton, CBContainer } from '../Core';
import isIPhoneX from '../../utils/devices';

const iPhoneX = isIPhoneX;

export const Container = styled(CBContainer)`
  flex: 1;
  background-color: white;
`;

export const Web = styled.WebView`
  flex: 1;
  background-color: transparent;
`;

const BottomContainer = styled.View`
  width: 100%;
  background-color: white;
  border-top-color: ${props => props.theme.bottomLineColor};
  border-top-width: 0.5;
  shadow-radius: 4;
  shadow-opacity: 0.1;
  shadow-color: ${props => props.theme.bottomShawColor};
  padding-top: 20;
  padding-bottom: ${iPhoneX ? 30 : 20};
`;

const AcceptContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: transparent;
  justify-content: flex-start;
  padding-horizontal: 16;
  width: 100%;
`;

const AcceptText = styled(CBText)`
  flex: 1;
  color: ${props => props.theme.acceptTextColor};
`;

const ContinueButton = styled(CBButton)`
  margin-top: 20;
`;

const CheckIconContainer = styled.View`
  margin-right: 8;
`;

export const renderBottom = ({
  accept,
  acceptHint,
  onAcceptPress,
  continueTitle,
  onContinuePress,
}) => {
  return (
    <BottomContainer style={{ shadowOffset: { width: 0, height: -1 } }}>
      <AcceptContainer onPress={onAcceptPress}>
        <CheckIconContainer>
          {accept ? (
            <CircleCheck checked style={{ width: 20, height: 20 }} />
          ) : (
            <CircleCheck style={{ width: 20, height: 20 }} />
          )}
        </CheckIconContainer>
        <AcceptText>{acceptHint}</AcceptText>
      </AcceptContainer>
      <ContinueButton text={continueTitle} onPress={onContinuePress} disabled={!accept} />
    </BottomContainer>
  );
};
