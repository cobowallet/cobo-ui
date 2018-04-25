import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import WalletButtonGroup from './index';

storiesOf('WalletButtonGroup', module).add('default', () => (
  <WalletButtonGroup
    theme={'red'}
    sendTitle={'Sent'}
    onSendPress={action('onSendPress')}
    receiveTitle={'Received'}
    onReceivePress={action('onReceivePress')}
  />
));
