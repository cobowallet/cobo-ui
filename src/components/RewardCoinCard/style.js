import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { LINE_COLORS, FontColors } from '../../theme/CBColor';

export const CoinContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20;
  padding-vertical: 20;
  border-bottom-color: ${LINE_COLORS.LINE};
  border-bottom-width: 1;
`;

export const CoinInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CoinLogo = styled.Image`
  margin-right: 12;
`;

export const Button = styled.View`
  width: 87;
  height: 32;
  align-items: center;
  justify-content: center;
`;

export const Balance = styled.Text`
  font-size: 28;
  color: ${FontColors.primary};
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro_bold'};
  text-align: right;
`;

export const RewardMode = styled.Text`
  font-size: 11;
  color: ${FontColors.dark};
  font-weight: 800;
  text-align: right;
  margin-top: -5;
`;