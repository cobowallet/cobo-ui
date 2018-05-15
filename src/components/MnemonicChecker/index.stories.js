import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import MnemonicChecker from './index';

storiesOf('Mnemonic Checker', module).add('default', () => (
  <MnemonicChecker
    locale={'zh'}
    codes={[
      'butter',
      'erosion',
      'upper',
      'bullet',
      'original',
      'angle',
      'people',
      'tobacco',
      'you',
      'practice',
      'grab',
      'crowd',
    ]}
    theme={'dark'}
  >
    <View />
  </MnemonicChecker>
));
