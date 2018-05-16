import React from 'react';
import styled from 'styled-components/native';
import { DeviceInfo } from 'react-native';
import { MaterialIcons, Feather } from '../../icons';
import { CBText, CBButton, CBContainer } from '../Core';

const iPhoneX = DeviceInfo.isIPhoneX_deprecated;

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
  color: ${props => props.theme.acceptTextColor};
`;

const ContinueButton = styled(CBButton)`
  margin-top: 20;
`;

const CheckIconContainer = styled.View`
  margin-right: 8;
  margin-top: -2;
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
            <MaterialIcons name="check-circle" size={20} color="#3A5ADB" />
          ) : (
            <Feather name="circle" size={20} color="#8F95AA" />
          )}
        </CheckIconContainer>
        <AcceptText>{acceptHint}</AcceptText>
      </AcceptContainer>
      <ContinueButton text={continueTitle} onPress={onContinuePress} disabled={!accept} />
    </BottomContainer>
  );
};
