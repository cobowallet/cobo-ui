// @flow
import React from 'react';
import CBShadow from '../CBShadow';
import { GradientContainer, Gradient } from './style';

type Props = {
  renderChild?: any,
  colors: any,
};

function GradientCard({ renderChild, colors }: Props) {
  return (
    <CBShadow style={{ marginBottom: 16, borderRadius: 5 }}>
      <GradientContainer>
        <Gradient colors={colors} start={{ x: 0, y: 0.2 }} end={{ x: 1, y: 0.8 }} />
        {renderChild()}
      </GradientContainer>
    </CBShadow>
  );
}

export default GradientCard;
