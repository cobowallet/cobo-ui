import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View } from 'react-native';
import HomeDrawerContent from './index';

const props = {
  assetTitle: '总资产',
  currencySymbol: '$',
  currencyName: 'USD',
  btcExchangeRate: 1,
  onTotalVisiblePress: action('click'),

  wallets: [
    {
      type: 'CLOUD',
      title: '云端钱包',
      amount: 48213,
      isOpen: true,
      selected: true,
      onButtonPress: action('click'),
    },
    {
      type: 'HD',
      title: '助记词钱包',
      amount: 4813,
      onButtonPress: action('click'),
    },
    {
      type: 'WATCH_ONLY',
      title: '观察钱包',
      amount: 4813,
      onButtonPress: action('click'),
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
