import React from 'react';
import { Image } from 'react-native';

function GreenCheck({ style }) {
  return <Image style={style} source={require('./img/green-check.png')} />;
}

GreenCheck.propTypes = {};

GreenCheck.defaultProps = {};

export default GreenCheck;
