import React from 'react';
import { Image } from 'react-native';

function Warning({ style }) {
  return <Image style={style} source={require('./img/warning.png')} />;
}

export default Warning;
