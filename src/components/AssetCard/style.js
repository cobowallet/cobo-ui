import React from 'react';
import styled from 'styled-components/native';
import { CBShadow, CBText } from '../Core';
import { WalletLogo } from '../../icons';

export const Container = styled(CBShadow)`
  background-color: white;
  border-radius: 3;
  margin-vertical: 8;
  shadow-opacity: 0.15;
  elevation: 1;
  shadow-color: ${props => props.theme.backgroundShadowColor};
`;

export const Row = styled.TouchableOpacity`
  width: 100%;
  height: 72;
  padding-left: 16;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

export const IconContent = styled.View`
  justify-content: center;
  margin-right: 12;
`;

export const CoinIcon = styled(WalletLogo)`
  height: 46;
  width: 46;
`;

const ParentIconContainer = styled.View`
  height: 20;
  width: 20;
  border-radius: 10;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -2;
  right: -2;
  z-index: 9000;
`;
const ParentIcon = styled(WalletLogo)`
  height: 16;
  width: 16;
`;

export const CoinContainer = styled.View`
  justify-content: center;
  max-width: 50%;
`;

export const AmountContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const ToggleArea = styled.TouchableOpacity`
  width: 50;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CoinLineContainer = styled.View`
  align-items: stretch;
  flex-direction: row;
`;

export const CoinCodeText = styled(CBText)`
  font-weight: 700;
  color: ${props => props.theme.CoinCodeColor};
`;

export const AmountText = styled(CBText)`
  font-weight: 800;
  font-size: 17;
  margin-bottom: 5;
  color: ${props => props.theme.amountTextColor};
`;

export const FiatCurrencyAmountText = styled(CBText)`
  color: ${props => props.theme.fiatCurrencyAmountColor};
`;

export const CoinDescContainer = styled.View`
  flex-direction: row;
  margin-top: 5;
`;

export const DescText = styled(CBText)`
  color: ${props => props.theme.descTextColor};
`;

export const ParentLogo = ({ coin, uri }) => {
  return (
    <ParentIconContainer>
      <ParentIcon coin={coin} uri={uri} />
    </ParentIconContainer>
  );
};
