import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText } from '../Core';

export const Container = styled(LinearGradient)`
  border-radius: 3;
  padding-horizontal: 5;
  padding-vertical: 4;
`;

export const ContentText = styled(CBText)`
  color: ${props => props.theme.contentColor};
  font-size: 9;
`;
