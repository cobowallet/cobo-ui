import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function GrayArrowDown({ style }) {
  return <Image style={style} source={require('./img/gray-arrow-down.png')} />;
}

export default GrayArrowDown;

GrayArrowDown.propTypes = {
  style: PropTypes.object,
};

GrayArrowDown.defaultProps = {
  style: {},
};
