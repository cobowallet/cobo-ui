import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SecretModal from './index';

storiesOf('SecretModal', module).add('default', () => <SecretModal isModalOpen />);
