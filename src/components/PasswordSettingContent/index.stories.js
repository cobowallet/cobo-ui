import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PasswordSettingContent from './index';

storiesOf('PasswordSettingContent', module).add('default', () => {
  return (
    <PasswordSettingContent
      onComplete={password => {
        console.log('PasswordSettingContent ', password);
      }}
    />
  );
});
