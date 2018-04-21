import React from 'react';
import { Image } from 'react-native';
import TouchID from './touchID.png';

function Fingerprint({ style }) {
  return <Image source={TouchID} style={style} />;
}

export default Fingerprint;
