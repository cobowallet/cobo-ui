import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-horizontal: 16;
  padding-vertical: 12;
  min-height: 60;
  align-items: center;
`;

export const Left = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Right = styled.View`
  margin-left: 12;
  justify-content: center;
  align-items: flex-end;
`;

export const Content = styled.View`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  border-width: 1;
  border-radius: 3;
  border-color: white;
  background-color: rgba(255, 255, 255, 0.2);
  padding-horizontal: 20;
  padding-vertical: 8;
`;
