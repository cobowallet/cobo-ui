import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import TransactionRecordRow from './index';

storiesOf('Transaction Record', module)
  .add('red packet', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut
      title="Send red packet"
      amount="20"
      messageTitle="To:"
      message="Red packet"
      extra="2018/04/15"
    />
  ))
  .add('send to blockchain', () => (
    <TransactionRecordRow
      action={'recv_pos_dividend'}
      showIcon
      coinCode="ETH"
      isSendOut
      title="Receive red packet"
      amount="1000"
      messageTitle="To:"
      message="0x1jffsljflsdjflkjsdfklddjf"
      extra={{
        status: 'pending',
        statusText: '3/12 确认中',
      }}
      style={{ backgroundColor: 'red' }}
    />
  ))
  .add('send internally', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut
      title="Send"
      amount="1000"
      messageTitle="To:"
      message="0x1jfwejfjsldfjsdlfslkjfdlk;asjfl;kjsadl;fjasd;lfjl;ddjf"
      extra={{ status: 'complete', statusText: '已确认' }}
    />
  ))
  .add('receive', () => (
    <TransactionRecordRow
      coinCode="ETH"
      isSendOut={false}
      title="Received"
      amount="1000.00000000000000"
      messageTitle="From:"
      message="0x1jfsakljfdl;kjas;lfkjsa;lfjddjf"
      extra={{
        status: 'complete',
        statusText: '12/12 已确认',
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
      messageTitle="From:"
      message="0x1jflskjdflkasdjdflk;jsal;fjsadl;jfddjf"
      extra="2018/04/17"
    />
  ));
