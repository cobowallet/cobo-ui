import styled from 'styled-components/native';
import { CBText } from '../Core';

export const Container = styled.View`
  border-radius: 3;
  background-color: ${props => props.theme.backgroundColor};
  padding-horizontal: 5;
  padding-vertical: 4;
`;

export const ContentText = styled(CBText)`
  color: ${props => props.theme.contentColor};
  font-size: 9;
`;
