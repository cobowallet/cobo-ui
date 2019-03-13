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
      'aim',
      'amateur',
      'bachelor',
      'zebra',
      'wish',
      'witness',
      'violin',
      'virtual',
      'truly',
      'trumpet',
      'struggle',
      'student',
    ]}
    onSuccess={() => {
      console.log('this is the callback props');
    }}
    onCancel={() => console.log('this is the cancel function')}
    onFail={() => console.log('error')}
    questionNumber={3}
  />
));
