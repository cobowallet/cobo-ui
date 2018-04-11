import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import doc from 'storybook-addon-docgen';
import CBContainer from '../CBContainer';
import GradientCard from './index';

const renderChild = () => {
  return <View style={{ height: 200 }} />;
};

storiesOf('GradientCard', module)
  .addDecorator(doc)
  .add('default', () => (
    <CBContainer padder>
      <GradientCard hasRadius hasShadow colors={['#6E93E9', '#014AF3']} renderChild={renderChild} />
      <GradientCard hasRadius hasShadow colors={['#014AF3', '#7E02E0']} renderChild={renderChild} />
    </CBContainer>
  ));
