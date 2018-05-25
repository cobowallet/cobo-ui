import React from 'react';
import styled from 'styled-components';

const DotContainer = styled.View`
  width: 6;
  height: 6;
  border-radius: 3;
  background-color: rgba(255, 255, 255, 0.3);
`;

export default function Dot() {
  return <DotContainer />;
}
