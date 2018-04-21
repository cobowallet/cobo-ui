import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function ArrowBack({ style }) {
  return <Image style={style} source={require('./img/arrow-back.png')} />;
}

export default ArrowBack;

ArrowBack.propTypes = {
  style: PropTypes.object,
};

ArrowBack.defaultProps = {
  style: {},
};
