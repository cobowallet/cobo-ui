import React from 'react';
import { Image } from 'react-native';

function Spell({ style }) {
  return <Image style={style} source={require('./img/spell.png')} />;
}

export default Spell;
