import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import LNBadge from './index';

storiesOf('LNBadge', module).add('default', () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <LNBadge content={'支持闪电网络'} />
  </View>
));
