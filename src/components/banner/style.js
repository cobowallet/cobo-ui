import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  height: 60;
  flex-direction: row;
`;

export const Left = styled.View`
  width: 90%;
  justify-content: center;
  padding-left: 10;
`;

export const Right = styled.View`
  width: 10%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10;
`;
