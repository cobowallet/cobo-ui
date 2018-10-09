import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '../../icons';

const Container = styled.TouchableOpacity`
  padding-horizontal: 16;
  height: 100%;
  justify-content: center;
`;

export default function DefaultLeftButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Ionicons name="ios-arrow-back" size={25} color="#8F95AA" />
    </Container>
  );
}
