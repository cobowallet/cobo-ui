import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function CircularArrowRight({ style }) {
  return <Image style={style} source={require('./img/arrow.png')} />;
}

CircularArrowRight.propTypes = {
  style: PropTypes.any,
};

CircularArrowRight.defaultProps = {
  style: {},
};

export default CircularArrowRight;
