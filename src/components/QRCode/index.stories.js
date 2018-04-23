import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native'
import CBQRCode from './index';

const Contaienr = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

storiesOf('QRCode', module)
  .add('show', () => (
    <Contaienr >
      <CBQRCode
        size={220}
        code={'www.cobo.com'}
        logo={'BTC'}/>
    </Contaienr>
  ));
