import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Banner from './index';

storiesOf('Banner', module).add('default', () => (
  <Banner
    description={'ETH has launched a gain function with an annual revenue of 15.6%, enjoy gains'}
    theme={'dark'}
    onPress={() => console.log('this is the onpress function')}
  />
));
