import React from 'react';
import { Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import WalletHeader from './WalletHeader';
import { WalletHeaderGradientPreset } from './index';

storiesOf('Wallet Header', module)
  .add('Financing purple', () => (
    <WalletHeader
      coinCode={'ETH'}
      coinBalance={'12.4321'}
      currencySymbol={'$'}
      currencyBalance={'4321.21'}
      totalRevenue={'Total revenue 121.0000'}
      nextPaymentTime={'Next payment day 2017-12-21 14:57:02'}
      colors={WalletHeaderGradientPreset.purple}
      buttons={[
        {
          onPress: () => action('onTransferout'),
          canPress: true,
          title: 'Transfer out',
          renderImage: () => (
            <Image
              style={{ width: 15, height: 15 }}
              source={require('../AccountCard/img/add.png')}
            />
          ),
        },
        {
          onPress: () => action('onTransferin'),
          canPress: true,
          title: 'Transfer in',
          renderImage: () => (
            <Image
              style={{ width: 15, height: 15 }}
              source={require('../AccountCard/img/add.png')}
            />
          ),
        },
      ]}
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
