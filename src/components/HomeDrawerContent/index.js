import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { default as styled, ThemeProvider } from 'styled-components/native';
import { BigNumber } from 'bignumber.js';
import MyTheme from './theme';
import AssetTotal from './AssetTotal';
import WalletCard from './WalletCard';
import ServiceCard from './ServiceCard';
import { CBText } from '../Core';

const Container = styled.ScrollView`
  background: ${props => props.theme.contentBg};
  flex: 1;
`;

const TitleContainer = styled.View`
  border-bottom-color: rgba(137, 148, 198, 0.1);
  border-bottom-width: 1;
  margin-left: 16;
  padding-top: 16;
  padding-bottom: 8;
`;

const Title = ({ children, style = {} }) => (
  <TitleContainer style={style}>
    <CBText superBold colorHex={'#000000'}>
      {children}
    </CBText>
  </TitleContainer>
);

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
  walletTitle,
  wallets,
  onWalletPress,
  serviceTitle,
  services,
  eventTitle,
  events,
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
        <Title>{walletTitle}</Title>
        <WalletList
          wallets={wallets}
          totalVisible={totalVisible}
          onWalletPress={onWalletPress}
          exchangeRate={btcExchangeRate}
          currencySymbol={currencySymbol}
          createNowTitle={createNowTitle}
        />
        {services.length > 0 && (
          <View>
            <Title style={{ marginTop: 28 }}>{serviceTitle}</Title>
            {services.map((data, index) => <ServiceCard key={index} {...data} />)}
          </View>
        )}
        {events.length > 0 && (
          <View>
            <Title style={{ marginTop: 28 }}>{eventTitle}</Title>
            {events.map((data, index) => <ServiceCard key={index} {...data} />)}
          </View>
        )}
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
  walletTitle: PropTypes.string.isRequired,
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
  serviceTitle: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      renderIcon: PropTypes.func.isRequired,
      onPress: PropTypes.func.isRequired,
    })
  ).isRequired,
  eventTitle: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      renderIcon: PropTypes.func.isRequired,
      onPress: PropTypes.func.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string,
};

HomeDrawerContent.defaultProps = {
  theme: 'default',
  btcExchangeRate: 1,
  createNowTitle: '立即开通',
  walletTitle: 'Wallet',
  serviceTitle: 'Service',
  services: [],
  eventTitle: 'Event',
  events: [],
};

export default HomeDrawerContent;
