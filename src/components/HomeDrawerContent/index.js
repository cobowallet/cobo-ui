import React from 'react';
import PropTypes from 'prop-types';
import { default as styled, ThemeProvider } from 'styled-components/native';
import MyTheme from './theme';
import AssetTotal from './AssetTotal';
import WalletCard from './WalletCard';

const Container = styled.View`
  background: ${props => props.theme.contentBg};
  flex: 1;
`;

const WalletList = ({ wallets, totalVisible, onWalletPress, exchangeRate, currencySymbol }) =>
  wallets.map((data, index) => (
    <WalletCard
      key={index}
      totalVisible={totalVisible}
      exchangeRate={exchangeRate}
      currencySymbol={currencySymbol}
      onPress={onWalletPress}
      data={data}
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
}) => {
  const totalAmount = wallets
    .map(item => item.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

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
  totalVisible: PropTypes.bool.isRequired,
  onTotalVisiblePress: PropTypes.func.isRequired,

  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
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
};

export default HomeDrawerContent;
