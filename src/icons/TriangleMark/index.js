import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function TriangleMark({ style }) {
  return <Image style={style} source={require('./img/triangle-mark.png')} />;
}

TriangleMark.propTypes = {
  style: PropTypes.any,
};

TriangleMark.defaultProps = {
  style: {},
};

export default TriangleMark;
