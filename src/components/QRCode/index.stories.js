import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import CBQRCode from './index';

const Contaienr = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

storiesOf('QRCode', module)
  .add('supported coin', () => (
    <Contaienr>
      <CBQRCode size={220} code={'www.cobo.com'} logo={'BTC'} />
    </Contaienr>
  ))
  .add('external image', () => (
    <Contaienr>
      <CBQRCode
        size={220}
        code={'www.cobo.com'}
        logo={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
    </Contaienr>
  ))
  .add('no image', () => (
    <Contaienr>
      <CBQRCode size={220} code={'www.cobo.com'} />
    </Contaienr>
  ));
