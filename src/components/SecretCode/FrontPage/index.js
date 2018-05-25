import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import FrontPagePanle from './FrontPagePanle';
import FrontPageIcon from './FrontPageIcon/index';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';

const Container = styled.View`
  margin-top: 64;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50;
`;

const Body = (
  <Container>
    <FrontPageIcon />
  </Container>
);

const FrontPage = ({ locale, goToCodePage, style, onCancel }) => {
  const fontPageSetting = lang[locale].frontPage;
  return (
    <FrontPagePanle
      header={fontPageSetting.header}
      subTitle={fontPageSetting.subTitle}
      descriptions={fontPageSetting.descriptions}
      body={Body}
      buttonTitle={fontPageSetting.button}
      buttonOnPress={goToCodePage}
      style={style}
    >
      <CBButton
        style={{ paddingTop: 20 }}
        simple
        text={fontPageSetting.secondButton}
        textStyle={{ color: 'rgba(255, 255, 255, 0.5)' }}
        onPress={onCancel}
      />
    </FrontPagePanle>
  );
};

FrontPage.propTypes = {
  locale: PropTypes.string.isRequired,
  goToCodePage: PropTypes.func.isRequired,
  style: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
};

export default FrontPage;
