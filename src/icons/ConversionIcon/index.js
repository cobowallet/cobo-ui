import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function ConversionIcon({ style }) {
  return <Image style={style} source={require('./img/conversion.png')} />;
}

export default ConversionIcon;

ConversionIcon.propTypes = {
  style: PropTypes.object,
};

ConversionIcon.defaultProps = {
  style: {},
};
