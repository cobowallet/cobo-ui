import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function ArrowRight({ style }) {
  return <Image style={style} source={require('./img/arrow-right.png')} />;
}

export default ArrowRight;

ArrowRight.propTypes = {
  style: PropTypes.object,
};

ArrowRight.defaultProps = {
  style: {},
};
