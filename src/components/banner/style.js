import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  height: 60;
  flex-direction: row;
`;

export const Left = styled.View`
  width: 90%;
  align-content: center;
  justify-content: center;
  padding-left: 10;
`;

export const Right = styled.View`
  width: 10%;
  align-content: center;
  justify-content: center;
`;

export const ArrowContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10;
`;
