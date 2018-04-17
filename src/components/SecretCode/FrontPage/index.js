import React from 'react';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import FrontPageIcon from './FrontPageIcon/index';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';
import SecretModal from '../SecretModal';

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

const FrontPage = ({ locale, isModalOpen, closeModal, openModal }) => {
  const fontPageSetting = lang[locale].frontPage;
  const modalSetting = lang[locale].modal;
  return (
    <SecretCodePanel
      header={fontPageSetting.header}
      descriptions={fontPageSetting.descriptions}
      body={Body}
      button={generateBtn(fontPageSetting.button, openModal)}
    >
      <SecretModal
        isModalOpen={isModalOpen}
        header={modalSetting.header}
        description={modalSetting.description}
        button={modalSetting.button}
        onPress={closeModal}
      />
    </SecretCodePanel>
  );
};

export default FrontPage;
