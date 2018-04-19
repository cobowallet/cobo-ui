import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import FrontPageIcon from './FrontPageIcon/index';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';

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

const generateButton = (title, onPress) => (
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

const FrontPage = ({ locale, goToCodePage }) => {
  const fontPageSetting = lang[locale].frontPage;
  return (
    <SecretCodePanel
      header={fontPageSetting.header}
      descriptions={fontPageSetting.descriptions}
      body={Body}
      button={generateButton(fontPageSetting.button, goToCodePage)}
    />
  );
};

FrontPage.propTypes = {
  locale: PropTypes.string.isRequired,
  goToCodePage: PropTypes.func.isRequired,
};

export default FrontPage;
