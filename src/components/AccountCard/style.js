import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { CBText } from '../Core';

export const TopContainer = styled.View`
  padding-vertical: 16;
  padding-horizontal: 16;
  border-bottom-width: 1;
  border-bottom-color: rgba(255, 255, 255, 0.2);
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 16;
  padding-right: 16;
`;

export const CoinText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 32;
  margin-bottom: 4;
  font-family: 'DIN Next LT Pro';
`;

export const CurrencyText = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 24;
  font-family: 'DIN Next LT Pro';
`;

export const RewardText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24;
  font-family: 'DIN Next LT Pro';
  margin-left: 4;
`;

export const SloganText = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18;
  margin-right: 80;
  margin-top: 8;
  margin-bottom: 8;
  font-weight: bold;
  line-height: 28;
`;

export function renderButtons(actions) {
  return actions.map(item => {
    return (
      <TouchableOpacity
        key={item.title}
        onPress={item.onPress}
        disabled={!item.canPress}
        style={{ height: 48, paddingLeft: 16, justifyContent: 'center' }}
      >
        <CBText color={item.canPress ? 'white' : 'grayLight'}>{item.title}</CBText>
      </TouchableOpacity>
    );
  });
}

export function Header({ title, reward }) {
  return (
    <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
      <CBText color={'white'} bold>
        {title}
      </CBText>
      {reward &&
        reward.length > 0 && (
          <RewardText style={{ transform: [{ translateY: 3 }] }}>{reward}</RewardText>
        )}
    </View>
  );
}

export function Balance({ coinCode, coinBalance, currencySymbol, currencyBalance }) {
  return (
    <View style={{ alignItems: 'flex-end' }}>
      <CoinText>{`${coinBalance} ${coinCode}`}</CoinText>
      <CurrencyText>{`${currencySymbol} ${currencyBalance}`}</CurrencyText>
    </View>
  );
}
