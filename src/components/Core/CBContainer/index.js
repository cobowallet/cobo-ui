import styled from 'styled-components/native';

const CBContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: ${props => (props.alignCenter ? 'center' : 'stretch')};
  padding-left: ${props => (props.padder ? 16 : 0)};
  padding-right: ${props => (props.padder ? 16 : 0)};
`;

export default CBContainer;
