import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import AggrementContent from './index';

storiesOf('AggrementContent', module).add('default', () => (
  <AggrementContent
    source={{ uri: 'https://www.baidu.com' }}
    acceptHint={'I accept Cobo Privacy Policy and Term of Service.'}
    continueTitle={'Continue'}
    onContinuePress={() => {
      action('onContinuePress');
      console.log('onContinuePress');
    }}
  />
));
