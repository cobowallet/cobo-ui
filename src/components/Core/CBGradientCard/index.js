// @flow
import React from 'react';
import CBShadow from '../CBShadow';
import { GradientContainer, Gradient } from './style';

type Props = {
  renderChild?: any,
  colors: any,
  hasShadow: boolean,
  hasRadius: boolean,
  style?: any,
};

function GradientCard({ renderChild, colors, hasShadow, hasRadius, style }: Props) {
  return (
    <CBShadow
      style={[
        {
          marginBottom: 16,
          ...(hasRadius ? borderRadiusStyle : {}),
          ...(hasShadow ? {} : noShadowStyle),
        },
        style,
      ]}
    >
      <GradientContainer
        style={{
          ...(hasRadius ? borderRadiusStyle : {}),
        }}
      >
        <Gradient colors={colors} start={{ x: 0, y: 0.2 }} end={{ x: 1, y: 0.8 }} />
        {renderChild()}
      </GradientContainer>
    </CBShadow>
  );
}

const borderRadiusStyle = {
  borderRadius: 5,
};

const noShadowStyle = {
  shadowColor: 'white',
  shadowOpacity: 0,
  shadowRadius: 0,
  shadowOffset: { width: 0, height: 0 },
};

export default GradientCard;
