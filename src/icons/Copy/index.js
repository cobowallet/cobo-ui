import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function Copy({ type, style }) {
  let source = require('./img/copy.png');

  if (type === 'white') {
    source = require('./img/copy-white.png');
  }
  if (type === 'gray') {
    source = require('./img/copy-gray.png');
  }
  return <Image style={style} source={source} />;
}

Copy.propTypes = {
  type: PropTypes.oneOf(['', 'white', 'gray']),
  style: PropTypes.any,
};

Copy.defaultProps = {
  style: {},
};

export default Copy;
