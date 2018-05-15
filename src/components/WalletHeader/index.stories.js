import React from 'react';
import { Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import WalletHeader from './WalletHeader';
import { WalletHeaderGradientPreset } from './index';

const transferButtons = [
  {
    onPress: () => action('onTransferout'),
    canPress: true,
    title: 'Transfer out',
    renderImage: () => (
      <Image style={{ width: 15, height: 15 }} source={require('../AccountCard/img/add.png')} />
    ),
  },
  {
    onPress: () => action('onTransferin'),
    canPress: true,
    title: 'Transfer in',
    renderImage: () => (
      <Image style={{ width: 15, height: 15 }} source={require('../AccountCard/img/add.png')} />
    ),
  },
];
const rewardDescriptions = [
  {
    key: '总增益: ',
    value: '121.0000 ETH',
  },
  {
    key: '下次支付时间: ',
    value: '2017-12-21 14:57:02 +08:00',
  },
  {
    key: '锁定期: ',
    value: '2017-12-21 14:57:02 +08:00\n2019-12-21 14:57:02 +08:00',
  },
  {
    key: '预计下次锁定: ',
    value: '2017-12-21 14:57:02 +08:00',
  },
  {
    key: '锁定开始: ',
    value: '2017-12-21 14:57:02 +08:00',
  },
  {
    key: '锁定结束: ',
    value: '2017-12-21 14:57:02 +08:00',
  },
];

storiesOf('Wallet Header', module)
  .add('Financing purple', () => (
    <WalletHeader
      coinCode={'ETH'}
      coinBalance={'12.4321'}
      currencySymbol={'$'}
      currencyBalance={'4321.21'}
      descriptions={rewardDescriptions}
      colors={WalletHeaderGradientPreset.purple}
      buttons={transferButtons}
    />
  ))
  .add('Spending blue', () => (
    <WalletHeader
      coinCode={'ETH'}
      coinBalance={'12.4321'}
      currencySymbol={'$'}
      currencyBalance={'4321.21'}
      colors={WalletHeaderGradientPreset.blue}
      buttons={[
        {
          onPress: () => action('onReceive'),
          canPress: true,
          title: 'Receive',
          renderImage: () => (
            <Image
              style={{ width: 15, height: 15 }}
              source={require('../AccountCard/img/add.png')}
            />
          ),
        },
        {
          onPress: () => action('onSend'),
          canPress: true,
          title: 'Send',
          renderImage: () => (
            <Image
              style={{ width: 15, height: 15 }}
              source={require('../AccountCard/img/add.png')}
            />
          ),
        },
      ]}
    />
  ));
