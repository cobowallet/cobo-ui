import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import VoteHeader from './index';

storiesOf('Vote Detail Header', module).add('default', () => (
  <View
    style={{
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: 'red',
    }}
  >
    <VoteHeader
      {...{
        backgroundImageUrl: '',
        logoUrl: '',
        name: 'EOSflytoMARS',
        contact: '@eosflytomars',
        desc: '我们的航程是火箭银河',
        coin: 'EOS',
      }}
    />
  </View>
));
