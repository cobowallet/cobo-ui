import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import AccountLevelBox from './index';

storiesOf('Account Level Box', module)
  .add('future', () => (
    <AccountLevelBox
      level={1}
      canPress={false}
      onPress={action('press')}
      text={{ firstLine: '24小时发币限额：5 BTC', secondLine: 'This is the secondLIne' }}
      selected={false}
    />
  ))
  .add('passed', () => (
    <AccountLevelBox
      level={1}
      canPress
      onPress={action('press')}
      text={{ firstLine: '24小时发币限额：5 BTC', secondLine: 'This is the secondLine' }}
      selected
      styleLevel={'passed'}
    />
  ))
  .add('next', () => (
    <AccountLevelBox
      level={1}
      canPress
      onPress={action('press')}
      text={{ firstLine: '24小时发币限额：5 BTC', secondLine: 'This is the secondLine' }}
      selected
      styleLevel={'next'}
    />
  ));
