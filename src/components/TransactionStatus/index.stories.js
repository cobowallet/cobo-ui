import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TransactionStatus from './index';

storiesOf('TransactionStatus', module).add('Transaction Status', () => (
  <TransactionStatus
    status={'pending'}
    statusText={'确认中'}
    blockConfirmed={10}
    blockTotal={12}
    isInternal={false}
  />
));
