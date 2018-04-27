import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Image } from 'react-native';
import { NoticeBanner, RewardBanner } from './index';
import { CoinWalletHeader } from '../HDWalletHeader';

import coins from '../../icons/CoinLogos';
const { ETH } = coins;
const ETHIcon = <Image source={ETH} />;

storiesOf('Banner', module)
  .add('default', () => (
    <NoticeBanner
      description={'ETH has launched a gain function with an annual revenue of 15.6%, enjoy gains'}
      theme={'default'}
      onPress={() => console.log('this is the onpress function')}
    />
  ))
  .add('NoticeBanner dark', () => (
    <CoinWalletHeader
      fiatCurrencyValue={'$48,213'}
      coinValue={'9.20 BTC'}
      percent={'+23.45%'}
      icon={ETHIcon}
      color={'#50DFBE'}
      theme={'dark'}
    >
      <NoticeBanner
        description={
          'ETH has launched a gain function with an annual revenue of 15.6%, enjoy gains'
        }
        theme={'dark'}
        onPress={() => console.log('this is the onpress function')}
        style={{ marginTop: 30 }}
      />
    </CoinWalletHeader>
  ))
  .add('RewardBanner default', () => (
    <CoinWalletHeader
      fiatCurrencyValue={'$48,213'}
      coinValue={'9.20 BTC'}
      percent={'+23.45%'}
      icon={ETHIcon}
      color={'#50DFBE'}
      theme={'default'}
    >
      <RewardBanner
        balanceValue={'增益余额：3.2000 ETH'}
        totalRevenueValue={'总增益：11.82460720 ETH (+2.3%)'}
        dateValue={'下次支付日：2018-3-31 12:00:00'}
        transferTitle={'划转'}
        onTransferPress={() => console.log('this is the onpress function')}
        theme={'default'}
        style={{ marginTop: 30 }}
      />
    </CoinWalletHeader>
  ))
  .add('RewardBanner dark', () => (
    <CoinWalletHeader
      fiatCurrencyValue={'$48,213'}
      coinValue={'9.20 BTC'}
      percent={'+23.45%'}
      icon={ETHIcon}
      color={'#50DFBE'}
      theme={'dark'}
    >
      <RewardBanner
        balanceValue={'增益余额：3.2000 ETH'}
        totalRevenueValue={'总增益：11.82460720 ETH (+2.3%)'}
        dateValue={'下次支付日：2018-3-31 12:00:00'}
        transferTitle={'划转'}
        onTransferPress={() => console.log('this is the onpress function')}
        theme={'dark'}
        style={{ marginTop: 30 }}
      />
    </CoinWalletHeader>
  ));
