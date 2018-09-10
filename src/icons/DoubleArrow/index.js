import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import whiteDoubleArrow from './img/double-arrow.png';
import blueDoubleArrow from './img/blue-double-arrow.png';
import purpleDoubleArrow from './img/purple-double-arrow.png';
import orangeDoubleArrow from './img/orange-double-arrow.png';

const ARROW_IMG_PATHS = {
  whiteDoubleArrow,
  blueDoubleArrow,
  purpleDoubleArrow,
  orangeDoubleArrow,
};

function DoubleArrow({ style, type }) {
  return <Image style={style} source={ARROW_IMG_PATHS[type]} />;
}

DoubleArrow.propTypes = {
  style: PropTypes.any,
  type: PropTypes.oneOf([
    'whiteDoubleArrow',
    'blueDoubleArrow',
    'purpleDoubleArrow',
    'orangeDoubleArrow',
  ]),
};

DoubleArrow.defaultProps = {
  style: {},
  type: 'whiteDoubleArrow',
};

export default DoubleArrow;
