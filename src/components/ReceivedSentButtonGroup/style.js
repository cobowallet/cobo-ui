import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  width: 100%;
  height: 56;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-top-color: ${props => props.theme.bottonLineColor};
  border-top-width: 0.5;
  shadow-radius: 4;
  shadow-opacity: 0.1;
  shadow-color: ${props => props.theme.buttonShawColor};
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
  color: ${props => props.theme.buttonTextColor};
  font-size: 15;
  margin-left: 12;
`;

export const DivideLine = styled.View`
  height: 30;
  width: 4;
  background-color: ${props => props.theme.bottonLineColor};
  border-radius: 2;
  opacity: 0.8;
`;
