import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { DeviceInfo, TouchableOpacity, View, Platform } from 'react-native';
import styled from 'styled-components/native';

const iphoneX = DeviceInfo.isIPhoneX_deprecated;

const GradientContainer = styled.View`
  overflow: hidden;
  width: 100%;
`;

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.View`
  padding-top: ${iphoneX ? 94 : 74};
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.15);
  height: 54;
  align-items: center;
`;

const Line = styled.View`
  background-color: #ebf0f5;
  height: 30;
  width: 4;
  border-radius: 2;
`;

export const Balance = styled.View`
  padding-horizontal: 16;
  align-items: center;
`;

export const CoinText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 32;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

export const CurrencyText = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 24;
  margin-top: 4;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

export const Description = styled.View`
  padding-horizontal: 16;
  align-items: center;
  margin-top: 26;
`;

export const TotalRevenue = styled.Text`
  font-size: 12;
  color: rgba(255, 255, 255, 0.6);
`;

export const NextPaymentTime = styled.Text`
  margin-top: 6;
  font-size: 12;
  color: rgba(255, 255, 255, 0.6);
`;

export const ButtonText = styled.Text`
  margin-left: 12;
  font-size: 15;
  color: ${props => (props.disabled ? '#8F95AA' : '#ffffff')};
`;

export function renderGradientContainer({ renderChild, colors }) {
  return (
    <View>
      <GradientContainer>
        <Gradient colors={colors} start={{ x: 0, y: 0.2 }} end={{ x: 1, y: 0.8 }} />
        {renderChild()}
      </GradientContainer>
    </View>
  );
}

export function renderButtons(buttons) {
  return buttons.map((item, index) => {
    const { renderImage, title, onPress, canPress } = item;
    const dividerLine = <Line key={(index + buttons.length).toString()} />;
    const button = (
      <TouchableOpacity
        key={index.toString()}
        onPress={onPress}
        disabled={!canPress}
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        {renderImage && renderImage()}
        <ButtonText disabled={!canPress}>{title}</ButtonText>
      </TouchableOpacity>
    );
    return index === 0 ? button : [dividerLine, button];
  });
}
