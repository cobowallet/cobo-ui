import React from 'react';
import { Image } from 'react-native';

function CameraBackground({ style }) {
  return (
    <Image
      style={[{ height: '100%', width: '100%' }, style]}
      resizeMode={'cover'}
      source={require('./backgroundAlpha.png')}
    />
  );
}

export default CameraBackground;
