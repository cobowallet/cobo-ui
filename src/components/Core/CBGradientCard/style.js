import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientContainer = styled.View`
  overflow: hidden;
  width: 100%;
  border-radius: 5;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
