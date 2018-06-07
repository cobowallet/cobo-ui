import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { BigNumber } from 'bignumber.js';
import { Eye } from '../../icons';
import { CBText } from '../Core';

const Container = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-vertical: 20;
  margin-left: 16;
  margin-bottom: 28;
  border-bottom-width: 1;
  border-bottom-color: rgba(137, 148, 198, 0.1);
`;

const Content = styled.View`
  flex: 1;
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
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro_bold'};
`;

const CurrencyText = styled(CBText)`
  padding-bottom: 4;
`;

const BTCAmount = styled.Text`
  font-size: 16;
  color: rgba(143, 149, 170, 0.5);
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro_bold'};
`;

const Touchable = styled.TouchableOpacity`
  padding-left: 16;
  padding-right: 16;
  padding-vertical: 16;
`;

export default function AssetTotal(props) {
  const {
    title,
    amount,
    exchangeRate,
    currencySymbol,
    currencyName,
    totalVisible,
    onPress,
  } = props;
  return (
    <Container>
      <Content>
        <CurrencyContanier>
          <CurrencyAmount>
            {totalVisible ? `${currencySymbol}${new BigNumber(amount).toFormat(2)}` : '******'}
          </CurrencyAmount>
          <CurrencyText small bold color="grayLight">
            {title}({currencyName})
          </CurrencyText>
        </CurrencyContanier>
        <BTCAmount>
          {totalVisible ? `= ${new BigNumber(amount).div(exchangeRate).toFormat(4)}` : '******'} BTC
        </BTCAmount>
      </Content>
      <Touchable onPress={onPress}>
        <Eye />
      </Touchable>
    </Container>
  );
}
AssetTotal.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  currencyName: PropTypes.string.isRequired,
  totalVisible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

AssetTotal.defaultProps = {
  totalVisible: true,
};
