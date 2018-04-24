import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import TransactionRecordRow from './index';

storiesOf('Transaction Record', module)
  .add('red packet', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut={true}
      title="Send red packet"
      amount="20"
      message="To: Red packet"
      extra="2018/04/15"
    />
  ))
  .add('send to blockchain', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut={true}
      title="Send"
      amount="1000"
      message="To: 0x1jf...ddjf"
      extra={{
        status: 'pending',
        statusText: '确认中',
        blockTotal: 12,
        blockConfirmed: 3,
        isInternal: false,
      }}
    />
  ))
  .add('send internally', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut={true}
      title="Send"
      amount="1000"
      message="To: 0x1jf...ddjf"
      extra={{ status: 'complete', statusText: '已确认' }}
    />
  ))
  .add('receive', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut={false}
      title="Received"
      amount="1000"
      message="From: 0x1jf...ddjf"
      extra={{
        status: 'complete',
        statusText: '已确认',
        blockTotal: 12,
        blockConfirmed: 12,
        isInternal: false,
      }}
    />
  ))
  .add('receive with no icon', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut={false}
      showIcon={false}
      title="Received"
      amount="1000"
      message="From: 0x1jf...ddjf"
      extra="2018/04/17"
    />
  ));
