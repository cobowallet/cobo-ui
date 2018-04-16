import React from 'react';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import FontPageIcon from './FontPageIcon/index';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';
import SecretModal from '../SecretModal';

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

const generateBtn = (title, onPress) => (
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
    onPress={onPress}
  />
);

const FontPage = ({ locale, isModalOpen, closeModal, openModal }) => {
  const fontPageSetting = lang[locale].fontPage;
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

export default FontPage;
