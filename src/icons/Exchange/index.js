import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Exchange({ style }) {
  return <Image style={style} source={require('./img/exchange.png')} />;
}

Exchange.propTypes = {
  style: PropTypes.any,
};

Exchange.defaultProps = {
  style: {},
};

export default Exchange;
