import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { CBContainer } from '../Core';
import WalletAddonItem from './index';
import { Voting } from '../../icons';

storiesOf('WalletAddonItem', module).add('default', () => (
  <CBContainer padder style={{ backgroundColor: '#f5f5f8', paddingTop: 20 }}>
    <WalletAddonItem
      title={'Voting'}
      subTitle={'Vote to help elect Block Producers. Vote to help elect Block Producers'}
      onPress={action('pressed')}
      renderIcon={() => <Voting />}
    />
  </CBContainer>
));
