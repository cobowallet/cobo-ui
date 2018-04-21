import React from 'react';
import { Image } from 'react-native';
import FaceID from './face-id.png';

function Fingerprint({ style }) {
  return <Image source={FaceID} style={[{ width: 120, height: 120 }, style]} />;
}

export default Fingerprint;
