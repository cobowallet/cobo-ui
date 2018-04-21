import React from 'react';
import { Image } from 'react-native';
import Success from './success.png';

function SuccessIcon({ style }) {
  return <Image source={Success} style={style} />;
}

export default SuccessIcon;
