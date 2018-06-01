import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { DefaultLeftButton } from './index';

storiesOf('Default Left Button', module).add('default', () => (
  <DefaultLeftButton onPress={() => console.log('click')} />
));
