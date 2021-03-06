import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');

export const ModalContainer = styled(Modal)`
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  width: ${0.9 * width};
  background-color: white;
  align-items: center;
  flex-direction: column;
  border-radius: 5;
`;
