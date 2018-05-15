import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import SecretCodePanel from '../SecretCode/SecretCodePanel';
import { lang } from './lang';
import CodeTable from '../SecretCode/CodePage/CodeTable';
import { secretCodeTheme } from '../../theme';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 50;
`;

const getBody = codes => (
  <Container>
    <CodeTable codes={codes} />
  </Container>
);

const MnemonicChecker = ({ locale, codes, style, children, theme }) => {
  const checkPageSetting = lang[locale].checkPage;
  const codesList = codes.map((each, index) => ({
    index: index + 1,
    value: each,
  }));
  return (
    <ThemeProvider theme={secretCodeTheme[theme] || secretCodeTheme.default}>
      <SecretCodePanel
        header={checkPageSetting.header}
        descriptions={checkPageSetting.descriptions}
        body={getBody(codesList)}
        style={style}
      >
        {children}
      </SecretCodePanel>
    </ThemeProvider>
  );
};

MnemonicChecker.propTypes = {
  theme: PropTypes.string,
  locale: PropTypes.string.isRequired,
  style: PropTypes.object,
};

MnemonicChecker.defaultProps = {
  theme: 'dark',
};

export default MnemonicChecker;
