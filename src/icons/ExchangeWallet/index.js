import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function ExchangeWallet({ style, size = '1' }) {
  return <Image style={style} source={require(`./img/exchange@${size}x.png`)} />;
}

ExchangeWallet.PropTypes = {
  style: PropTypes.object,
  size: PropTypes.string,
};

ExchangeWallet.defaultProps = {
  style: {},
  size: '1',
};

export default ExchangeWallet;
