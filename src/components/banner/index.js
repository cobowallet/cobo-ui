import React from 'react';
import { View } from 'react-native';
import CBText from '../Core/CBText/index';
import ArrowRight from '../../icons/ArrowRight';

const Banner = ({ color, descriptions, onPress }) => {
  return (
    <View style={{ height: 60, backgroundColor: color }}>
      <CBText>{descriptions}</CBText>
      <ArrowRight />
      <ArrowRight />
    </View>
  );
};

export default Banner;
