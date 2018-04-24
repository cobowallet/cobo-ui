import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import ReceivedSentButtonGroup from './index';

storiesOf('ReceivedSentButtonGroup', module).add('default', () => (
  <ReceivedSentButtonGroup
    theme={'red'}
    sendTitle={'Sent'}
    onSendPress={action('onSendPress')}
    receiveTitle={'Received'}
    onReceivePress={action('onReceivePress')}
  />
));
