import styled from 'styled-components/native';
import { CBText } from '../Core';

export const Container = styled.View`
  border-radius: 2;
  background-color: ${props => props.theme.backgroundColor};
  padding-horizontal: 6;
  padding-vertical: 5;
`;

export const ContentText = styled(CBText)`
  color: ${props => props.theme.contentColor};
  font-size: 9;
`;
