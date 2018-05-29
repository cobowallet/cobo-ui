import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import ButtonGroup from './index';
import { SendIcon, ReceiveIcon } from '../../icons';

const buttons = [
  {
    onPress: () => console.log('send'),
    canPress: true,
    title: 'Send',
    renderImage: () => <SendIcon type={'spending'} />,
  },
  {
    onPress: () => console.log('Receive'),
    canPress: true,
    title: 'Receive',
    renderImage: () => <ReceiveIcon type={'spending'} />,
  },
];

storiesOf('ButtonGroup', module).add('default', () => (
  <View
    style={{
      backgroundColor: 'blue',
      alignItems: 'stretch',
      justifyContent: 'center',
    }}
  >
    <ButtonGroup buttons={buttons} />
  </View>
));
