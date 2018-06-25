import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import RewardCoinCard from './index';

storiesOf('RewardCoinCard', module).add('default', () => (
  <View style={{ flex: 1, backgroundColor: '#F5F5F8', paddingHorizontal: 16, paddingVertical: 20 }}>
    <RewardCoinCard
      coinCode="LBTC"
      displayCode="LBTC"
      slogan="300%+ Yearly"
      earned="12.327938"
      earnedText="earned"
      buttonText="Join now"
      onButtonPress={() => {
        console.log('press');
      }}
    />
  </View>
));
