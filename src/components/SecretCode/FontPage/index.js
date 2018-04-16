import React from 'react';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import FontPageIcon from './FontPageIcon/index';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';

const Container = styled.View`
  margin-top: 50;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50;
`;

const Body = (
  <Container>
    <FontPageIcon />
  </Container>
);

const generateBtn = title => (
  <CBButton
    style={{
      position: 'absolute',
      bottom: 40,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }}
    textColor={'#5170EB'}
    text={title}
  />
);

const FontPage = ({ locale }) => {
  const fontPageSetting = lang[locale].fontPage;
  return (
    <SecretCodePanel
      header={fontPageSetting.header}
      descriptions={fontPageSetting.descriptions}
      body={Body}
      button={generateBtn(fontPageSetting.button)}
    />
  );
};

export default FontPage;
