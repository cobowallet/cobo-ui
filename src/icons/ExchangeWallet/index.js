import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import exchange from './img/exchange.png';

function ExchangeWallet({ style }) {
  return <Image style={style} source={exchange} />;
}

ExchangeWallet.propTypes = {
  style: PropTypes.object,
};

ExchangeWallet.defaultProps = {
  style: {},
};

export default ExchangeWallet;
