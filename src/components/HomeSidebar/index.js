import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { CBText } from '../Core';

const HorizontalDivide = styled.View`
  width: 100%;
  height: 1;
  margin-left: 16;
  background: #8994c6;
`;

const Title = ({ children }) => (
  <CBText color={'dark'} bold style={{ paddingLeft: 16, paddingTop: 16, paddingBottom: 16 }}>
    {children}
  </CBText>
);

const CurrencyValueInHeader = ({ children }) => (
  <CBText superBold color={'dark'} style={{ fontSize: 24 }}>
    {children}
  </CBText>
);

const BTCValueInHeader = ({ children }) => (
  <CBText superBold color={'grayLight'} style={{ fontSize: 16, marginTop: 8 }}>
    {children}
  </CBText>
);

const HeaderName = ({ children }) => (
  <CBText style={{ marginLeft: 4 }} color={'grayLight'}>
    {children}
  </CBText>
);

const Header = ({ data }) => {
  const { name, valueInCurrancy, valueInBTC } = data;

  return (
    <View style={{ paddingLeft: 16, paddingTop: 20, marginBottom: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <CurrencyValueInHeader>{valueInCurrancy}</CurrencyValueInHeader>
        <HeaderName>{name}</HeaderName>
      </View>

      <BTCValueInHeader>{valueInBTC}</BTCValueInHeader>
      <HorizontalDivide style={{ marginTop: 20, marginLeft: 0 }} />
    </View>
  );
};

const WalletName = ({ children }) => (
  <CBText bold color={'dark'}>
    {children}
  </CBText>
);

const WalletValue = ({ style, children }) => (
  <CBText style={{ fontSize: 12, color: '#ADB3C9', ...style }}>{children}</CBText>
);

const WalletIcon = styled(Image)`
  width: 40;
  height: 40;
`;

const WalletContainer = styled.View`
  padding-top: 12;
  padding-bottom: 12;
  padding-left: 16;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.selected ? '#F3F6FB' : 'white')};
`;

const Wallet = ({ style, data, onWalletPress }) => {
  const { icon, name, valueInCurrancy, valueInBTC, selected } = data;

  return (
    <TouchableHighlight onPress={onWalletPress} underlayColor={'#F3F6FB'}>
      <WalletContainer style={style} selected={selected}>
        <WalletIcon source={icon} />
        <View style={{ marginLeft: 12 }}>
          <WalletName>{name}</WalletName>

          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <WalletValue>{valueInCurrancy}</WalletValue>
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
    const { id } = item;

    return <Wallet data={item} onWalletPress={() => onWalletPress(id)} />;
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
  background: white;
  flex: 1;
`;

const HomeSidebar = ({ title, head, wallets, isRefreshing, onRefresh, onWalletPress }) => (
  <SidebarContainer>
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
);

HomeSidebar.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.shape({
    name: PropTypes.string.isRequired,
    valueInCurrancy: PropTypes.string.isRequired,
    valueInBTC: PropTypes.string.isRequired,
  }).isRequired,

  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: Image.propTypes.source,
      name: PropTypes.string.isRequired,
      valueInCurrancy: PropTypes.string.isRequired,
      valueInBTC: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,

  onRefresh: PropTypes.func.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  onWalletPress: PropTypes.func.isRequired,
};

HomeSidebar.defaultProps = {
  isRefreshing: false,
};

export default HomeSidebar;
