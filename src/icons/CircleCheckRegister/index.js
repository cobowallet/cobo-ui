import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

export default function CircleCheckRegister({ checked, style }) {
  const getSource = checked => {
    return checked ? require('./img/checked.png') : require('./img/nocheck.png');
  };

  return <Image style={style} source={getSource(checked)} />;
}

CircleCheckRegister.propTypes = {
  checked: PropTypes.bool,
};
