import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import FrontPageIcon from './FrontPageIcon/index';
import { lang } from '../lang';

const Container = styled.View`
  margin-top: 100;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30;
`;

const Body = (
  <Container>
    <FrontPageIcon />
  </Container>
);

const FrontPage = ({ locale, goToCodePage }) => {
  const fontPageSetting = lang[locale].frontPage;
  return (
    <SecretCodePanel
      header={fontPageSetting.header}
      descriptions={fontPageSetting.descriptions}
      body={Body}
      buttonTitle={fontPageSetting.button}
      buttonOnPress={goToCodePage}
    />
  );
};

FrontPage.propTypes = {
  locale: PropTypes.string.isRequired,
  goToCodePage: PropTypes.func.isRequired,
};

export default FrontPage;
