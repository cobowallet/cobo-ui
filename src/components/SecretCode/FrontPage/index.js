import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import FrontPagePanle from './FrontPagePanle';
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

const FrontPage = ({ locale, goToCodePage }) => {
  const fontPageSetting = lang[locale].frontPage;
  return (
    <FrontPagePanle
      header={fontPageSetting.header}
      subTitle={fontPageSetting.subTitle}
      descriptions={fontPageSetting.descriptions}
      body={Body}
      buttonTitle={fontPageSetting.button}
      buttonOnPress={goToCodePage}
    >
      <CBButton style={{ paddingTop: 10 }} simple text={'我先看看，稍后再说'} />
    </FrontPagePanle>
  );
};

FrontPage.propTypes = {
  locale: PropTypes.string.isRequired,
  goToCodePage: PropTypes.func.isRequired,
};

export default FrontPage;
