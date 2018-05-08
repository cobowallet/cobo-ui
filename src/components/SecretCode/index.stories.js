import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SecretCode from './index';

storiesOf('Secret code', module).add('default', () => (
  <SecretCode
    locale={'zh'}
    secretWords={[
      'grass',
      'belt',
      'genius',
      'office',
      'govern',
      'north',
      'convince',
      'rotate',
      'dilemma',
      'vendor',
      'conduct',
      'invite',
    ]}
    onSuccess={() => {
      console.log('this is the callback props');
    }}
    questionNumber={3}
  />
));
