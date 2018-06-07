import React from 'react';
import PropTypes from 'prop-types';
import { default as styled, ThemeProvider } from 'styled-components/native';
import { BigNumber } from 'bignumber.js';
import MyTheme from './theme';
import AssetTotal from './AssetTotal';
import WalletCard from './WalletCard';

const Container = styled.View`
  background: ${props => props.theme.contentBg};
  flex: 1;
`;

const WalletList = ({
  wallets,
  totalVisible,
  onWalletPress,
  exchangeRate,
  currencySymbol,
  createNowTitle,
}) =>
  wallets.map((data, index) => (
    <WalletCard
      key={index}
      totalVisible={totalVisible}
      exchangeRate={exchangeRate}
      currencySymbol={currencySymbol}
      onPress={onWalletPress}
      data={data}
      createNowTitle={createNowTitle}
    />
  ));

const HomeDrawerContent = ({
  assetTitle,
  currencySymbol,
  currencyName,
  btcExchangeRate,
  totalVisible,
  onTotalVisiblePress,
  wallets,
  onWalletPress,
  theme,
  createNowTitle,
}) => {
  const totalAmount = wallets
    .map(item => item.amount)
    .reduce(
      (accumulator, currentValue) =>
        new BigNumber(accumulator).plus(new BigNumber(currentValue)).toString(),
      new BigNumber(0)
    );

  return (
    <ThemeProvider theme={MyTheme[theme]}>
      <Container>
        <AssetTotal
          title={assetTitle}
          amount={totalAmount}
          exchangeRate={btcExchangeRate}
          currencySymbol={currencySymbol}
          currencyName={currencyName}
          totalVisible={totalVisible}
          onPress={onTotalVisiblePress}
        />

        <WalletList
          wallets={wallets}
          totalVisible={totalVisible}
          onWalletPress={onWalletPress}
          exchangeRate={btcExchangeRate}
          currencySymbol={currencySymbol}
          createNowTitle={createNowTitle}
        />
      </Container>
    </ThemeProvider>
  );
};

HomeDrawerContent.propTypes = {
  assetTitle: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  currencyName: PropTypes.string.isRequired,
  btcExchangeRate: PropTypes.string.isRequired,
  totalVisible: PropTypes.bool.isRequired,
  onTotalVisiblePress: PropTypes.func.isRequired,
  createNowTitle: PropTypes.string,
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      isOpen: PropTypes.bool,
      selected: PropTypes.bool,
    })
  ).isRequired,

  onWalletPress: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

HomeDrawerContent.defaultProps = {
  theme: 'default',
  btcExchangeRate: 1,
  createNowTitle: '立即开通',
};

export default HomeDrawerContent;
