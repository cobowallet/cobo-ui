import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import RewardBadge from './index';

storiesOf('RewardBadge', module).add('default', () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <RewardBadge content={'年化收益300%+'} />
  </View>
));
