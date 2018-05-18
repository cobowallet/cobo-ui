import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { BigNumber } from 'bignumber.js';
import { Eye } from '../../icons';

const Container = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 20;
  padding-right: 20;
  margin-left: 16;
  margin-bottom: 28;
  border-bottom-width: 1;
  border-bottom-color: rgba(137, 148, 198, 0.1);
`;

const CurrencyContanier = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 5;
`;

const CurrencyAmount = styled.Text`
  font-size: 24;
  color: #000;
  margin-right: 6;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

const CurrencyText = styled.Text`
  font-size: 13;
  color: #8f95aa;
  padding-bottom: 4;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

const BTCAmount = styled.Text`
  font-size: 16;
  color: rgba(143, 149, 170, 0.5);
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

export default function AssetTotal(props) {
  const {
    title,
    amount,
    exchangeRate,
    currencySymbol,
    currencyName,
    amountVisible,
    onPress,
  } = props;
  return (
    <Container>
      <View>
        <CurrencyContanier>
          <CurrencyAmount>
            {amountVisible ? `${currencySymbol}${new BigNumber(amount).toFormat(2)}` : '******'}
          </CurrencyAmount>
          <CurrencyText>
            {title}({currencyName})
          </CurrencyText>
        </CurrencyContanier>
        <BTCAmount>
          {amountVisible ? `= ${new BigNumber(amount / exchangeRate).toFormat(4)}` : '******'} BTC
        </BTCAmount>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Eye />
      </TouchableOpacity>
    </Container>
  );
}
AssetTotal.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  currencyName: PropTypes.string.isRequired,
  amountVisible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

AssetTotal.defaultProps = {
  amountVisible: true,
};
