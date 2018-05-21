import React from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { BigNumber } from 'bignumber.js';
import { CBText } from '../Core';
import { AssetWalletLogo } from '../../icons';

const Container = styled(TouchableOpacity)`
  padding-left: 16;
  background-color: ${props => (props.selected ? '#f6f9ff' : '#fff')};
  margin-top: ${props => (props.type === 'WATCH_ONLY' ? '28' : '0')};
`;

const Card = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 12;
  padding-right: 16;
  border-bottom-width: ${props => (props.selected ? '0' : '1')};
  border-bottom-color: rgba(137, 148, 198, 0.1);
`;

const CardContent = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const CardInfo = styled.View`
  margin-left: 12;
`;

const Title = styled(CBText)`
  color: #000;
  margin-top: 5;
  margin-bottom: 6;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

const AmountBox = styled.View`
  display: flex;
  flex-flow: row;
`;

const CurrencyAmount = styled.Text`
  font-size: 12;
  color: #adb3c9;
  margin-right: 12;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

const BTCAmount = styled.Text`
  font-size: 12;
  color: #adb3c9;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

const Button = styled(TouchableOpacity)`
  width: 60;
  height: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1;
  border-color: #3a5adb;
  border-radius: 3;
`;

const ButtonText = styled.Text`
  font-size: 10;
  color: #3a5adb;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

export default function WalletCard(props) {
  const { type, title, amount, isOpen, selected } = props.data;
  return (
    <Container
      type={type}
      selected={selected}
      disabled={!isOpen || selected}
      onPress={() => props.onPress(type)}
    >
      <Card selected={selected}>
        <CardContent>
          <AssetWalletLogo type={type} style={{ width: 40 }} />
          <CardInfo>
            <Title>{title}</Title>
            {selected && (
              <AmountBox>
                <CurrencyAmount>
                  {props.currencySymbol}
                  {new BigNumber(amount).toFormat(2)}
                </CurrencyAmount>
                <BTCAmount>{new BigNumber(amount / props.exchangeRate).toFormat(4)} BTC</BTCAmount>
              </AmountBox>
            )}
          </CardInfo>
        </CardContent>
        {!isOpen && (
          <Button onPress={() => props.onPress(type)}>
            <ButtonText>立即开通</ButtonText>
          </Button>
        )}
      </Card>
    </Container>
  );
}

WalletCard.propTypes = {
  exchangeRate: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    isOpen: PropTypes.bool,
    selected: PropTypes.bool,
  }).isRequired,
};
