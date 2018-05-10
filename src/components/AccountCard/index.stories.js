import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import InactiveAccountCard from './InactiveAccountCard';
import ActiveAccountCard from './ActiveAccountCard';
import { GradientPreset } from './index';

storiesOf('Account Card', module)
  .add('default', () => (
    <InactiveAccountCard
      onEnter={action('onEnter')}
      onViewRule={action('View Rule')}
      onOpen={action('Open Account')}
      title={'Reward Wallet'}
      slogan={'Highest annual earnings of 6.9%↑, Weekly payment'}
      colors={GradientPreset.purple}
    />
  ))
  .add('active purple', () => (
    <ActiveAccountCard
      coinCode={'ETH'}
      coinBalance={'12.4321'}
      currencySymbol={'$'}
      currencyBalance={'4321.21'}
      onSendPress={action('Send')}
      onReceivePress={action('Receive')}
      onEnter={action('Enter')}
      colors={GradientPreset.purple}
      title={'Reward Wallet'}
      reward={'7.48%'}
    />
  ))
  .add('active blue', () => (
    <ActiveAccountCard
      coinCode={'LBTC'}
      coinBalance={'12.4321'}
      currencySymbol={'$'}
      currencyBalance={'4321.21'}
      onSendPress={action('Send')}
      onReceivePress={action('Receive')}
      onEnter={action('Enter')}
      colors={GradientPreset.blue}
      title={'Spending Wallet'}
    />
  ));
