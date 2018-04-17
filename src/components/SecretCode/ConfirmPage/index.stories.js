import React from 'react';
import { storiesOf } from '@storybook/react-native';
import WordsBox from './WordsBox';
import { ConfirmPageOne } from './index';

storiesOf('WordsBox', module).add('default', () => (
  <WordsBox
    words={['grass', 'belt', 'genius', 'office', 'govern', 'north']}
    selectedWord={'belt'}
  />
));

storiesOf('ConfirmPageOne', module).add('default', () => (
  <ConfirmPageOne
    locale={'zh'}
    words={['grass', 'belt', 'genius', 'o', 'govern', 'north']}
    selectedWord={'belt'}
  />
));
