import React from 'react';
import { Image } from 'react-native';
import Icon from './icon.jpg';

function EntryIcon({ style }) {
  return <Image source={Icon} style={[{ width: 100, height: 100 }, style]} />;
}

export default EntryIcon;
