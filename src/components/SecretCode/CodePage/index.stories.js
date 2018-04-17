import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CodeTable from './CodeTable';
import CodePage from './index';

storiesOf('CodeTable', module).add('default', () => (
  <CodeTable
    codes={[
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
  />
));

storiesOf('CodePage', module).add('default', () => (
  <CodePage
    locale={'zh'}
    codes={[
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
  />
));
