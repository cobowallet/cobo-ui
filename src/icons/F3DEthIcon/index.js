import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function F3DEthIcon({ style }) {
  return <Image style={style} source={require('./img/eth.png')} />;
}

F3DEthIcon.propTypes = {
  style: PropTypes.any,
};

F3DEthIcon.defaultProps = {
  style: {},
};

export default F3DEthIcon;
