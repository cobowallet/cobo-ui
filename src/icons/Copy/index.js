import React from 'react';
import { Image } from 'react-native';

function Copy({ style }) {
  return <Image style={style} source={require('./img/copy.png')} />;
}

export default Copy;
