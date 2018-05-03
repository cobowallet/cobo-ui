import React from 'react';
import { storiesOf } from '@storybook/react-native';
import WalletSidebar from './index';
import { View } from 'react-native';

const Props = {
  title: '我的 ETH 钱包',
  walletCreatorName: '创建钱包',

  overview: {
    icon: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    name: '所有钱包总览',
  },

  items: [
    {
      id: 0,
      icon: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
      name: 'HD01',
      address: '3csadasd...adaw2ikp',
      selected: true,
    },
    {
      id: 1,
      icon: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
      name: 'HD02',
      address: '0x3dasd...adaw2ikp',
    },
    {
      id: 2,
      icon: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
      name: 'HD03',
      address: '0x1r3p06…adaw2ikp',
    },
  ],

  onOverviewPress: () => console.log('点击钱包总览'),
  onWalletCreatorPress: () => console.log('点击创建钱包'),
  onItemPress: id => console.log('点击钱包: ' + id),
};

storiesOf('Wallet Sidebar', module).add('default', () => (
  <View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: 'gray' }}
  >
    <View style={{ height: '100%', width: '73%', backgroundColor: 'white' }}>
      <WalletSidebar {...Props} />
    </View>
  </View>
));
