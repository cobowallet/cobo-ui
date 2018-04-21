import React from 'react';
import { Image } from 'react-native';

function RedPacket({ style }) {
  return <Image style={style} source={require('./img/red-packet.png')} />;
}

export default RedPacket;
