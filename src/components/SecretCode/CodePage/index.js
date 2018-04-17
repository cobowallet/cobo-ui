import React from 'react';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';
import CodeTable from './CodeTable';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 50;
`;

const getBody = codes => (
  <Container>
    <CodeTable codes={codes} />
  </Container>
);

const generateBtn = (title, onPress) => (
  <CBButton
    style={{
      marginTop: 20,
      marginBottom: 40,
      backgroundColor: 'white',
    }}
    textColor={'#5170EB'}
    text={title}
    onPress={onPress}
  />
);

const CodePage = ({ locale, codes, goToConfirmOne }) => {
  const codePageSetting = lang[locale].codePage;
  return (
    <SecretCodePanel
      header={codePageSetting.header}
      descriptions={codePageSetting.descriptions}
      body={getBody(codes)}
      button={generateBtn(codePageSetting.button, goToConfirmOne)}
    />
  );
};

export default CodePage;
