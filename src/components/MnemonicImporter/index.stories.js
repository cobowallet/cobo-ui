import React from 'react';
import { storiesOf } from '@storybook/react-native';
import MnemonicImporter from './index';

storiesOf('Mnemonic Importer', module).add('default', () => (
  <MnemonicImporter
    locale={'zh'}
    onNextPage={() => {
      console.log('this is the callback props');
    }}
    wordsNumber={12}
    theme={'dark'}
    onCancel={() => console.log('this is the cancel function')}
  />
));
