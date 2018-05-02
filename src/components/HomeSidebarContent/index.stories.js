import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import HomeSidebar from './index';
import { AssetWalletLogo } from '../../icons';

const props = {
  title: '我的钱包',
  head: { name: '总资产(USD)', valueInCurrancy: '$96,426', valueInBTC: '=18.44676 BTC' },
  wallets: [
    {
      id: 1,
      icon: AssetWalletLogo({ type: 'cloud' }),
      name: '云端钱包',
      valueInCurrancy: '$48,213',
      valueInBTC: '9.2123 BTC',
      selected: true,
    },
    {
      id: 2,
      icon: AssetWalletLogo({ type: 'hd' }),
      name: '助记词钱包',
      valueInCurrancy: '$48,213',
      valueInBTC: '9.2123 BTC',
    },
  ],
  onRefresh: () => console.log('刷新啦'),
  isRefreshing: false,
  onWalletPress: id => console.log('id=' + id),
};

storiesOf('Home side bar', module).add('default', () => (
  <View style={{ flex: 1, backgroundColor: 'gray' }}>
    <View style={{ flex: 1, width: '73%', backgroundColor: 'white' }}>
      <HomeSidebar {...props} />
    </View>
  </View>
));
