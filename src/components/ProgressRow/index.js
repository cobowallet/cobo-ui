import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Outer = styled.View`
  height: 8px;
  width: 100%;
  border-radius: 4px;
  background-color: #ecf0ff;
  overflow: hidden;
`;

const Inner = styled.View`
  flex: 1;
  width: ${props => props.percent}%;
`;

const BLUE = ['#7CAFFF', '#5170EB'];
const GREEN = ['#4DDDBC', '#2BB2FF'];
const RED = ['#FFB972', '#FF3D37'];

function ProgressRow({ percent, style, colors = BLUE }) {
  if (percent < 0 || percent > 100) {
    throw new Error('percent must between 0 - 100');
  }
  return (
    <Outer style={style}>
      <Inner percent={percent || 0}>
        <LinearGradient
          style={{ flex: 1 }}
          colors={colors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
      </Inner>
    </Outer>
  );
}

ProgressRow.ColorPreset = {
  blue: BLUE,
  green: GREEN,
  red: RED,
};

export default ProgressRow;
