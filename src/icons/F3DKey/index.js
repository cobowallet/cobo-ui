import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function F3DKey({ style }) {
  return <Image style={style} source={require('./img/key.png')} />;
}

F3DKey.propTypes = {
  style: PropTypes.any,
};

F3DKey.defaultProps = {
  style: {},
};

export default F3DKey;
