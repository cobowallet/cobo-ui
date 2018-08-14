import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import AdBadge from './index';

storiesOf('AdBadge', module).add('default', () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <AdBadge content={'New'} />
  </View>
));
