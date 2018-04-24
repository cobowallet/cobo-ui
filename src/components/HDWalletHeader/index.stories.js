import React from 'react';
import { Image, Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { AssetWalletHeader, CoinWalletHeader } from './index';
import coins from '../../icons/CoinLogos';

storiesOf('AssetWalletHeader', module).add('default', () => (
  <AssetWalletHeader
    legalTenderValue={'$48,213 USD'}
    BTCValue={'9.20 BTC'}
    IconPress={() => console.log('hello icon is pressed')}
    theme={'dark'}
  />
));

const { ETH } = coins;
const ETHIcon = <Image source={ETH} />;

storiesOf('CoinWalletHeader', module).add('default', () => (
  <CoinWalletHeader
    legalTenderValue={'$48,213 USD'}
    coinValue={'9.20 BTC'}
    percent={'+23.45%'}
    icon={ETHIcon}
    color={'green'}
    theme={'default'}
  />
));
