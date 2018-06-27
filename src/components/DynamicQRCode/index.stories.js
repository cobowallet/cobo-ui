import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import DynamicQRCode from './index';

const Contaienr = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

storiesOf('DynamicQRCode', module).add('dynamic', () => (
  <Contaienr>
    <DynamicQRCode words={'www.cobo.com'} />
  </Contaienr>
));
