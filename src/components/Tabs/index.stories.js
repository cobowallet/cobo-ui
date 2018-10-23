import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Tabs from './index';

storiesOf('Tabs', module).add('default', () => {
  const tabs = [
    {
      index: 0,
      title: 'tab1',
      renderTabView: () => (
        <View style={{ backgroundColor: 'black', height: 200, width: '100%' }} />
      ),
    },
    {
      index: 1,
      title: 'tab2',
      renderTabView: () => <View style={{ backgroundColor: 'red', height: 200, width: '100%' }} />,
    },
  ];

  return <Tabs tabs={tabs} borderBottom />;
});
