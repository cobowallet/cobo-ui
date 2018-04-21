import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Indicator({ style }) {
  return <Image style={style} source={require('./img/indicator.png')} />;
}

export default Indicator;

Indicator.propTypes = {
  style: PropTypes.object,
};

Indicator.defaultProps = {
  style: {},
};
