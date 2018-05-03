import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import HomeDrawerContent from './index';

const props = {
  title: '我的钱包',
  head: { name: '总资产(USD)', valueInCurrency: '$96,426', valueInBTC: '18.44676 BTC' },
  wallets: [
    {
      type: 'CLOUD',
      name: '云端钱包',
      valueInCurrency: '$48,213',
      valueInBTC: '9.2123 BTC',
      selected: true,
    },
    {
      type: 'HD',
      name: '助记词钱包',
      valueInCurrency: '$48,213',
      valueInBTC: '9.2123 BTC',
    },
  ],
  onRefresh: () => console.log('刷新啦'),
  isRefreshing: false,
  onWalletPress: type => console.log('type=' + type),
};

storiesOf('Home side bar', module).add('default', () => (
  <View style={{ flex: 1, backgroundColor: 'gray' }}>
    <View style={{ flex: 1, width: '73%', backgroundColor: 'white' }}>
      <HomeDrawerContent {...props} />
    </View>
  </View>
));
