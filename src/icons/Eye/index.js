import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

export default function Eye({ style }) {
  return <Image style={style} source={require('./img/eye.png')} />;
}

Eye.propTypes = {
  style: PropTypes.any,
};

Eye.defaultProps = {
  style: {},
};
