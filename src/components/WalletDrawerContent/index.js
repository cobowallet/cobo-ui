import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CBText } from '../Core';
import IconWalletCreator from './img/add_wallet.png';

const HorizontalDivide = styled.View`
  width: 100%;
  height: 1;
  background: #8994c6;
  margin-left: 16;
`;

const BoldText = ({ style, children }) => (
  <CBText bold color={'dark'} style={style}>
    {children}
  </CBText>
);

const Title = ({ children }) => (
  <BoldText style={{ paddingLeft: 16, paddingTop: 16, paddingBottom: 8 }}>{children}</BoldText>
);

const Icon = ({ style, source }) => (
  <Image style={{ width: 40, height: 40, ...style }} source={source} />
);

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16;
  padding-top: 12;
  padding-bottom: 12;
  background: ${props => (props.background ? props.background : 'white')};
`;

const OverView = ({ data, onOverviewPress }) => {
  const { name, icon } = data;

  return (
    <TouchableOpacity onPress={onOverviewPress} activeOpacity={1}>
      <Row>
        <Icon source={icon} />
        <BoldText style={{ marginLeft: 12 }}>{name}</BoldText>
      </Row>
    </TouchableOpacity>
  );
};

const RowItem = ({ data, onItemPress }) => {
  const { icon, name, address, selected } = data;
  const bgColor = selected ? '#F3F6FB' : 'white';

  return (
    <TouchableHighlight onPress={onItemPress} underlayColor={'#F3F6FB'}>
      <Row background={bgColor}>
        <Icon source={icon} />

        <View style={{ marginLeft: 12 }}>
          <BoldText>{name}</BoldText>
          <CBText color={'grayLight'} style={{ fontSize: 12, marginTop: 2 }}>
            {address}
          </CBText>
        </View>
      </Row>
    </TouchableHighlight>
  );
};

const List = styled.FlatList`
  padding-top: 24;
  padding-bottom: 24;
`;

const WalletCreator = ({ name, onWalletCreatorPress }) => (
  <TouchableOpacity onPress={onWalletCreatorPress} activeOpacity={1}>
    <Row>
      <Icon source={IconWalletCreator} style={{ resizeMode: 'center' }} />
      <BoldText style={{ marginLeft: 12 }}>{name}</BoldText>
    </Row>
  </TouchableOpacity>
);

const WalletDrawerContent = ({
  title,
  overview,
  walletCreatorName,
  items,
  onOverviewPress,
  onItemPress,
  onWalletCreatorPress,
}) => {
  const renderItem = ({ item }) => {
    const { id } = item;

    return <RowItem data={item} onItemPress={() => onItemPress(id)} />;
  };

  return (
    <View>
      <Title>{title}</Title>
      <HorizontalDivide />

      <OverView data={overview} onOverviewPress={onOverviewPress} />
      <HorizontalDivide />

      <List
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={HorizontalDivide}
        ListFooterComponent={HorizontalDivide}
        showsVerticalScrollIndicator={false}
      />

      <WalletCreator name={walletCreatorName} onWalletCreatorPress={onWalletCreatorPress} />
      <HorizontalDivide />
    </View>
  );
};

WalletDrawerContent.propTypes = {
  title: PropTypes.string.isRequired,
  walletCreatorName: PropTypes.string.isRequired,

  overview: PropTypes.shape({
    icon: Image.propTypes.source.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: Image.propTypes.source.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,

  onOverviewPress: PropTypes.func.isRequired,
  onWalletCreatorPress: PropTypes.func.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default WalletDrawerContent;
