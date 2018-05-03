import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import HomeDrawerContent from './index';

const props = {
  assetTitle: '总资产',
  currencySymbol: '$',
  currencyName: 'USD',
  btcExchangeRate: 10,

  wallets: [
    {
      type: 'CLOUD',
      title: '云端钱包',
      amount: 48213,
      selected: true,
    },
    {
      type: 'HD',
      title: '助记词钱包',
      amount: 4813,
    },
  ],

  onWalletPress: type => console.log('type=' + type),
};

storiesOf('Home side bar', module).add('default', () => (
  <View style={{ flex: 1, backgroundColor: 'gray' }}>
    <View style={{ flex: 1, width: '73%', backgroundColor: 'white' }}>
      <HomeDrawerContent {...props} />
    </View>
  </View>
));
