import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AssetWalletHeader from './AssetWalletHeader';

storiesOf('AssetWalletHeader', module).add('default', () => (
  <AssetWalletHeader
    legalTenderValue={'$48,213 USD'}
    BTCValue={'9.20 BTC'}
    IconPress={() => console.log('hello icon is pressed')}
    theme={'default'}
  />
));
