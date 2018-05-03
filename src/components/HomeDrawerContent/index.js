import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import { default as styled, ThemeProvider } from 'styled-components/native';
import { CBText } from '../Core';
import MyTheme from './theme';
import { withTheme } from 'styled-components';
import { AssetWalletLogo } from '../../icons';
import numeral from 'numeral';

const HorizontalDivide = styled.View`
  width: 100%;
  height: 1;
  margin-left: 16;
  background: ${props => props.theme.divide};
`;

const CurrencyInHead = withTheme(({ children, theme }) => (
  <CBText superBold color={theme.totalAmountInCurrency} style={{ fontSize: 24 }}>
    {children}
  </CBText>
));

const BTCInHead = withTheme(({ children, theme }) => (
  <CBText superBold color={theme.darkText} style={{ fontSize: 16, marginTop: 8 }}>
    {children}
  </CBText>
));

const HeadTitle = withTheme(({ children, theme, style }) => (
  <CBText style={{ marginLeft: 4 }} color={theme.lightText}>
    {children}
  </CBText>
));

const Head = ({ title, amount, exchangeRate, currencySymbol, currencyName }) => {
  const fixedAmount = numeral(amount);
  const inBTC = fixedAmount.divide(exchangeRate);

  return (
    <View style={{ paddingLeft: 16, paddingTop: 20, marginBottom: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CurrencyInHead>{`${currencySymbol}${fixedAmount.format('0,0')}`}</CurrencyInHead>
        <HeadTitle>{`${title}(${currencyName})`}</HeadTitle>
      </View>

      <BTCInHead>{`=${inBTC.format('0,0.00')} BTC`}</BTCInHead>
      <HorizontalDivide style={{ marginTop: 20, marginLeft: 0 }} />
    </View>
  );
};

const WalletName = withTheme(({ children, theme }) => (
  <CBText bold color={theme.darkText}>
    {children}
  </CBText>
));

const WalletValue = withTheme(({ style, children, theme }) => (
  <CBText color={theme.lightText} style={{ fontSize: 12, ...style }}>
    {children}
  </CBText>
));

const WalletContainer = styled.View`
  padding-top: 12;
  padding-bottom: 12;
  padding-left: 16;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.selected ? '#F3F6FB' : 'white')};
`;

const Wallet = ({ data, exchangeRate, currencySymbol, onWalletPress }) => {
  const { type, title, amount, selected } = data;
  const fixedAmount = numeral(amount);
  const inBTC = fixedAmount.divide(exchangeRate);
  return (
    <TouchableHighlight onPress={() => onWalletPress(type)} underlayColor={'#F3F6FB'}>
      <View>
        <WalletContainer selected={selected}>
          <AssetWalletLogo type={type} style={{ width: 40, height: 40 }} />

          <View style={{ marginLeft: 12 }}>
            <WalletName>{title}</WalletName>

            <View style={{ flexDirection: 'row', marginTop: 4 }}>
              <WalletValue>{`${currencySymbol}${fixedAmount.format('0,0')}`}</WalletValue>
              <WalletValue style={{ marginLeft: 18 }}>{`${inBTC.format(
                '0,0.00'
              )} BTC`}</WalletValue>
            </View>
          </View>
        </WalletContainer>

        <HorizontalDivide />
      </View>
    </TouchableHighlight>
  );
};

const WalletList = ({ wallets, onWalletPress, exchangeRate, currencySymbol }) =>
  wallets.map((data, index) => (
    <Wallet
      key={index}
      exchangeRate={exchangeRate}
      currencySymbol={currencySymbol}
      onWalletPress={onWalletPress}
      data={data}
    />
  ));

const Container = styled.View`
  background: ${props => props.theme.contentBg};
  flex: 1;
`;

const HomeDrawerContent = ({
  drawerTitle,
  assetTitle,
  currencySymbol,
  currencyName,
  btcExchangeRate,
  wallets,
  onWalletPress,
  theme,
}) => {
  const totalAmount = wallets
    .map(item => item.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <ThemeProvider theme={MyTheme[theme]}>
      <Container>
        <Head
          title={assetTitle}
          amount={totalAmount}
          exchangeRate={btcExchangeRate}
          currencySymbol={currencySymbol}
          currencyName={currencyName}
        />

        <WalletList
          wallets={wallets}
          onWalletPress={onWalletPress}
          exchangeRate={btcExchangeRate}
          currencySymbol={currencySymbol}
        />
      </Container>
    </ThemeProvider>
  );
};

HomeDrawerContent.propTypes = {
  assetTitle: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  currencyName: PropTypes.string.isRequired,
  btcExchangeRate: PropTypes.number.isRequired,

  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,

  onWalletPress: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

HomeDrawerContent.defaultProps = {
  theme: 'default',
  btcExchangeRate: 1,
};

export default HomeDrawerContent;
