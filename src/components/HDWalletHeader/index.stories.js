import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { AssetWalletHeader, CoinWalletHeader } from './index';

storiesOf('AssetWalletHeader', module).add('default', () => (
  <AssetWalletHeader
    legalTenderValue={'$48,213 USD'}
    BTCValue={'9.20 BTC'}
    IconPress={() => console.log('hello icon is pressed')}
    theme={'dark'}
  />
));

storiesOf('CoinWalletHeader', module).add('default', () => (
  <CoinWalletHeader
    legalTenderValue={'$48,213 USD'}
    coinValue={'9.20 BTC'}
    percent={'+23.45%'}
    color={'green'}
    theme={'default'}
  />
));
