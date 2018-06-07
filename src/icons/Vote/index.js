import React from 'react';
import { Image } from 'react-native';

function Vote({ style }) {
  return <Image style={style} source={require('./img/vote.png')} />;
}

export default Vote;
