import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'CoboUI';

const Container = styled.TouchableOpacity`
  padding-horizontal: 16;
  padding-vertical: 16;
`;

export default function DefaultLeftButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Icon.Ionicons name="ios-arrow-back" size={25} color="#8F95AA" />
    </Container>
  );
}
