import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TransactionStatus from './index';

storiesOf('TransactionStatus', module).add('Transaction Status', () => (
  <TransactionStatus status={'pending'} statusText={'12/12 确认中'} />
));
