import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import SecretCodePanel from '../SecretCodePanel';
import { lang } from '../lang';
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

const CodePage = ({ locale, codes, goToConfirmOne }) => {
  const codePageSetting = lang[locale].codePage;
  return (
    <SecretCodePanel
      header={codePageSetting.header}
      descriptions={codePageSetting.descriptions}
      body={getBody(codes)}
      buttonTitle={codePageSetting.button}
      buttonOnPress={goToConfirmOne}
    />
  );
};

CodePage.propTypes = {
  locale: PropTypes.string.isRequired,
  codes: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default CodePage;
