import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

export default function CircleCheck({ checked, style }) {
  const getSource = checked => {
    return checked ? require('./img/circle-check.png') : require('./img/circle.png');
  };

  return <Image style={style} source={getSource(checked)} />;
}

CircleCheck.propTypes = {
  checked: PropTypes.bool,
};
