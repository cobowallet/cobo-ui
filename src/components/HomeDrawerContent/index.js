import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';
import { default as styled, ThemeProvider } from 'styled-components/native';
import { CBText } from '../Core';
import MyTheme from './theme';
import { withTheme } from 'styled-components';
import { AssetWalletLogo } from '../../icons';

const HorizontalDivide = styled.View`
  width: 100%;
  height: 1;
  margin-left: 16;
  background: ${props => props.theme.divide};
`;

const Title = withTheme(({ children, theme }) => (
  <CBText color={theme.title} bold style={{ paddingLeft: 16, paddingTop: 16, paddingBottom: 16 }}>
    {children}
  </CBText>
));

const CurrencyValueInHeader = withTheme(({ children, theme }) => (
  <CBText superBold color={theme.totalAmountInCurrency} style={{ fontSize: 24 }}>
    {children}
  </CBText>
));

const BTCValueInHeader = withTheme(({ children, theme }) => (
  <CBText superBold color={theme.totalAmountInBTC} style={{ fontSize: 16, marginTop: 8 }}>
    {children}
  </CBText>
));

const HeaderName = withTheme(({ children, theme }) => (
  <CBText style={{ marginLeft: 4 }} color={theme.headName}>
    {children}
  </CBText>
));

const Header = ({ data }) => {
  const { name, valueInCurrency, valueInBTC } = data;

  return (
    <View style={{ paddingLeft: 16, paddingTop: 20, marginBottom: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <CurrencyValueInHeader>{valueInCurrency}</CurrencyValueInHeader>
        <HeaderName>{name}</HeaderName>
      </View>

      <BTCValueInHeader>={valueInBTC}</BTCValueInHeader>
      <HorizontalDivide style={{ marginTop: 20, marginLeft: 0 }} />
    </View>
  );
};

const WalletName = withTheme(({ children, theme }) => (
  <CBText bold color={theme.walletName}>
    {children}
  </CBText>
));

const WalletValue = withTheme(({ style, children, theme }) => (
  <CBText style={{ fontSize: 12, color: theme.walletValue, ...style }}>{children}</CBText>
));

const WalletContainer = styled.View`
  padding-top: 12;
  padding-bottom: 12;
  padding-left: 16;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.selected ? '#F3F6FB' : 'white')};
`;

const Wallet = ({ style, data, onWalletPress }) => {
  const { type, name, valueInCurrency, valueInBTC, selected } = data;

  return (
    <TouchableHighlight onPress={onWalletPress} underlayColor={'#F3F6FB'}>
      <WalletContainer style={style} selected={selected}>
        <AssetWalletLogo type={type} style={{ width: 40, height: 40 }} />
        <View style={{ marginLeft: 12 }}>
          <WalletName>{name}</WalletName>

          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <WalletValue>{valueInCurrency}</WalletValue>
            <WalletValue style={{ marginLeft: 18 }}>{valueInBTC}</WalletValue>
          </View>
        </View>
      </WalletContainer>
    </TouchableHighlight>
  );
};

const List = styled.FlatList`
  flex: 1;
`;

const WalletList = ({ isRefreshing, onRefresh, head, wallets, onWalletPress }) => {
  const renderItem = ({ item, index }) => {
    const { type } = item;

    return <Wallet data={item} onWalletPress={() => onWalletPress(type)} />;
  };

  return (
    <List
      data={wallets}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      ItemSeparatorComponent={HorizontalDivide}
      ListFooterComponent={HorizontalDivide}
      keyExtractor={item => item.name}
      ListHeaderComponent={<Header data={head} />}
      renderItem={renderItem}
    />
  );
};

const SidebarContainer = styled.View`
  background: ${props => props.theme.background};
  flex: 1;
`;

const HomeDrawerContent = ({
  title,
  head,
  wallets,
  isRefreshing,
  onRefresh,
  onWalletPress,
  theme,
  ...remain
}) => (
  <ThemeProvider theme={MyTheme[theme]}>
    <SidebarContainer {...remain}>
      <Title>{title}</Title>
      <HorizontalDivide />

      <WalletList
        head={head}
        wallets={wallets}
        isRefreshing={isRefreshing}
        onRefresh={onRefresh}
        onWalletPress={onWalletPress}
      />
    </SidebarContainer>
  </ThemeProvider>
);

HomeDrawerContent.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.shape({
    name: PropTypes.string.isRequired,
    valueInCurrency: PropTypes.string.isRequired,
    valueInBTC: PropTypes.string.isRequired,
  }).isRequired,

  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      type: AssetWalletLogo.propTypes.type,
      name: PropTypes.string.isRequired,
      valueInCurrency: PropTypes.string.isRequired,
      valueInBTC: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,

  onRefresh: PropTypes.func.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  onWalletPress: PropTypes.func.isRequired,
  theme: PropTypes.string,
  remain: PropTypes.object,
};

HomeDrawerContent.defaultProps = {
  isRefreshing: false,
  theme: 'default',
};

export default HomeDrawerContent;
