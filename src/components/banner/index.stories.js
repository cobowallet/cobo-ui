import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { NoticeBanner, RewardBanner } from './index';

storiesOf('Banner', module)
  .add('default', () => (
    <NoticeBanner
      description={'ETH has launched a gain function with an annual revenue of 15.6%, enjoy gains'}
      theme={'default'}
      onPress={() => console.log('this is the onpress function')}
    />
  ))
  .add('NoticeBanner dark', () => (
    <NoticeBanner
      description={'ETH has launched a gain function with an annual revenue of 15.6%, enjoy gains'}
      theme={'dark'}
      onPress={() => console.log('this is the onpress function')}
    />
  ))
  .add('RewardBanner default', () => (
    <RewardBanner
      balanceValue={'增益余额：3.2000 ETH'}
      totalRevenueValue={'总增益：11.82460720 ETH (+2.3%)'}
      dateValue={'下次支付日：2018-3-31 12:00:00'}
      transferTitle={'划转'}
      onTransferPress={() => console.log('this is the onpress function')}
      theme={'default'}
    />
  ))
  .add('RewardBanner dark', () => (
    <RewardBanner
      balanceValue={'增益余额：3.2000 ETH'}
      totalRevenueValue={'总增益：11.82460720 ETH (+2.3%)'}
      dateValue={'下次支付日：2018-3-31 12:00:00'}
      transferTitle={'划转'}
      onTransferPress={() => console.log('this is the onpress function')}
      theme={'dark'}
    />
  ));
