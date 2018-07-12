import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import ProgressRow from './index';

storiesOf('ProgressRow', module).add('default', () => (
  <View style={{ padding: 20 }}>
    <ProgressRow percent={20} />
    <ProgressRow style={{ marginTop: 30 }} percent={50} colors={ProgressRow.ColorPreset.green} />
    <ProgressRow style={{ marginTop: 30 }} percent={80} colors={ProgressRow.ColorPreset.red} />
  </View>
));
