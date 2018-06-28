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
    <DynamicQRCode
      words={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie in mauris vitae consequat. Morbi ac dolor neque. Aenean hendrerit tortor interdum ipsum dictum, vitae commodo enim egestas. Praesent tincidunt enim mauris, ut imperdiet augue feugiat in. Aenean at lacus turpis. Vestibulum egestas in ipsum et euismod. Nunc suscipit tempus metus non condimentum. Cras venenatis turpis non neque malesuada, ac tristique odio ullamcorper. Maecenas eget cursus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin elementum purus in arcu ultrices, et gravida felis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pellentesque, mi sodales hendrerit lobortis, elit elit consectetur arcu, tempus aliquet diam purus sed metus. Mauris auctor sodales fermentum. Etiam placerat in odio sed auctor. Nunc volutpat mattis neque eu fringilla.'
      }
    />
  </Contaienr>
));
