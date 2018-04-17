import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CodeTable from './CodeTable';

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
