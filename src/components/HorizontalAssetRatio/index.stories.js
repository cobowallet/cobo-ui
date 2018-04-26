import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import HorizontalAssetRatio from './index';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #5c6c92;
  padding-left: 16;
  padding-right: 16;
`;

storiesOf('Asset Ratio', module).add('default', () => (
  <Container>
    <HorizontalAssetRatio
      assets={[
        { label: 'BTC', percentage: 0.21 },
        { label: 'ETH', percentage: 0.1 },
        { label: 'LBTC', percentage: 0.2 },
        { label: 'EOS', percentage: 0.4 },
        { label: 'TCH', percentage: 0.01 },
        { label: 'BEC', percentage: 0.08 },
      ]}
    />
  </Container>
));
