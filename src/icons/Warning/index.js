import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import blue from './img/warning.png';
import gray from './img/warning_gray.png';

const ICON = {
  blue,
  gray,
};

function Warning({ style, type }) {
  return <Image style={style} source={ICON[type]} />;
}

export default Warning;

Warning.propTypes = {
  style: PropTypes.object,
  type: PropTypes.oneOf(['blue', 'gray']),
};

Warning.defaultProps = {
  style: {},
  type: 'blue',
};
