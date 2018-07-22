import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
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
  margin-top: 5;
  margin-bottom: 4;
`;

const AmountBox = styled.View`
  display: flex;
  flex-flow: row;
`;

const CurrencyAmount = styled.Text`
  font-size: 12;
  color: #adb3c9;
  margin-right: 12;
  font-weight: 600;
`;

const BTCAmount = styled.Text`
  font-size: 12;
  color: #adb3c9;
  font-weight: 600;
`;

const Button = styled(TouchableOpacity)`
  padding-right: 5;
  padding-left: 5;
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
  font-weight: 600;
`;

export default function WalletCard(props) {
  const { type, title, amount, isOpen, selected, onLayout } = props.data;
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
            <Title bold color={selected ? 'dark' : 'grayLight'}>
              {title}
            </Title>
            {isOpen && (
              <AmountBox>
                {props.totalVisible ? (
                  <CurrencyAmount>
                    {props.currencySymbol}
                    {new BigNumber(amount).toFormat(2)}
                  </CurrencyAmount>
                ) : (
                  <CurrencyAmount>******</CurrencyAmount>
                )}
                <BTCAmount>
                  {props.totalVisible
                    ? new BigNumber(amount).div(props.exchangeRate).toFormat(4)
                    : '******'}{' '}
                  BTC
                </BTCAmount>
              </AmountBox>
            )}
          </CardInfo>
        </CardContent>
        {!isOpen && (
          <Button onPress={() => props.onPress(type)} onLayout={onLayout}>
            <ButtonText>{props.createNowTitle}</ButtonText>
          </Button>
        )}
      </Card>
    </Container>
  );
}

WalletCard.propTypes = {
  totalVisible: PropTypes.bool.isRequired,
  exchangeRate: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    selected: PropTypes.bool,
    onLayout: PropTypes.func,
  }).isRequired,
  createNowTitle: PropTypes.string,
};

WalletCard.defaultProps = {
  createNowTitle: '立即开通',
};
