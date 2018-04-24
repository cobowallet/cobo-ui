import styled from 'styled-components/native';
import { FontColors, LINE_COLORS } from '../../theme/CBColor';

export const ButtonContainer = styled.View`
  width: 100%;
  height: 56;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-top-color: ${LINE_COLORS.LINE};
  border-top-width: 0.5;
  shadow-radius: 4;
  shadow-opacity: 0.1;
  shadow-color: #00109c;
  shadow-offset: 0 0;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  color: ${FontColors.dark};
  font-size: 15;
  margin-left: 12;
`;

export const DivideLine = styled.View`
  height: 30;
  width: 4;
  background-color: ${LINE_COLORS.LINE};
  border-radius: 2;
  opacity: 0.8;
`;
