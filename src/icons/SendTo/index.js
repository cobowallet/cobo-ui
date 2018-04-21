import React from 'react';
import { Image } from 'react-native';

function SendTo({ style }) {
  return <Image style={style} source={require('./img/send-to.png')} />;
}

export default SendTo;
